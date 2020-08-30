import { emptyResource, Resource } from "../shared/resource";

// Values calculated in RqgActor.prepareData with help from RqgCalculations
export class Attributes {
  constructor(
    public magicPoints: Resource,
    public hitPoints: Resource,
    public healingRate?: number,
    public damageBonus?: string, // For example "1D4"
    public spiritCombatDamage?: string, // For example "1D4"
    public maximumEncumbrance?: number,
    public sizStrikeRank?: number,
    public dexStrikeRank?: number,
    public movementRate?: number
  ) {}
}

export const emptyAttributes = new Attributes(emptyResource, emptyResource);