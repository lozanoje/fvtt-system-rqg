export const registerRqgSystemSettings = function () {
  game.settings.register("rqg", "specialCrit", {
    name: "Special & Hyper Critical results",
    hint:
      "Add the possibility to roll a special critical (skill/100) and hyper critical (skill/500)",
    scope: "world",
    config: true,
    type: Boolean,
    default: false,
  });

  game.settings.register("rqg", "runesCompendium", {
    name: "Rune items compendium",
    hint:
      "The runes in the specified compendium will be used in the system. Please include all possible runes.",
    scope: "world",
    config: true,
    type: String,
    default: "rqg-compendiums.runes",
  });

  game.settings.register("rqg", "hitLocationsCompendium", {
    name: "Hit location items compendium",
    hint:
      "The hit locations in the specified compendium will be used for configuring armor cover. Please include hit locations for all races.",
    scope: "world",
    config: true,
    type: String,
    default: "rqg-compendiums.hitLocations-all",
  });

  game.settings.register("rqg", "fumbleRollTable", {
    name: "Fumble Roll Table",
    hint: "The name of the Fumble roll table - will be used in combat",
    scope: "world",
    config: true,
    type: String,
    default: "Fumble",
  });

  game.settings.register("rqg", "runes", {
    scope: "world",
    config: false,
    type: Object,
    default: {},
  });

  game.settings.register("rqg", "systemMigrationVersion", {
    name: "System Migration Version",
    hint: "Do not touch this unless you really know what you are doing!",
    scope: "world",
    config: true, // TODO make this false eventually
    type: String,
    default: "",
  });
};