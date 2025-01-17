import { RqgActor } from "../actors/rqgActor";
import { getCombatantsSharingToken } from "../combat/combatant-utils";
import { Ability } from "../data-model/shared/ability";
import {
  activateChatTab,
  getActorFromIds,
  getGame,
  getSpeakerName,
  localize,
  usersThatOwnActor,
} from "../system/util";

type ReputationFlags = {
  actorId: string;
  tokenId: string;
  reputationValue: number;
  modifiedValue: number;
  reputationIcon: string;
  formData: {
    otherModifiers: number;
  };
};

export class ReputationCard {
  public static async show(actor: RqgActor, token: TokenDocument | null): Promise<void> {
    const reputationValue = actor.data.data.background.reputation || 0;
    const iconSettings: any = <ClientSettings>(
      getGame().settings.get("rqg", "defaultItemIconSettings")
    );

    const flags: ReputationFlags = {
      actorId: actor.id || "",
      tokenId: token?.id ?? "",
      reputationValue: reputationValue,
      modifiedValue: reputationValue,
      reputationIcon: iconSettings.Reputation,
      formData: {
        otherModifiers: 0,
      },
    };
    await ChatMessage.create(await this.renderContent(flags));
    activateChatTab();
  }

  public static async inputChangeHandler(ev: Event, messageId: string): Promise<void> {}

  public static async formSubmitHandler(
    ev: JQueryEventObject,
    messageId: string
  ): Promise<boolean> {
    ev.preventDefault();

    const chatMessage = getGame().messages?.get(messageId);
    const flags = chatMessage?.data.flags.rqg as ReputationFlags;

    const formData = new FormData(ev.target as HTMLFormElement);
    // @ts-ignore formData.entries()
    for (const [name, value] of formData.entries()) {
      if (name in flags.formData) {
        flags.formData[name as keyof typeof flags.formData] = value;
      }
    }

    // @ts-ignore submitter
    const button = ev.originalEvent.submitter as HTMLButtonElement;
    button.disabled = true;
    setTimeout(() => (button.disabled = false), 1000); // Prevent double clicks

    const actor = getActorFromIds(flags.actorId, flags.tokenId);
    if (actor) {
      const speakerName = getSpeakerName(flags.actorId, flags.tokenId);
      await ReputationCard.roll(flags, actor, speakerName);
    } else {
      ui.notifications?.warn(
        localize("RQG.Item.Notification.CouldNotFindActorByIdsWarn", {
          actorId: flags.actorId,
          tokenId: flags.tokenId,
        })
      );
    }
    return false;
  }

  public static async directroll(actor: RqgActor, token: TokenDocument | null): Promise<void> {
    const reputationValue = actor.data.data.background.reputation || 0;
    const iconSettings: any = <ClientSettings>(
      getGame().settings.get("rqg", "defaultItemIconSettings")
    );
    const speakerName = getSpeakerName(actor.id, token?.id || "");
    const flags: ReputationFlags = {
      actorId: actor.id || "",
      tokenId: token?.id ?? "",
      reputationValue: reputationValue,
      modifiedValue: reputationValue,
      reputationIcon: iconSettings.Reputation,
      formData: {
        otherModifiers: 0,
      },
    };

    await this.roll(flags, actor, speakerName);
    activateChatTab();
  }

  public static async roll(
    flags: ReputationFlags,
    actor: RqgActor,
    speakerName: string
  ): Promise<void> {
    const result = await Ability.roll(
      localize("RQG.Dialog.reputationCard.CheckReputationFlavor"),
      Number(flags.reputationValue),
      Number(flags.formData.otherModifiers),
      speakerName
    );
  }

  private static async renderContent(flags: ReputationFlags): Promise<object> {
    let html = await renderTemplate("systems/rqg/chat/reputationCard.hbs", flags);
    const speakerName = getSpeakerName(flags.actorId, flags.tokenId);
    return {
      flavor: localize("RQG.Dialog.reputationCard.Reputation"),
      user: getGame().user?.id,
      speaker: { alias: speakerName },
      content: html,
      whisper: usersThatOwnActor(getActorFromIds(flags.actorId, flags.tokenId)),
      type: CONST.CHAT_MESSAGE_TYPES.WHISPER,
      flags: {
        core: { canPopout: true },
        rqg: flags,
      },
    };
  }
}
