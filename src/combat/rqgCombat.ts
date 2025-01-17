import { RqgCombatTracker } from "./RqgCombatTracker";

export class RqgCombat extends Combat {
  public static init() {
    CONFIG.Combat.documentClass = RqgCombat;
    CONFIG.ui.combat = RqgCombatTracker;
    CONFIG.Combat.initiative = {
      formula: null,
      decimals: 0,
    };
  }

  _sortCombatants(a: Combatant, b: Combatant): number {
    const ia = Number.isNumeric(a.initiative) ? a.initiative : 9999;
    const ib = Number.isNumeric(b.initiative) ? b.initiative : 9999;
    const ci = ia - ib;
    if (ci !== 0) {
      return ci; // Sort on lowest Strike Rank (initiative)
    }

    if (!a.actor || !b.actor) {
      const a2 = a?.actor ?? { id: "zzz" };
      const b2 = b?.actor ?? { id: "zzz" };
      // If either of the combatants are not linked to an actor, put them last
      // TODO Need to somehow mark / show that the combatant doesn't have an actor
      return a2.id!.localeCompare(b2.id!);
    }

    const actorADex = a.actor.data.data.characteristics.dexterity.value;
    const actorBDex = b.actor.data.data.characteristics.dexterity.value;
    const cDex = actorBDex - actorADex;
    if (cDex !== 0) {
      return cDex; // Sort on highest DEX
    }

    if (!a.token || !b.token) {
      const a2 = a?.token ?? { id: "zzz" };
      const b2 = b?.token ?? { id: "zzz" };
      // If either of the combatants are not linked to a token, put them last
      // TODO Need to somehow mark / show that the combatant doesn't have a token
      return a2.id!.localeCompare(b2.id!);
    }

    const [an, bn] = [a.token.name || "", b.token.name || ""];
    const cn = an.localeCompare(bn);
    if (cn !== 0) {
      return cn; // Sort on name
    }

    return a.id!.localeCompare(b.id!); // Unlikely fallback if both initiative, dex and name is the same
  }
}
