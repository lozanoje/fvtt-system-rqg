import {
  HitLocationDataProperties,
  hitLocationHealthStatuses,
  HitLocationTypesEnum,
} from "../data-model/item-data/hitLocationData";
import { RqgActorDataProperties, RqgActorDataSource } from "../data-model/actor-data/rqgActorData";
import { ActorHealthState, actorHealthStatuses } from "../data-model/actor-data/attributes";
import { DeepPartial } from "snowpack";
import { ItemTypeEnum } from "../data-model/item-data/itemTypes";
import { assertItemType, RqgError } from "./util";
import { RqgItem } from "../items/rqgItem";
import { ActorData } from "@league-of-foundry-developers/foundry-vtt-types/src/foundry/common/data/data.mjs/actorData";
import { ItemData } from "@league-of-foundry-developers/foundry-vtt-types/src/foundry/common/data/data.mjs";

export interface DamageEffects {
  hitLocationUpdates: DeepPartial<HitLocationDataProperties>;
  actorUpdates: DeepPartial<RqgActorDataProperties>;
  /** info to the user  */
  notification: string;
  /** make limbs useless */
  uselessLegs: DeepPartial<HitLocationDataProperties>[];
}

/**
 * Calculate the effects to apply to hitLocations and actor from inflicting damage.
 */
export class DamageCalculations {
  /**
   * Calculate effects of adding `damage` points of damage to `hitLocationData` on actor `actorData`
   */
  public static addWound(
    damage: number,
    applyDamageToTotalHp: boolean,
    hitLocationData: ItemData,
    actorData: ActorData,
    speakerName: string
  ): DamageEffects {
    assertItemType(hitLocationData.type, ItemTypeEnum.HitLocation);
    if (hitLocationData.data.hitLocationType === HitLocationTypesEnum.Limb) {
      return DamageCalculations.calcLimbDamageEffects(
        hitLocationData,
        damage,
        actorData,
        applyDamageToTotalHp,
        speakerName
      );
    } else {
      return DamageCalculations.calcLocationDamageEffects(
        hitLocationData,
        damage,
        actorData,
        applyDamageToTotalHp,
        speakerName
      );
    }
  }

  private static applyDamageToActorTotalHp(
    damage: number,
    actorData: ActorData
  ): DeepPartial<RqgActorDataSource> {
    const currentTotalHp = actorData.data.attributes.hitPoints.value;
    const actorUpdateData: DeepPartial<RqgActorDataSource> = {
      data: { attributes: { hitPoints: { value: 0 } } },
    };
    if (currentTotalHp == null) {
      const msg = `Actor ${actorData.name} don't have a calculated hitpoint value`;
      ui.notifications?.error(msg);
      throw new RqgError(msg, actorUpdateData);
    }
    actorUpdateData.data!.attributes!.hitPoints!.value = currentTotalHp - damage;
    return actorUpdateData;
  }

