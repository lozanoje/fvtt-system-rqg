import {
  SkillCategoryEnum,
  SkillDataProperties,
  SkillDataPropertiesData,
} from "../../data-model/item-data/skillData";
import { ItemTypeEnum } from "../../data-model/item-data/itemTypes";
import { RqgActorSheet } from "../../actors/rqgActorSheet";
import { RqgItemSheet } from "../RqgItemSheet";
import {
  assertItemType,
  getAllRunesIndex,
  getJournalEntryName,
  localize,
  RqgError,
} from "../../system/util";
import { IndexTypeForMetadata } from "@league-of-foundry-developers/foundry-vtt-types/src/foundry/foundry.js/collections/documentCollections/compendiumCollection";
import { RqgItem } from "../rqgItem";
import { droppableJournalDescription } from "../isDroppable";

interface SkillSheetData {
  isEmbedded: boolean;
  data: SkillDataProperties; // Actually contains more...complete with effects, flags etc
  skillData: SkillDataPropertiesData;
  sheetSpecific: {
    skillCategories: SkillCategoryEnum[];
    journalEntryName: string;
    allRunes: IndexTypeForMetadata<CompendiumCollection.Metadata>;
  };
}

export class SkillSheet extends RqgItemSheet<ItemSheet.Options, SkillSheetData | ItemSheet.Data> {
  static get defaultOptions(): ItemSheet.Options {
    return mergeObject(super.defaultOptions, {
      classes: ["rqg", "sheet", ItemTypeEnum.Skill],
      template: "systems/rqg/items/skill-item/skillSheet.hbs",
      width: 505,
      height: 405,
    });
  }

  getData(): SkillSheetData | ItemSheet.Data {
    const itemData = this.document.data.toObject(false);
    assertItemType(itemData.type, ItemTypeEnum.Skill);
    const skillData = itemData.data;
    if (!skillData.skillName) {
      skillData.skillName = itemData.name;
    }
    skillData.runes = Array.isArray(skillData.runes) ? skillData.runes : [skillData.runes];

    return {
      cssClass: this.isEditable ? "editable" : "locked",
      editable: this.isEditable,
      limited: this.document.limited,
      owner: this.document.isOwner,
      isEmbedded: this.document.isEmbedded,
      options: this.options,
      data: itemData,
      skillData: itemData.data,
      sheetSpecific: {
        skillCategories: Object.values(SkillCategoryEnum),
        journalEntryName: getJournalEntryName(skillData),
        allRunes: getAllRunesIndex(),
      },
    };
  }

  protected _updateObject(event: Event, formData: any): Promise<RqgItem | undefined> {
    const specialization = formData["data.specialization"]
      ? ` (${formData["data.specialization"]})`
      : "";
    formData["name"] =
      formData["data.skillName"] + specialization + " - " + formData["data.category"];

    let runes = formData["data.runes"];
    runes = Array.isArray(runes) ? runes : [runes];
    runes = runes.filter((r: any) => r); // Remove empty
    formData["data.runes"] = duplicate(runes);
    return super._updateObject(event, formData);
  }

  public activateListeners(html: JQuery): void {
    super.activateListeners(html);
    (this.form as HTMLElement).addEventListener("drop", this._onDrop.bind(this));

    // Open Linked Journal Entry
    (this.form as HTMLElement).querySelectorAll("[data-journal-id]").forEach((el: Element) => {
      const elem = el as HTMLElement;
      const pack = elem.dataset.journalPack;
      const id = elem.dataset.journalId;
      if (!id) {
        const msg = localize("RQG.Item.Skill.Notification.CantFindSkillJournalEntryError", {
          skillName: this.item.name,
        });
        ui.notifications?.error(msg);
        throw new RqgError(msg, elem, pack, id);
      }
      el.addEventListener("click", () => RqgActorSheet.showJournalEntry(id, pack));
    });
  }

  protected async _onDrop(event: DragEvent): Promise<void> {
    super._onDrop(event);
    await droppableJournalDescription(this.item, event);
  }
}
