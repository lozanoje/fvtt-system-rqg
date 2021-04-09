import { emptyResource, Resource } from "../shared/resource";

// TODO rewrite as const array?
// TODO remove states not directly tied to THP (only keep Shock, Incapacitated & Unconcious)?
export enum HealthEnum {
  Healthy = "healthy",
  Wounded = "wounded",
  Shock = "shock", // (Functionally Incapacitated)
  Unconscious = "unconscious",
  Dead = "dead",
}

// Values calculated in RqgActor.prepareData with help from RqgCalculations
export class Attributes {
  constructor(
    public magicPoints: Resource,
    public hitPoints: Resource,
    public move: number, // 8 for humans
    public heroPoints: number,
    public health: HealthEnum, // TODO store array? and pick the "worst" in prepareData
    public healingRate?: number,
    public damageBonus?: string, // For example "1D4"
    public spiritCombatDamage?: string, // For example "1D4"
    public maximumEncumbrance?: number,
    public equippedEncumbrance?: number,
    public travelEncumbrance?: number,
    public sizStrikeRank?: number,
    public dexStrikeRank?: number
  ) {}
}

export const emptyAttributes = new Attributes(
  emptyResource,
  emptyResource,
  8,
  0,
  HealthEnum.Healthy
);
