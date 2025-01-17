import { ItemTypeEnum } from "../../data-model/item-data/itemTypes";
import { SkillCategoryEnum } from "../../data-model/item-data/skillData";
import { RqgItem } from "../rqgItem";
import { equippedStatuses } from "../../data-model/item-data/IPhysicalItem";
import { RqgItemSheet } from "../RqgItemSheet";
import { assertItemType, getRequiredDomDataset, uuid2Name } from "../../system/util";
import {
  damageType,
  WeaponDataProperties,
  WeaponDataPropertiesData,
} from "../../data-model/item-data/weaponData";
import { Weapon } from "../../actors/item-specific/weapon";

interface WeaponSheetData {
  isEmbedded: boolean;
  data: WeaponDataProperties; // Actually contains more...complete with effects, flags etc
  weaponData: WeaponDataPropertiesData;
  sheetSpecific: {
    defaultCombatManeuverNames: string[];
    damageTypes: string[];
    weaponSkills: any[];
    /** For showing the name of the linked skill if the item isn't owned */
    skillNames: any;
    equippedStatuses: string[];
    rateOfFire: { [label: string]: number };
    ownedProjectiles: RqgItem[];
  };
}

export class WeaponSheet extends RqgItemSheet<ItemSheet.Options, WeaponSheetData | ItemSheet.Data> {
  static get defaultOptions(): ItemSheet.Options {
    return mergeObject(super.defaultOptions, {
      classes: ["rqg", "sheet", ItemTypeEnum.Weapon],
      template: "systems/rqg/items/weapon-item/weaponSheet.hbs",
      width: 960,
      height: 800,
    });
  }

  getData(): WeaponSheetData | ItemSheet.Data {
    const itemData = this.document.data.toObject(false);
    assertItemType(itemData.type, ItemTypeEnum.Weapon);
    const weaponData = itemData.data;
    if (isNaN(Number(weaponData.quantity))) {
      weaponData.quantity = 1;
    }

    return {
      cssClass: this.isEditable ? "editable" : "locked",
      editable: this.isEditable,
      limited: this.document.limited,
      owner: this.document.isOwner,
      isEmbedded: this.document.isEmbedded,
      options: this.options,
      data: itemData,
      weaponData: weaponData,
      sheetSpecific: {
        defaultCombatManeuverNames: Array.from(CONFIG.RQG.combatManeuvers.keys()),
        damageTypes: Object.values(damageType),
        weaponSkills: this.getWeaponSkills(),
        skillNames: this.getSkillNames(),
        equippedStatuses: [...equippedStatuses],
        ownedProjectiles: this.getOwnedProjectiles(),
        rateOfFire: {
          "S/MR": 0,
          "1/MR": 1,
          "1/2MR": 2,
          "1/3MR": 3,
          "1/4MR": 4,
          "1/5MR": 5,
        },
      },
    };
  }

  private getWeaponSkills(): any {
    return this.item.isEmbedded && this.actor
      ? this.actor
          .getEmbeddedCollection("Item")
          .filter(
            (i) =>
              i.data.type === ItemTypeEnum.Skill &&
              (i.data.data.category === SkillCategoryEnum.MeleeWeapons ||
                i.data.data.category === SkillCategoryEnum.Shields ||
                i.data.data.category === SkillCategoryEnum.NaturalWeapons)
          )
      : [];
  }

  private getSkillNames(): any {
    assertItemType(this.item.data.type, ItemTypeEnum.Weapon);
    return {
      oneHand: this.getName(
        this.item.data.data.usage.oneHand.skillOrigin,
        this.item.data.data.usage.oneHand.skillId
      ),
      offHand: this.getName(
        this.item.data.data.usage.offHand.skillOrigin,
        this.item.data.data.usage.offHand.skillId
      ),
      twoHand: this.getName(
        this.item.data.data.usage.twoHand.skillOrigin,
        this.item.data.data.usage.twoHand.skillId
      ),
      missile: this.getName(
        this.item.data.data.usage.missile.skillOrigin,
        this.item.data.data.usage.missile.skillId
      ),
    };
  }

  private getOwnedProjectiles(): any[] {
    if (this.item.isOwned) {
      return [
        [{ _id: "", name: "---" }],
        ...this.actor!.getEmbeddedCollection("Item").filter(
          (i) => i.data.type === ItemTypeEnum.Weapon && i.data.data.isProjectile
        ),
      ];
    }
    return [];
  }

  // Look for item name first in uuid link then in embedded actor
  private getName(uuid: string, embeddedSkillId: string): string {
    const uuidName = uuid2Name(uuid);
    if (uuidName) {
      return uuidName;
    }
    const embeddedName = this.actor?.items.get(embeddedSkillId)?.name;
    if (embeddedName) {
      return `${embeddedName} (embedded)`;
    }
    return "";
  }

  protected async _updateObject(event: Event, formData: any): Promise<any> {
    formData["data.usage.oneHand.combatManeuvers"] = this.getUsageCombatManeuvers(
      "oneHand",
      formData
    );
    formData["data.usage.offHand.combatManeuvers"] = this.getUsageCombatManeuvers(
      "offHand",
      formData
    );
    formData["data.usage.twoHand.combatManeuvers"] = this.getUsageCombatManeuvers(
      "twoHand",
      formData
    );
    formData["data.usage.missile.combatManeuvers"] = this.getUsageCombatManeuvers(
      "missile",
      formData
    );

    this.copyOneHandData2offHand(formData);

    formData["data.rate"] = Number(formData["data.rate"]);

    formData["data.physicalItemType"] =
      formData["data.isProjectile"] || formData["data.isThrownWeapon"] ? "consumable" : "unique";

    if (formData["data.physicalItemType"] === "unique") {
      formData["data.quantity"] = 1;
    }

    // Non projectile weapons should not decrease any projectile quantity (remove link)
    if (!formData["data.isProjectileWeapon"] && !formData["data.isThrownWeapon"]) {
      formData["data.projectileId"] = "";
    }

    // Thrown weapons should decrease quantity of themselves
    if (formData["data.isThrownWeapon"]) {
      formData["data.projectileId"] = this.item.id;
    }

    if (formData["data.hitPointLocation"]) {
      formData["data.hitPoints.value"] = "";
      formData["data.hitPoints.max"] = "";
    }

    return super._updateObject(event, formData);
  }

