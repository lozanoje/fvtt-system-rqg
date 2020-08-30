import { Attributes, emptyAttributes } from "./attributes";
import { Characteristics, emptyCharacteristics } from "./characteristics";
import { RaceEnum } from "./race";
import { Background, emptyBackground } from "./background";
import { emptySkillCategories, SkillCategories } from "./skillCategories";

export class RqgActorData {
  constructor(
    public characteristics: Characteristics,
    public background: Background,
    public race: RaceEnum,
    // --- Derived / Convenience Data Below ---
    public attributes?: Attributes,
    public skillCategoryModifiers?: SkillCategories,
    public occupations?: any, // For occupation dropdown
    public homelands?: any, // For homeland dropdown
    public ownedItems?: any // All owned items divided into type
  ) {}
}

export const emptyActorDataRqg: RqgActorData = new RqgActorData(
  emptyCharacteristics,
  emptyBackground,
  RaceEnum.Humanoid,
  emptyAttributes, // Needs to be persisted?
  emptySkillCategories // Needs to be persisted?
);