import { Ability } from "../../data-model/shared/ability";
import { RqgActorSheet } from "../rqgActorSheet";
import { RqgActor } from "../rqgActor";
import {
  activateChatTab,
  assertItemType,
  getDomDataset,
  getGame,
  getRequiredDomDataset,
  localize,
  RqgError,
} from "../../system/util";
import { ItemCard } from "../../chat/itemCard";
import { ItemTypeEnum } from "../../data-model/item-data/itemTypes";
import { showImproveAbilityDialog } from "../../dialog/improveAbilityDialog";
import { ContextMenuRunes } from "./contextMenuRunes";
import { RqgItem } from "../../items/rqgItem";

export const runeMenuOptions = (
  actor: RqgActor,
  token: TokenDocument | null
): ContextMenu.Item[] => [
  {
    name: localize("RQG.Game.RollCard"),
    icon: ContextMenuRunes.RollCard,
    condition: () => true,
    callback: async (el: JQuery) => {
      const itemId = getRequiredDomDataset(el, "item-id");
      await ItemCard.show(itemId, actor, token);
      activateChatTab();
    },
  },
  {
    name: localize("RQG.Game.RollQuick"),
    icon: ContextMenuRunes.RollQuick,
    condition: () => true,
    callback: async (el: JQuery) => {
      const itemId = getRequiredDomDataset(el, "item-id");
      const item = actor.items.get(itemId);
      assertItemType(item?.data.type, ItemTypeEnum.Rune);
      const itemChance = item.data.data.chance;
      const speakerName = token?.name ?? actor.data.token.name ?? "";
      await Ability.roll(item.name ?? "", itemChance, 0, speakerName);
    },
  },
  {
    name: localize("RQG.ContextMenu.ToggleExperience"),
    icon: ContextMenuRunes.ToggleExperience,
    condition: () => true,
    callback: async (el: JQuery) => {
      const itemId = getRequiredDomDataset(el, "item-id");
      const item = actor.items.get(itemId);
      assertItemType(item?.data.type, ItemTypeEnum.Rune);
      await item.update({ "data.hasExperience": !item.data.data.hasExperience }, {});
    },
  },
  {
    name: localize("RQG.ContextMenu.ImproveItem", {itemType: RqgItem.localizeItemTypeName(ItemTypeEnum.Rune)}),
    icon: ContextMenuRunes.Improve,
    condition: () => true,
    callback: (el: JQuery) => {
      const itemId = getRequiredDomDataset(el, "item-id");
      const item = actor.items.get(itemId);
      assertItemType(item?.data.type, ItemTypeEnum.Rune);
      const speakerName = token?.name ?? actor.data.token.name ?? "";
      showImproveAbilityDialog(actor, itemId, item, speakerName);
    },
  },
  {
    name: localize("RQG.ContextMenu.ViewDescription"),
    icon: ContextMenuRunes.ViewDescription,
    condition: (el: JQuery) => {
      const itemId = getRequiredDomDataset(el, "item-id");
      let firstItemEl = el[0];
      while ((firstItemEl?.previousElementSibling as HTMLElement)?.dataset?.itemId === itemId) {
        firstItemEl = firstItemEl.previousElementSibling as HTMLElement;
      }
      return !!getDomDataset($(firstItemEl), "journal-id");
    },
    callback: async (el: JQuery) => {
      const itemId = getRequiredDomDataset(el, "item-id");
      let firstItemEl = el[0];
      while ((firstItemEl?.previousElementSibling as HTMLElement)?.dataset?.itemId === itemId) {
        firstItemEl = firstItemEl?.previousElementSibling as HTMLElement;
      }
      const journalId = getRequiredDomDataset($(firstItemEl), "journal-id");
      const journalPack = getDomDataset($(firstItemEl), "journal-pack");
      await RqgActorSheet.showJournalEntry(journalId, journalPack);
    },
  },
  {
    name: localize("RQG.ContextMenu.EditItem", {itemType: RqgItem.localizeItemTypeName(ItemTypeEnum.Rune)}),
    icon: ContextMenuRunes.Edit,
    condition: () => !!getGame().user?.isGM,
    callback: (el: JQuery) => {
      const itemId = getRequiredDomDataset(el, "item-id");
      const item = actor.items.get(itemId);
      assertItemType(item?.data.type, ItemTypeEnum.Rune);
      if (!item.sheet) {
        const msg = localize("RQG.ContextMenu.Notification.CantEditRuneError", {itemId: itemId, actorName: actor.name});
        ui.notifications?.error(msg);
        throw new RqgError(msg, el);
      }
      item.sheet.render(true);
    },
  },
  {
    name: localize("RQG.ContextMenu.DeleteItem", {itemType: RqgItem.localizeItemTypeName(ItemTypeEnum.Rune)}),
    icon: ContextMenuRunes.Delete,
    condition: () => !!getGame().user?.isGM,
    callback: (el: JQuery) => {
      const itemId = getRequiredDomDataset(el, "item-id");
      RqgActorSheet.confirmItemDelete(actor, itemId);
    },
  },
];
