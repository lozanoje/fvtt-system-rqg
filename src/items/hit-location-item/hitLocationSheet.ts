import { ItemTypeEnum } from "../../data-model/item-data/itemTypes";
import {
  HitLocationDataProperties,
  HitLocationDataPropertiesData,
  hitLocationHealthStatuses,
  HitLocationTypesEnum,
} from "../../data-model/item-data/hitLocationData";
import { RqgActor } from "../../actors/rqgActor";
import {
  activateChatTab,
  assertItemType,
  getGame,
  getHitLocations,
  localize,
  requireValue,
  RqgError,
  usersThatOwnActor,
} from "../../system/util";
import { RqgItemSheet } from "../RqgItemSheet";
import { DamageCalculations } from "../../system/damageCalculations";
import { HealingCalculations } from "../../system/healingCalculations";
import { ActorHealthState } from "../../data-model/actor-data/attributes";
import { RqgItem } from "../rqgItem";
import { RqgToken } from "../../combat/rqgToken";

interface HitLocationSheetData {
  isEmbedded: boolean;
  data: HitLocationDataProperties; // Actually contains more...complete with effects, flags etc
  hitLocationData: HitLocationDataPropertiesData;
  sheetSpecific: {
    allHitLocations: string[];
    hitLocationTypes: string[];
    hitLocationHealthStatuses: string[];
  };
}

export class HitLocationSheet extends RqgItemSheet<
  ItemSheet.Options,
  HitLocationSheetData | ItemSheet.Data
