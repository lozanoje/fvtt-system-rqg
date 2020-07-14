import {IAbility} from "../shared/ability";

export enum PassionsEnum {
  Devotion = "devotion",
  Fear = "fear",
  Hate = "hate",
  Honor = "honor",
  Loyalty = "loyalty",
  Love = "love",
}

export type PassionData = IAbility & {
  passion: PassionsEnum;
  description: string;
};

export const emptyPassion: PassionData = {
  passion: PassionsEnum.Love,
  description: "",
  value: 0,
  experience: false,
};