  private static calcLimbDamageEffects(
    hitLocationData: ItemData,
    fullDamage: number,
    actorData: ActorData,
    applyDamageToTotalHp: boolean,
    speakerName: string
  ): DamageEffects {
    assertItemType(hitLocationData.type, ItemTypeEnum.HitLocation);
    const damageEffects: DamageEffects = {
      hitLocationUpdates: {},
      actorUpdates: {},
      notification: "",
      uselessLegs: [],
    };

    if (hitLocationData.data.hitLocationHealthState === "severed") {
      damageEffects.notification = `${hitLocationData.name} is gone and cannot be hit anymore, reroll to get a new hit location!`;
      return damageEffects;
    }
    const maxHp = hitLocationData.data.hitPoints.max;
    if (maxHp == null) {
      const msg = `Hit location ${hitLocationData.name} doesn't have a max hp`;
      ui.notifications?.error(msg);
      throw new RqgError(msg, hitLocationData);
    }
    const damage = Math.min(maxHp * 2, fullDamage); // Max damage to THP inflicted by limb wound is 2*HP
    const hpValue = hitLocationData.data.hitPoints.value;
    const hpMax = hitLocationData.data.hitPoints.max;
    if (hpValue == null || hpMax == null) {
      const msg = `Hitlocation ${hitLocationData.name} don't have hp value or max`;
      ui.notifications?.error(msg);
      throw new RqgError(msg);
    }
    const totalDamage = hpMax - hpValue + damage;

    // TODO simplify if-structure!
    if (
      totalDamage > 0 &&
      hitLocationHealthStatuses.indexOf(hitLocationData.data.hitLocationHealthState) <
        hitLocationHealthStatuses.indexOf("wounded")
    ) {
      mergeObject(damageEffects.hitLocationUpdates, {
        data: { hitLocationHealthState: "wounded", actorHealthImpact: "wounded" },
      } as any);
    }
    if (
      totalDamage >= hpMax &&
      hitLocationHealthStatuses.indexOf(hitLocationData.data.hitLocationHealthState) <
        hitLocationHealthStatuses.indexOf("useless")
    ) {
      damageEffects.notification = `${speakerName}'s ${hitLocationData.name} is useless and cannot hold anything / support standing. ${speakerName} can still fight with whatever limbs are still functional.`;
      mergeObject(damageEffects.hitLocationUpdates, {
        data: { hitLocationHealthState: "useless" },
      } as any);
    }
    if (fullDamage >= hpMax * 2) {
      damageEffects.notification = `${speakerName} is functionally incapacitated, can no longer fight until healed and is in shock. Self healing may be attempted.`;
      mergeObject(damageEffects.hitLocationUpdates, {
        data: { hitLocationHealthState: "useless", actorHealthImpact: "shock" },
      } as any);
    }
    if (fullDamage >= hpMax * 3) {
      damageEffects.notification = `${speakerName}'s ${hitLocationData.name} is severed or irrevocably maimed. Only a 6 point heal applied within ten minutes can restore a severed limb, assuming all parts are available. ${speakerName} is functionally incapacitated and can no longer fight until healed and is in shock. Self healing is still possible.`;
      mergeObject(damageEffects.hitLocationUpdates, {
        data: { hitLocationHealthState: "severed" },
      } as any);
    }
    const currentLimbDamage = hpMax - hpValue;
    const limbWound = Math.min(hpMax * 2 - currentLimbDamage, damage);
    const wounds = hitLocationData.data.wounds.concat([limbWound]);
    mergeObject(damageEffects.hitLocationUpdates, {
      data: { wounds: wounds },
    } as any);
    if (applyDamageToTotalHp) {
      mergeObject(damageEffects.actorUpdates, this.applyDamageToActorTotalHp(damage, actorData));
    }
    return damageEffects;
  }