> {
  static get defaultOptions(): ItemSheet.Options {
    return mergeObject(super.defaultOptions, {
      classes: ["rqg", "sheet", ItemTypeEnum.HitLocation],
      template: "systems/rqg/items/hit-location-item/hitLocationSheet.hbs",
      width: 320,
      height: 250,
    });
  }

  getData(): HitLocationSheetData | ItemSheet.Data {
    const itemData = this.document.data.toObject(false);
    assertItemType(itemData.type, ItemTypeEnum.HitLocation);

    return {
      cssClass: this.isEditable ? "editable" : "locked",
      editable: this.isEditable,
      limited: this.document.limited,
      owner: this.document.isOwner,
      isEmbedded: this.document.isEmbedded,
      options: this.options,
      data: itemData,
      hitLocationData: itemData.data,
      sheetSpecific: {
        allHitLocations: getHitLocations(),
        hitLocationTypes: Object.values(HitLocationTypesEnum),
        hitLocationHealthStatuses: Object.values(hitLocationHealthStatuses),
      },
    };
  }

  static async showAddWoundDialog(
    actor: RqgActor,
    hitLocationItemId: string,
    speakerName: string
  ): Promise<void> {
    const hitLocation = actor.items.get(hitLocationItemId);
    if (!hitLocation || hitLocation.data.type !== ItemTypeEnum.HitLocation) {
      const msg = localize("RQG.Item.HitLocation.Notification.CantFindHitLocation", {
        hitLocationItemId: hitLocationItemId,
        actorName: actor.name,
      });
      ui.notifications?.error(msg);
      throw new RqgError(msg);
    }

    const dialogContentHtml = await renderTemplate(
      "systems/rqg/items/hit-location-item/hitLocationAddWound.hbs",
      {}
    );
    new Dialog(
      {
        title: localize("RQG.Item.HitLocation.AddWound.Title", {
          hitLocationName: hitLocation.name,
        }),
        content: dialogContentHtml,
        default: "submit",
        render: () => {
          $("#inflictDamagePoints").focus();
        },
        buttons: {
          submit: {
            icon: '<i class="fas fa-check"></i>',
            label: localize("RQG.Item.HitLocation.AddWound.btnAddWound"),
            callback: async (html: JQuery | HTMLElement) =>
              await HitLocationSheet.submitAddWoundDialog(
                html as JQuery,
                actor,
                hitLocation,
                speakerName
              ),
          },
          cancel: {
            icon: '<i class="fas fa-times"></i>',
            label: localize("RQG.Dialog.Common.btnCancel"),
            callback: () => null,
          },
        },
      },
      {
        classes: ["rqg", "dialog"],
      }
    ).render(true);
  }

  private static async submitAddWoundDialog(
    html: JQuery,
    actor: RqgActor,
    hitLocation: RqgItem,
    speakerName: string
  ) {
    assertItemType(hitLocation.data.type, ItemTypeEnum.HitLocation);
    const formData = new FormData(html.find("form")[0]);
    // @ts-ignore entries
    const data = Object.fromEntries(formData.entries());
    const applyDamageToTotalHp: boolean = !!data.toTotalHp;
    const subtractAP: boolean = !!data.subtractAP;
    let damage = Number(data.damage);
    if (subtractAP) {
      const armorPoints = hitLocation.data.data.armorPoints;
      if (armorPoints == null) {
        const msg = localize(
          "RQG.Item.HitLocation.Notification.HitLocationDoesNotHaveCalculatedArmor",
          {
            hitLocationName: hitLocation.name,
          }
        );
        ui.notifications?.error(msg);
        throw new RqgError(msg, hitLocation);
      }
      damage = Math.max(0, damage - armorPoints);
    }
    const { hitLocationUpdates, actorUpdates, notification, uselessLegs } =
      DamageCalculations.addWound(
        damage,
        applyDamageToTotalHp,
        hitLocation.data,
        actor.data,
        speakerName
      );

    hitLocationUpdates && (await hitLocation.update(hitLocationUpdates));
    actorUpdates && (await actor.update(actorUpdates as any)); // TODO fix type
    await ChatMessage.create({
      user: getGame().user?.id,
      speaker: { alias: speakerName },
      content: localize("RQG.Item.HitLocation.AddWoundChatContent", {
        actorName: speakerName,
        hitLocationName: hitLocation.name,
        notification: notification,
      }),
      whisper: usersThatOwnActor(actor),
    });
    activateChatTab();

    if (actor.isToken && actor.token) {
      await HitLocationSheet.setTokenEffect(actor.token.object as RqgToken);
    } else {
      const activeTokens = actor.getActiveTokens(true);
      const sceneTokens = getGame().scenes?.active?.data.tokens;
      if (activeTokens.length && sceneTokens) {
        const token = sceneTokens.find((t) => t.id === activeTokens[0].id);
        token &&
          (await HitLocationSheet.setTokenEffect(token.object as RqgToken));
      }
    }

    for (const update of uselessLegs) {
      // @ts-ignore _id
      const leg = actor.items.get(update._id);
      assertItemType(leg?.data.type, ItemTypeEnum.HitLocation);
      await leg.update(update);
    }
  }

  static async showHealWoundDialog(actor: RqgActor, hitLocationItemId: string) {
    const hitLocation = actor.items.get(hitLocationItemId);
    assertItemType(hitLocation?.data.type, ItemTypeEnum.HitLocation);

    const dialogContentHtml = await renderTemplate(
      "systems/rqg/items/hit-location-item/hitLocationHealWound.hbs",
      { hitLocationName: hitLocation.name, wounds: hitLocation.data.data.wounds }
    );

    new Dialog(
      {
        title: localize("RQG.Item.HitLocation.HealWound.Title", {
          hitLocationName: hitLocation.name,
        }),
        content: dialogContentHtml,
        default: "submit",
        render: () => {
          $("#healWoundPoints").focus();
        },
        buttons: {
          submit: {
            icon: '<i class="fas fa-check"></i>',
            label: localize("RQG.Item.HitLocation.HealWound.btnHealWound"),
            callback: async (html: JQuery | HTMLElement) =>
              await HitLocationSheet.submitHealWoundDialog(html as JQuery, actor, hitLocation),
          },
          cancel: {
            icon: '<i class="fas fa-times"></i>',
            label: localize("RQG.Dialog.Common.btnCancel"),
            callback: () => null,
          },
        },
      },
      {
        classes: ["rqg", "dialog", "heal-wound"],
      }
    ).render(true);
  }

  private static async submitHealWoundDialog(
    html: JQuery,
    actor: RqgActor,
    hitLocation: RqgItem
  ): Promise<void> {
    assertItemType(hitLocation.data.type, ItemTypeEnum.HitLocation);
    const formData = new FormData(html.find("form")[0]);
    // @ts-ignore formData.entries
    const data = Object.fromEntries(formData.entries());
    requireValue(
      hitLocation.data.data.hitPoints.value,
      localize("RQG.Item.HitLocation.Notification.NoValueOnHitLocation", {
        hitLocationName: hitLocation.name,
      })
    );
    requireValue(
      hitLocation.data.data.hitPoints.max,
      localize("RQG.Item.HitLocation.Notification.NoMaxOnHitLocation", {
        hitLocationName: hitLocation.name,
      })
    );
    const healWoundIndex: number = Number(data.wound);
    let healPoints: number = Number(data.heal);
    const { hitLocationUpdates, actorUpdates, usefulLegs } = HealingCalculations.healWound(
      healPoints,
      healWoundIndex,
      hitLocation.data,
      actor.data
    );

    hitLocationUpdates && (await hitLocation.update(hitLocationUpdates));
    actorUpdates && (await actor.update(actorUpdates));

    if (actor.isToken) {
      actor.token &&
        (await HitLocationSheet.setTokenEffect(actor.token.object as RqgToken));
    } else {
      const activeTokens = actor.getActiveTokens(true, false);
      const activeScene = getGame().scenes?.active;
      if (activeScene && activeTokens.length) {
        const token = activeScene.getEmbeddedDocument("Token", activeTokens[0].id ?? "") as
          | TokenDocument
          | undefined; // TODO Hardcoded "first" token
        token &&
          (await HitLocationSheet.setTokenEffect(token.object as RqgToken));
      }
    }

    for (const update of usefulLegs) {
      if (update != null && update._id != null) {
        // TODO make sure usefulLegs only contain real data
        const item = actor.items.get(update._id);
        item && (await item.update(update));
      }
    }

    // Reopen the dialog if there still are wounds left
    if (hitLocation.data.data.wounds.length) {
      this.showHealWoundDialog(actor, hitLocation.id!);
    }
  }

  static async setTokenEffect(token: RqgToken): Promise<void> {
    // // TODO testing testing - lägg i nån CONFIG?

    const health2Effect: Map<ActorHealthState, { id: string; label: string; icon: string }> =
      new Map([
        ["shock", CONFIG.statusEffects[14]],
        ["unconscious", CONFIG.statusEffects[1]],
        ["dead", CONFIG.statusEffects[0]],
      ]);

    // TODO map to actorHealth - sync actorHealth names to statusEffects names?
    // TODO create a CONFIG.RQG.statusEffects that contain AE ?

    if (!token.actor) {
      ui.notifications?.warn(localize("RQG.Item.HitLocation.Notification.NoActorOnTokenWarn"));
      return;
    }

    const newEffect = health2Effect.get(token.actor.data.data.attributes.health);

    for (const status of health2Effect.values()) {
      const thisEffectOn = !!token.actor.effects.find(
        (e: ActiveEffect) => e.getFlag("core", "statusId") === status?.id
      );
      if (newEffect?.id === status.id && !thisEffectOn) {
        const asOverlay = status.id === "dead";
        // Turn on the new effect
        await token.toggleEffect(status, {
          overlay: asOverlay,
          active: true
        });
      } else if (newEffect?.id !== status.id && thisEffectOn) {
        // This is not the effect we're applying but it is on
        // so we need to turn it off
        await token.toggleEffect(status, {
          overlay: false,
          active: false
        });
      }
    }
  }
}
