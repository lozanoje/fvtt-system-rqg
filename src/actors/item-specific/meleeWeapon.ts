import { AbstractEmbeddedItem } from "./abstractEmbeddedItem";
import { logMisconfiguration, RqgError } from "../../system/util";
import { RqgActor } from "../rqgActor";
import { RqgItem } from "../../items/rqgItem";
import { ItemTypeEnum } from "../../data-model/item-data/itemTypes";
import { getSameLocationUpdates } from "./shared/physicalItemUtil";

export class MeleeWeapon extends AbstractEmbeddedItem {
  // public static init() {
  //   Items.registerSheet("rqg", MeleeWeaponSheet, {
  //     types: [ItemTypeEnum.MeleeWeapon],
  //     makeDefault: true,
  //   });
  // }

  static preUpdateItem(
    actor: RqgActor,
    meleeWeapon: RqgItem,
    updates: object[],
    options: any
  ): void {
    if (meleeWeapon.data.type === ItemTypeEnum.MeleeWeapon) {
      updates.push(...getSameLocationUpdates(actor, meleeWeapon, updates));
    }
  }

  /*
   * Add the skill specified in the weapon to the actor (if not already there)
   * and connect the weapon with the embedded skill item id.
   */
  static async onEmbedItem(
    actor: RqgActor,
    child: RqgItem,
    options: any,
    userId: string
  ): Promise<any> {
    let embeddedSkillId;
    if (child.data.type !== ItemTypeEnum.MeleeWeapon) {
      const msg = `Tried to embed something else than a meleeWeapon`;
      ui.notifications?.error(msg);
      throw new RqgError(msg, child, actor);
    }

    if (!child.data.data.skillId && child.data.data.skillOrigin) {
      try {
        // Add the specified skill if found
        const skill = (await fromUuid(child.data.data.skillOrigin).catch(() => {
          logMisconfiguration(
            `Couldn't find melee weapon skill with uuid from skillOrigin ${
              (child.data.data as any).skillOrigin
            }`,
            true,
            child.data
          );
        })) as RqgItem;

        const sameSkillAlreadyOnActor = actor.items.find((i: RqgItem) => i.name === skill.name);
        const embeddedWeaponSkill = sameSkillAlreadyOnActor
          ? [sameSkillAlreadyOnActor]
          : // @ts-ignore 0.8
            await actor.createEmbeddedDocuments("Item", [skill.data]);
        embeddedSkillId = embeddedWeaponSkill[0].id; // A weapon can only have 1 skill for now
      } catch (e) {
        logMisconfiguration("Couldn't find the Skill associated with this melee weapon.", true);
      }
    }
    if (embeddedSkillId) {
      return { _id: child.id, data: { skillId: embeddedSkillId } };
    } else {
      // Didn't find the weapon skill - open the item sheet to let the user select one
      options.renderSheet = true;
      return;
    }
  }
}