  private copyOneHandData2offHand(formData: any): void {
    formData["data.usage.offHand.combatManeuvers"] = formData["data.usage.oneHand.combatManeuvers"];
    formData["data.usage.offHand.damage"] = formData["data.usage.oneHand.damage"];
    formData["data.usage.offHand.minStrength"] = formData["data.usage.oneHand.minStrength"];
    formData["data.usage.offHand.minDexterity"] = formData["data.usage.oneHand.minDexterity"];
    formData["data.usage.offHand.strikeRank"] = formData["data.usage.oneHand.strikeRank"];
  }

  private getUsageCombatManeuvers(usage: string, formData: any): any[] {
    const usageNames = formData[`data.usage.${usage}.combatManeuvers.name`];
    const usageCombatManueversNames = Array.isArray(usageNames) ? usageNames : [usageNames];

    const usageCombatManeuvers = usageCombatManueversNames.reduce((acc, name, i) => {
      if (name) {
        const dmgType =
          formData[`data.usage.${usage}.combatManeuvers.damageTypes`] ??
          CONFIG.RQG.combatManeuvers.get(name)?.defaultDamageType;

        const damageTypes = Array.isArray(dmgType) ? dmgType : [dmgType];
        const defaultDamageTypeDescription =
          CONFIG.RQG.combatManeuvers.get(name)?.specialDescriptionHtml;
        const damageType =
          damageTypes.length > i
            ? damageTypes[i]
            : CONFIG.RQG.combatManeuvers.get(name)?.defaultDamageType;

        const desc = formData[`data.usage.${usage}.combatManeuvers.description`];
        const descriptions = Array.isArray(desc) ? desc : [desc];
        const description = descriptions.length > i ? descriptions[i] : "";
        acc.push({
          name: name,
          damageType: damageType,
          description: description,
          placeholder:
            defaultDamageTypeDescription ??
            "Enter description of how this attack works, or get normal damage buttons (no special handling of critical success damage etc.)",
        });
      }
      return acc;
    }, []);

    return duplicate(usageCombatManeuvers);
  }

  public activateListeners(html: JQuery): void {
    super.activateListeners(html);

    html[0].querySelectorAll<HTMLElement>("[data-dropzone]").forEach((elem) => {
      elem.addEventListener("drop", this._onDrop.bind(this));
      elem.addEventListener("dragover", (e) => {
        e.preventDefault();
        const dropzone = (e.target as HTMLElement)?.closest("[data-dropzone]");
        dropzone && dropzone.classList.add("drag-hover");
      });
      elem.addEventListener("dragenter", (e) => {
        e.preventDefault();
        const dropzone = (e.target as HTMLElement)?.closest("[data-dropzone]");
        dropzone && dropzone.classList.add("drag-hover");
      });
      elem.addEventListener("dragleave", (e) => {
        e.preventDefault();
        const dropzone = (e.target as HTMLElement)?.closest("[data-dropzone]");
        dropzone && dropzone.classList.remove("drag-hover");
      });
    });

    html[0].querySelectorAll<HTMLElement>("[data-delete-skill]").forEach((elem) => {
      elem.addEventListener("click", async () => {
        const use = getRequiredDomDataset(elem, "delete-skill");
        await this.item.update({ [`data.usage.${use}.skillOrigin`]: "" });
      });
    });
  }

  protected async _onDrop(event: DragEvent): Promise<void> {
    super._onDrop(event);
    const usage = getRequiredDomDataset(event, "dropzone");
    const dropzone = (event.target as HTMLElement)?.closest("[data-dropzone]");
    dropzone && dropzone.classList.remove("drag-hover");
    // Try to extract the data
    let droppedItemData;
    try {
      droppedItemData = JSON.parse(event.dataTransfer!.getData("text/plain"));
    } catch (err) {
      return;
    }
    if (droppedItemData.type === "Item") {
      const droppedItem = (await Item.fromDropData(droppedItemData)) as RqgItem;
      if (
        droppedItem.data.type === ItemTypeEnum.Skill &&
        (droppedItem.data.data.category === SkillCategoryEnum.MeleeWeapons ||
          droppedItem.data.data.category === SkillCategoryEnum.MissileWeapons ||
          droppedItem.data.data.category === SkillCategoryEnum.NaturalWeapons ||
          droppedItem.data.data.category === SkillCategoryEnum.Shields)
      ) {
        const originSkillId = droppedItem.uuid || "";
        if (this.item.isOwned) {
          const weaponItem = this.item;
          assertItemType(weaponItem.data.type, ItemTypeEnum.Weapon);
          const embeddedSkillId = await Weapon.embedLinkedSkill("", originSkillId, this.actor!);
          await this.item.update({
            [`data.usage.${usage}.skillId`]: embeddedSkillId,
            [`data.usage.${usage}.skillOrigin`]: originSkillId,
          });
        } else {
          await this.item.update({
            [`data.usage.${usage}.skillOrigin`]: originSkillId,
          });
        }
      } else {
        ui.notifications?.warn(
          "The item must be a weapon skill (category melee, shield or natural weapon)"
        );
      }
    }
  }
}
