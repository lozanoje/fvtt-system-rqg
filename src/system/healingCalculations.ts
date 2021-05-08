import { HitLocationItemData } from "../data-model/item-data/hitLocationData";
import { CharacterActorData, RqgActorData } from "../data-model/actor-data/rqgActorData";
import { ActorHealthState } from "../data-model/actor-data/attributes";
import { RqgError } from "./util";

export interface HealingEffects {
  hitLocationUpdates: HitLocationItemData;
  actorUpdates: RqgActorData;
  /** make limbs useful again */
  usefulLegs: any[];
}

/**
 * Calculate the effects to apply to hitLocations and actor from healing previous damage.
 */
export class HealingCalculations {
  static healWound(
    healPoints: number,
    healWoundIndex: number,
    hitLocationData: HitLocationItemData,
    actorData: CharacterActorData
  ): HealingEffects {
    const healingEffects: HealingEffects = {
      hitLocationUpdates: {} as HitLocationItemData,
      actorUpdates: {} as CharacterActorData,
      usefulLegs: [],
    };
    if (hitLocationData.data.wounds.length <= healWoundIndex) {
      const msg = `Trying to heal a wound that doesn't exist.`;
      ui.notifications?.error(msg);
      throw new RqgError(msg, healWoundIndex, hitLocationData);
    }

    const hpValue = hitLocationData.data.hp.value;
    const hpMax = hitLocationData.data.hp.max;
    if (hpValue == null || hpMax == null) {
      const msg = `Hitlocation ${hitLocationData.name} don't have hp value or max`;
      ui.notifications?.error(msg);
      throw new RqgError(msg, hitLocationData);
    }
    const wounds = hitLocationData.data.wounds.slice();
    let hitLocationHealthState = hitLocationData.data.hitLocationHealthState || "healthy";
    let actorHealthImpact: ActorHealthState = hitLocationData.data.actorHealthImpact || "healthy";

    if (healPoints >= 6 && hitLocationHealthState === "severed") {
      hitLocationHealthState = "wounded"; // Remove the "severed" state, but the actual state will be calculated below
    }

    healPoints = Math.min(wounds[healWoundIndex], healPoints); // Don't heal more than wound damage
    wounds[healWoundIndex] -= healPoints;

    const woundsSumAfter = wounds.reduce((acc, w) => acc + w, 0);
    if (woundsSumAfter === 0) {
      actorHealthImpact = "healthy";
      if (hitLocationHealthState !== "severed") {
        hitLocationHealthState = "healthy";
      }
    } else if (woundsSumAfter < hpMax) {
      actorHealthImpact = "wounded";
      if (hitLocationHealthState !== "severed") {
        hitLocationHealthState = "wounded";
      }
    }

    mergeObject(healingEffects.hitLocationUpdates, {
      data: {
        wounds: wounds,
        actorHealthImpact: actorHealthImpact,
        hitLocationHealthState: hitLocationHealthState,
      },
    } as any);

    const actorTotalHp = actorData.data.attributes.hitPoints.value;
    const actorMaxHp = actorData.data.attributes.hitPoints.max;
    if (actorTotalHp == null || actorMaxHp == null) {
      const msg = `Couldn't find actor total hp (max or current value)`;
      ui.notifications?.error(msg);
      throw new RqgError(msg, actorData);
    }

    const totalHpAfter = Math.min(actorTotalHp + healPoints, actorMaxHp);
    mergeObject(healingEffects.actorUpdates, {
      data: { attributes: { hitPoints: { value: totalHpAfter } } },
    } as any);

    return healingEffects;
  }
}