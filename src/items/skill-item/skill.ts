import { SkillData, SkillItemData } from "../../data-model/item-data/skillData";
import { BaseItem } from "../baseItem";
import { RqgItem } from "../rqgItem";
import { ItemTypeEnum } from "../../data-model/item-data/itemTypes";
import { ArmorItemData } from "../../data-model/item-data/armorData";
import { RqgActor } from "../../actors/rqgActor";
import { RqgError } from "../../system/util";
import { RqgConfig } from "../../system/config";

declare const CONFIG: RqgConfig;

export class Skill extends BaseItem {
  // public static init() {
  //   Items.registerSheet("rqg", SkillSheet, {
  //     types: [ItemTypeEnum.Skill],
  //     makeDefault: true,
  //   });
  // }

  public static onActorPrepareDerivedData(item: RqgItem): RqgItem {
    const skillItem = item as Item<SkillItemData>;
    const skillData = skillItem.data.data;
    const actor = skillItem.actor! as RqgActor;
    if (actor.data.type !== "character") {
      throw new RqgError("actor is not of type character");
    }
    const actorData = actor.data.data;
    // Add the category modifier to be displayed by the Skill sheet TODO make another method for this!
    skillData.categoryMod = actorData.skillCategoryModifiers![skillItem.data.data.category];

    let mod = 0; // For dodge/swim encumbrance & move quietly modifications

    // Special case for Dodge & Jump TODO swimEncPenalty Complicated :-(
    const dex = actorData.characteristics.dexterity.value;
    if (CONFIG.RQG.skillName.dodge === skillItem.name) {
      Skill.updateBaseChance(skillData, dex * 2);
      if (
        actorData.attributes.equippedEncumbrance === undefined ||
        actorData.attributes.maximumEncumbrance === undefined
      ) {
        throw new RqgError("Equipped or max ENC was not set", actor);
      }
      mod = -Math.min(
        actorData.attributes.equippedEncumbrance,
        actorData.attributes.maximumEncumbrance
      );
    } else if (CONFIG.RQG.skillName.jump === skillItem.name) {
      Skill.updateBaseChance(skillData, dex * 3);
    } else if (CONFIG.RQG.skillName.moveQuietly === skillItem.name) {
      mod = -Math.max(
        0,
        ...actor.items
          .filter(
            (i) => i.data.type === ItemTypeEnum.Armor && i.data.data.equippedStatus === "equipped"
          )
          .map((a) => Math.abs((a as Item<ArmorItemData>).data.data.moveQuietlyPenalty))
      );
    }

    // Learned chance can't be lower than base chance
    if (skillData.baseChance > skillData.learnedChance) {
      skillData.learnedChance = skillData.baseChance;
    }

    // Update the skill chance including skill category modifiers.
    // If base chance is 0 you need to have learned something to get category modifier
    skillData.chance =
      skillData.baseChance > 0 || skillData.learnedChance > 0
        ? Math.max(0, skillData.learnedChance + (skillData.categoryMod || 0) + mod)
        : 0;
    return item;
  }

  private static updateBaseChance(skillData: SkillData, newBaseChance: number): void {
    if (skillData.baseChance !== newBaseChance) {
      skillData.baseChance = newBaseChance;
    }
  }
}