  private static calcLocationDamageEffects(
    hitLocationData: ItemData,
    damage: number,
    actorData: ActorData,
    applyDamageToTotalHp: boolean,
    speakerName: string
  ): DamageEffects {
    const damageEffects: DamageEffects = {
      hitLocationUpdates: {},
      actorUpdates: {},
      notification: "",
      uselessLegs: [],
    };
    assertItemType(hitLocationData.type, ItemTypeEnum.HitLocation);
    const hpValue = hitLocationData.data.hitPoints.value;
    const hpMax = hitLocationData.data.hitPoints.max;
    if (!hitLocationData.data.hitLocationType) {
      const msg = `Hitlocation ${hitLocationData.name} on actor ${speakerName} does not have a specified hitLocationType`;
      ui.notifications?.error(msg);
      throw new RqgError(msg, hitLocationData);
    }
    if (hpValue == null || hpMax == null) {
      const msg = `Hitlocation ${hitLocationData.name} don't have hp value or max`;
      ui.notifications?.error(msg);
      throw new RqgError(msg, hitLocationData);
    }
    const totalDamage = hpMax - hpValue + damage;

    if (totalDamage > 0) {
      mergeObject(damageEffects.hitLocationUpdates, {
        data: {
          actorHealthImpact: "wounded",
          hitLocationHealthState: "wounded",
          wounds: [...hitLocationData.data.wounds, damage],
        },
      } as any);
    }

    // A big hit to Abdomen affects connected limbs, but instant death sized damage should override it
    if (
      hitLocationData.data.hitLocationType === HitLocationTypesEnum.Abdomen &&
      totalDamage >= hpMax &&
      totalDamage < hpMax * 3
    ) {
      const attachedLimbs = actorData.items.filter(
        (i: RqgItem) =>
          i.data.type === ItemTypeEnum.HitLocation &&
          i.data.data.connectedTo === hitLocationData.name
      );
      damageEffects.uselessLegs = attachedLimbs.map((limb) => {
        return {
          _id: limb.id,
          data: {
            hitLocationHealthState: "useless",
          },
        };
      });
      damageEffects.notification = `Both legs are useless and ${speakerName} falls to the ground. ${speakerName} may fight from the ground in subsequent melee rounds. Will bleed to death, if not healed or treated with First Aid within ten minutes.`;
    }

    if (totalDamage >= hpMax * 3) {
      damageEffects.notification = `${speakerName} dies instantly.`;
      mergeObject(damageEffects.hitLocationUpdates, {
        data: { actorHealthImpact: "dead" },
      } as any);
    } else if (totalDamage >= hpMax * 2) {
      damageEffects.notification = `${speakerName} becomes unconscious and begins to lose 1 hit point per melee round from bleeding unless healed or treated with First Aid.`;
      mergeObject(damageEffects.hitLocationUpdates, {
        data: { actorHealthImpact: "unconscious" },
      } as any);
    } else if (totalDamage >= hpMax) {
      if (hitLocationData.data.hitLocationType === HitLocationTypesEnum.Head) {
        mergeObject(damageEffects.hitLocationUpdates, {
          data: { actorHealthImpact: "unconscious" },
        } as any);

        damageEffects.notification = `${speakerName} is unconscious and must be healed or treated with First Aid within five minutes (one full turn) or die`;
      } else if (hitLocationData.data.hitLocationType === HitLocationTypesEnum.Chest) {
        damageEffects.notification = `${speakerName} falls and is too busy coughing blood to do anything. Will bleed to death in ten minutes unless the bleeding is stopped by First Aid, and cannot take any action, including healing.`;
        mergeObject(damageEffects.hitLocationUpdates, {
          data: { actorHealthImpact: "shock" },
        } as any);
      }
    }

    if (applyDamageToTotalHp) {
      mergeObject(damageEffects.actorUpdates, this.applyDamageToActorTotalHp(damage, actorData));
    }
    return damageEffects;
  }

  static getCombinedActorHealth(actorData: ActorData): ActorHealthState {
    const totalHitPoints = actorData.data.attributes.hitPoints.value;
    if (totalHitPoints == null) {
      const msg = `Actor hit points value ${totalHitPoints} is missing in actor ${actorData.name}`;
      ui.notifications?.error(msg);
      throw new RqgError(msg, actorData);
    }
    let maxHitPoints = actorData.data.attributes.hitPoints.max;
    if (maxHitPoints == null) {
      const msg = `Actor max hit points value ${maxHitPoints} is missing in actor ${actorData.name}`;
      ui.notifications?.error(msg);
      throw new RqgError(msg, actorData);
    }
    const baseHealth: ActorHealthState = totalHitPoints < maxHitPoints ? "wounded" : "healthy";

    if (totalHitPoints <= 0) {
      return "dead";
    } else if (totalHitPoints <= 2) {
      return "unconscious";
    } else {
      return actorData.items.reduce((acc: ActorHealthState, item: RqgItem) => {
        if (item.data.type !== ItemTypeEnum.HitLocation) {
          return acc;
        } else {
          const actorHealthImpact = item.data.data.actorHealthImpact;
          return actorHealthStatuses.indexOf(actorHealthImpact) > actorHealthStatuses.indexOf(acc)
            ? actorHealthImpact
            : acc;
        }
      }, baseHealth);
    }
  }
}
