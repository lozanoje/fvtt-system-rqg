# [1.14.0](https://github.com/sun-dragon-cult/fvtt-system-rqg/compare/v1.13.0...v1.14.0) (2022-03-06)


### Bug Fixes

* add missing translation ([c66c260](https://github.com/sun-dragon-cult/fvtt-system-rqg/commit/c66c260))
* gear tab is shown even if actor only has natural weapons ([a6ebb5d](https://github.com/sun-dragon-cult/fvtt-system-rqg/commit/a6ebb5d))
* handle combatants that references actors that are deleted ([0bb5f6c](https://github.com/sun-dragon-cult/fvtt-system-rqg/commit/0bb5f6c))
* Healing Dialog can break actor [#198](https://github.com/sun-dragon-cult/fvtt-system-rqg/issues/198) ([3720af0](https://github.com/sun-dragon-cult/fvtt-system-rqg/commit/3720af0))
* Opposing rune update not working[#182](https://github.com/sun-dragon-cult/fvtt-system-rqg/issues/182) ([95d19d5](https://github.com/sun-dragon-cult/fvtt-system-rqg/commit/95d19d5))
* prevent warning about setting value of input to null ([3f3bba5](https://github.com/sun-dragon-cult/fvtt-system-rqg/commit/3f3bba5))
* re swap order of DEX & SIZ SR on actorsheet ([e2083f4](https://github.com/sun-dragon-cult/fvtt-system-rqg/commit/e2083f4))
* readd spirit combat icon in combat tab ([b591df4](https://github.com/sun-dragon-cult/fvtt-system-rqg/commit/b591df4))
* rename skill icons ([1b2aca7](https://github.com/sun-dragon-cult/fvtt-system-rqg/commit/1b2aca7))
* update default items icon path ([fa7ac16](https://github.com/sun-dragon-cult/fvtt-system-rqg/commit/fa7ac16))
* various actorsheet layout fixes ([47ff0ae](https://github.com/sun-dragon-cult/fvtt-system-rqg/commit/47ff0ae))


### Features

* add icons for bolts & sling stones ([a34943f](https://github.com/sun-dragon-cult/fvtt-system-rqg/commit/a34943f))
* add icons for bolts & sling stones etc ([a85f78f](https://github.com/sun-dragon-cult/fvtt-system-rqg/commit/a85f78f))
* add more icons ([8a94eb5](https://github.com/sun-dragon-cult/fvtt-system-rqg/commit/8a94eb5))
* make consumables quantity editable [#178](https://github.com/sun-dragon-cult/fvtt-system-rqg/issues/178) ([0f839c0](https://github.com/sun-dragon-cult/fvtt-system-rqg/commit/0f839c0))
* show spirit combat icon on combat tab ([7168d70](https://github.com/sun-dragon-cult/fvtt-system-rqg/commit/7168d70))




# [1.13.0](https://github.com/sun-dragon-cult/fvtt-system-rqg/compare/v1.12.0...v1.13.0) (2022-02-01)


### Bug Fixes

* combatants without linked token crash [#175](https://github.com/sun-dragon-cult/fvtt-system-rqg/issues/175) ([27dfdf1](https://github.com/sun-dragon-cult/fvtt-system-rqg/commit/27dfdf1))
* combatants without linked token crash [#175](https://github.com/sun-dragon-cult/fvtt-system-rqg/issues/175) ([7b74373](https://github.com/sun-dragon-cult/fvtt-system-rqg/commit/7b74373))
* correct runes ([9af18ec](https://github.com/sun-dragon-cult/fvtt-system-rqg/commit/9af18ec))
* editing chance of rune with opposing missing rune throws an error ([dad6817](https://github.com/sun-dragon-cult/fvtt-system-rqg/commit/dad6817))
* importing items from compendiums clears item image to default ([#147](https://github.com/sun-dragon-cult/fvtt-system-rqg/issues/147)) ([1400dec](https://github.com/sun-dragon-cult/fvtt-system-rqg/commit/1400dec))
* Not having SIZ or DEX makes weapon SR calc fail [#173](https://github.com/sun-dragon-cult/fvtt-system-rqg/issues/173) ([ef99be5](https://github.com/sun-dragon-cult/fvtt-system-rqg/commit/ef99be5))
* Roll button on Characteristic card should update the chance value [#167](https://github.com/sun-dragon-cult/fvtt-system-rqg/issues/167) ([83d3850](https://github.com/sun-dragon-cult/fvtt-system-rqg/commit/83d3850))
* runeMagic chat card background is missing ([fc01aea](https://github.com/sun-dragon-cult/fvtt-system-rqg/commit/fc01aea))
* Spirits without SIZ or DEX should not get -1d4 damage bonus [#174](https://github.com/sun-dragon-cult/fvtt-system-rqg/issues/174) ([a23e06e](https://github.com/sun-dragon-cult/fvtt-system-rqg/commit/a23e06e))


### Features

* Add a "creature" toggle on the actorsheet [#103](https://github.com/sun-dragon-cult/fvtt-system-rqg/issues/103) If the checkbox is set, then all skill category modifiers will be 0 to allow setting arbitrary skill values. This is mostly useful for creatures with characteristics outside human values. For example dinosaurs otherwise gets unreasonably large agility modifiers etc. ([f1bd955](https://github.com/sun-dragon-cult/fvtt-system-rqg/commit/f1bd955))
* add a setting for available hitlocation ([#137](https://github.com/sun-dragon-cult/fvtt-system-rqg/issues/137)) ([cc75a72](https://github.com/sun-dragon-cult/fvtt-system-rqg/commit/cc75a72))
* add background images to login page & "no scene page" ([7ae2875](https://github.com/sun-dragon-cult/fvtt-system-rqg/commit/7ae2875))
* add net weapon icon ([baab3d9](https://github.com/sun-dragon-cult/fvtt-system-rqg/commit/baab3d9))
* change foundry pause icon to movement rune ([d389d4d](https://github.com/sun-dragon-cult/fvtt-system-rqg/commit/d389d4d))
* change foundry pause icon to movement rune - again ([cf8dac5](https://github.com/sun-dragon-cult/fvtt-system-rqg/commit/cf8dac5))
* Expand RuneMagicItem datamodel [#148](https://github.com/sun-dragon-cult/fvtt-system-rqg/issues/148) ([db9d8a5](https://github.com/sun-dragon-cult/fvtt-system-rqg/commit/db9d8a5))
* show magic points above character sheet tabs so it's always visible ([#144](https://github.com/sun-dragon-cult/fvtt-system-rqg/issues/144)) ([3580179](https://github.com/sun-dragon-cult/fvtt-system-rqg/commit/3580179))
* Swap order of SIZ - DEX SR display to match starter set stat blocks [#168](https://github.com/sun-dragon-cult/fvtt-system-rqg/issues/168) ([255e003](https://github.com/sun-dragon-cult/fvtt-system-rqg/commit/255e003))


### Reverts

* Revert "feat: change foundry pause icon to movement rune" ([fc95e52](https://github.com/sun-dragon-cult/fvtt-system-rqg/commit/fc95e52))




# [1.12.0](https://github.com/sun-dragon-cult/fvtt-system-rqg/compare/v1.11.0...v1.12.0) (2021-12-21)


### Bug Fixes

* can't select projectile on weapon used id instead of _id that has been deprecated in foundry9 ([d27b85b](https://github.com/sun-dragon-cult/fvtt-system-rqg/commit/d27b85b))
* make character sheet wider to make combat table visible by default also some other minor css fixes ([8ddb4fe](https://github.com/sun-dragon-cult/fvtt-system-rqg/commit/8ddb4fe))
* MP storage calc ([66c9ef1](https://github.com/sun-dragon-cult/fvtt-system-rqg/commit/66c9ef1))


### Features

* a small start at using css variables for styling ([1fba82d](https://github.com/sun-dragon-cult/fvtt-system-rqg/commit/1fba82d))
* calculate and show Base SR (SIZ + DEX SR) also some refactoring for when calculating SR ([e83ff28](https://github.com/sun-dragon-cult/fvtt-system-rqg/commit/e83ff28))
* include character defining form runes in the header rune line ([b19b90a](https://github.com/sun-dragon-cult/fvtt-system-rqg/commit/b19b90a))




# [1.11.0](https://github.com/sun-dragon-cult/fvtt-system-rqg/compare/v1.10.1...v1.11.0) (2021-12-09)


### Features

* add all runes ([ec1cb00](https://github.com/sun-dragon-cult/fvtt-system-rqg/commit/ec1cb00))




## [1.10.1](https://github.com/sun-dragon-cult/fvtt-system-rqg/compare/v1.10.0...v1.10.1) (2021-12-07)


### Bug Fixes

* demo sword and demo bow is not linked properly to their skills This prevented them to be auto added to the actors ([49694d8](https://github.com/sun-dragon-cult/fvtt-system-rqg/commit/49694d8))
* keep combat tracker SR empty instead of initialised to DEX + SIZ SR This makes it possible clear the SR (initiative) with the "Reset Initiative" button at the top of the combat tracker. ([175c6cf](https://github.com/sun-dragon-cult/fvtt-system-rqg/commit/175c6cf))




# [1.10.0](https://github.com/sun-dragon-cult/fvtt-system-rqg/compare/v1.9.0...v1.10.0) (2021-12-05)


### Bug Fixes

* foundry9 deprecated canvas.getLayer ([b8adebb](https://github.com/sun-dragon-cult/fvtt-system-rqg/commit/b8adebb))
* max hitpoints value not calculated in foundry9 foundry 9 changed name of life cycle method "prepareEmbeddedEntities". Duplicate code to new name "prepareEmbeddedDocuments". Also re-tighten checks for hitpoints.max value. ([6f519cf](https://github.com/sun-dragon-cult/fvtt-system-rqg/commit/6f519cf))
* update system setting to point to system rune compendium ([00bb0c2](https://github.com/sun-dragon-cult/fvtt-system-rqg/commit/00bb0c2))


### Features

* add some demo items and actors to help explain the system. ([18b9f5c](https://github.com/sun-dragon-cult/fvtt-system-rqg/commit/18b9f5c))
* update author ([32b7c4d](https://github.com/sun-dragon-cult/fvtt-system-rqg/commit/32b7c4d))




# [1.9.0](https://github.com/sun-dragon-cult/fvtt-system-rqg/compare/v1.8.1...v1.9.0) (2021-11-29)


### Features

* add more images ([de8769c](https://github.com/sun-dragon-cult/fvtt-system-rqg/commit/de8769c))




## [1.8.1](https://github.com/sun-dragon-cult/fvtt-system-rqg/compare/v1.8.0...v1.8.1) (2021-11-24)


### Bug Fixes

* update hardcoded modulenames ([e969c33](https://github.com/sun-dragon-cult/fvtt-system-rqg/commit/e969c33))




# [1.8.0](https://github.com/sun-dragon-cult/fvtt-system-rqg/compare/v1.8.0-7868c28...v1.8.0) (2021-11-23)


### Bug Fixes

* can't open actor sheet directly from compendium ([c762aa5](https://github.com/sun-dragon-cult/fvtt-system-rqg/commit/c762aa5))
* wrong naming of combat actions in weapon migration ([56166f1](https://github.com/sun-dragon-cult/fvtt-system-rqg/commit/56166f1))


### Features

* add api method to run system migration ([c7ff232](https://github.com/sun-dragon-cult/fvtt-system-rqg/commit/c7ff232))
* add armor images ([3c4c9c7](https://github.com/sun-dragon-cult/fvtt-system-rqg/commit/3c4c9c7))
* add compendium consolidation code also refactor migration code ([4a80391](https://github.com/sun-dragon-cult/fvtt-system-rqg/commit/4a80391))
* add human hitlocations pack, rename default runes pack and a GUI fix for hitloction margins ([0e30841](https://github.com/sun-dragon-cult/fvtt-system-rqg/commit/0e30841))
* add img asset for general lore skill ([23de907](https://github.com/sun-dragon-cult/fvtt-system-rqg/commit/23de907))
* add passion "Ambition" ([16a5d5b](https://github.com/sun-dragon-cult/fvtt-system-rqg/commit/16a5d5b))
* add weapon images ([e4679e4](https://github.com/sun-dragon-cult/fvtt-system-rqg/commit/e4679e4))
* hide linked missile unless weapon is owned also relax one more place where maxHitPoints were required ([487941b](https://github.com/sun-dragon-cult/fvtt-system-rqg/commit/487941b))
* improve weapon sheet display of skillname ([723ddde](https://github.com/sun-dragon-cult/fvtt-system-rqg/commit/723ddde))
* improve weapon sheet display of skillname - also show where the skill comes from ([6c9a42a](https://github.com/sun-dragon-cult/fvtt-system-rqg/commit/6c9a42a))
* relax some required values to just show a warning if missing ([adc568a](https://github.com/sun-dragon-cult/fvtt-system-rqg/commit/adc568a))
* relink description links and update cult holidays not yet finished for skill links ([080254b](https://github.com/sun-dragon-cult/fvtt-system-rqg/commit/080254b))
* relink weapon item originId also add some consolidation debug logging ([1e43bd9](https://github.com/sun-dragon-cult/fvtt-system-rqg/commit/1e43bd9))




# [1.8.0-7868c28](https://github.com/Sun-Dragon-Cult/fvtt-system-rqg/compare/v1.8.0-23e10a4...v1.8.0-7868c28) (2021-11-03)


### Features

* migrate meleeWeaponItems & missileWeaponItems to weaponItems ([7868c28](https://github.com/Sun-Dragon-Cult/fvtt-system-rqg/commit/7868c28))




# [1.8.0-23e10a4](https://github.com/Sun-Dragon-Cult/fvtt-system-rqg/compare/v1.7.0...v1.8.0-23e10a4) (2021-11-01)


### Bug Fixes

* allow duplicate RuneMagic to allow the same spell on multiple cults ([8213c50](https://github.com/Sun-Dragon-Cult/fvtt-system-rqg/commit/8213c50))
* alternating background of weapon grid don't include last column ([06ac373](https://github.com/Sun-Dragon-Cult/fvtt-system-rqg/commit/06ac373))
* can't drop weapon skill on owned weapon ([23e10a4](https://github.com/Sun-Dragon-Cult/fvtt-system-rqg/commit/23e10a4))
* combat panel not shown if actor only owns weapon items ([bd25c38](https://github.com/Sun-Dragon-Cult/fvtt-system-rqg/commit/bd25c38))
* don't crash if characteristic formula is empty ([33b5d39](https://github.com/Sun-Dragon-Cult/fvtt-system-rqg/commit/33b5d39))
* first weapon damageType defaults to crush ([3fa528b](https://github.com/Sun-Dragon-Cult/fvtt-system-rqg/commit/3fa528b))
* GUI fix for foundry v9 ([92a77f8](https://github.com/Sun-Dragon-Cult/fvtt-system-rqg/commit/92a77f8))
* move spirit combat panel with magic points up above combat to make mp easier to find ([5bc7403](https://github.com/Sun-Dragon-Cult/fvtt-system-rqg/commit/5bc7403))
* natural weapon roll from chance cell - also make sure chance & damage align ([afe7ae9](https://github.com/Sun-Dragon-Cult/fvtt-system-rqg/commit/afe7ae9))
* spelling mistake ([bff9a7f](https://github.com/Sun-Dragon-Cult/fvtt-system-rqg/commit/bff9a7f))
* Thrown weapons should use themselves as ammo when added to an actor ([bc96a5f](https://github.com/Sun-Dragon-Cult/fvtt-system-rqg/commit/bc96a5f))
* weapon reduces ammo regardless of combat action ([3b7fb78](https://github.com/Sun-Dragon-Cult/fvtt-system-rqg/commit/3b7fb78))
* weapons need to be able to have no linked projectile ([194369b](https://github.com/Sun-Dragon-Cult/fvtt-system-rqg/commit/194369b))
* wrong type on gear data ([c93b759](https://github.com/Sun-Dragon-Cult/fvtt-system-rqg/commit/c93b759))
* wrong type on gear data ([1f5635e](https://github.com/Sun-Dragon-Cult/fvtt-system-rqg/commit/1f5635e))


### Features

* add Chaos Area habitat ([0f7bf21](https://github.com/Sun-Dragon-Cult/fvtt-system-rqg/commit/0f7bf21))
* add Chaos Area habitat ([1b8e457](https://github.com/Sun-Dragon-Cult/fvtt-system-rqg/commit/1b8e457))
* add gift & geas to cult item ([7c25763](https://github.com/Sun-Dragon-Cult/fvtt-system-rqg/commit/7c25763))
* add gluttony & vanity passions ([e64c394](https://github.com/Sun-Dragon-Cult/fvtt-system-rqg/commit/e64c394))
* add habitat "SpiritPlane" ([577fbe9](https://github.com/Sun-Dragon-Cult/fvtt-system-rqg/commit/577fbe9))
* add isMatrix flag to indicate if spirit magic spell should be included in CHA limit calcultions or not ([a126437](https://github.com/Sun-Dragon-Cult/fvtt-system-rqg/commit/a126437))
* add new missile weapon typ "Ranged Weapon" that don't have ammo or damage bonus An example of that could be lasso. ([b586c25](https://github.com/Sun-Dragon-Cult/fvtt-system-rqg/commit/b586c25))
* add rune images ([bb013d2](https://github.com/Sun-Dragon-Cult/fvtt-system-rqg/commit/bb013d2))
* add runes compendium ([bc5719e](https://github.com/Sun-Dragon-Cult/fvtt-system-rqg/commit/bc5719e))
* add skills from character sheet ([d442324](https://github.com/Sun-Dragon-Cult/fvtt-system-rqg/commit/d442324))
* add weaponsheet support for usage types and drag'n'drop multiple skills also import those skills when dragging weapon to actor missile weapon stats not yet part of sheet ([e55efc5](https://github.com/Sun-Dragon-Cult/fvtt-system-rqg/commit/e55efc5))
* Create a WeaponItem ([45e82b1](https://github.com/Sun-Dragon-Cult/fvtt-system-rqg/commit/45e82b1))
* define default texts for special damage types ([c0286f3](https://github.com/Sun-Dragon-Cult/fvtt-system-rqg/commit/c0286f3))
* hide not relevant derived data from sparse actors Note will also hide hero points for actors that are not owned by any player user ([fa256e9](https://github.com/Sun-Dragon-Cult/fvtt-system-rqg/commit/fa256e9))
* improve handling of sorcery ([6f45e40](https://github.com/Sun-Dragon-Cult/fvtt-system-rqg/commit/6f45e40))
* improve naming of Spirit & Rune Magic items ([b2bdaed](https://github.com/Sun-Dragon-Cult/fvtt-system-rqg/commit/b2bdaed))
* make it possible to remove a weapon skill link ([14a9120](https://github.com/Sun-Dragon-Cult/fvtt-system-rqg/commit/14a9120))
* make weapon chat card work ([790c30f](https://github.com/Sun-Dragon-Cult/fvtt-system-rqg/commit/790c30f))
* move SR into usage, show missile data ([447a53a](https://github.com/Sun-Dragon-Cult/fvtt-system-rqg/commit/447a53a))
* prevent usage of weapons with quantity 0. and copy all data except skill from oneHand to offHand also show [] around self quantity, and () around linked projectile (ammo) quantity ([221fd4e](https://github.com/Sun-Dragon-Cult/fvtt-system-rqg/commit/221fd4e))
* show high power runes on sheet top ([345cd00](https://github.com/Sun-Dragon-Cult/fvtt-system-rqg/commit/345cd00))
* show quantity for missile weapon ammo etc ([b153e15](https://github.com/Sun-Dragon-Cult/fvtt-system-rqg/commit/b153e15))
* show special damage text in chatcard on success ([e171df5](https://github.com/Sun-Dragon-Cult/fvtt-system-rqg/commit/e171df5))
* support weapons without HP ([2d261d4](https://github.com/Sun-Dragon-Cult/fvtt-system-rqg/commit/2d261d4))




# [1.7.0](https://github.com/wakeand/fvtt-system-rqg/compare/v1.6.0...v1.7.0) (2021-09-23)


### Features

* add ransom details field ([1960093](https://github.com/wakeand/fvtt-system-rqg/commit/1960093))
* calculate move & enc for travel & equipped also include enc factor for making horses etc capable of carrying more ([a352554](https://github.com/wakeand/fvtt-system-rqg/commit/a352554))
* character sheets don't load in foundry v9 ([b203c34](https://github.com/wakeand/fvtt-system-rqg/commit/b203c34))
* rename race to species ([ff6b8b2](https://github.com/wakeand/fvtt-system-rqg/commit/ff6b8b2))
* translate hitlocation type to match appearance of hitlocation names ([aa54faa](https://github.com/wakeand/fvtt-system-rqg/commit/aa54faa))




# [1.6.0](https://github.com/wakeand/fvtt-system-rqg/compare/v1.5.0...v1.6.0) (2021-09-16)


### Bug Fixes

* item active effects don't show effects i table ([4a933cb](https://github.com/wakeand/fvtt-system-rqg/commit/4a933cb))
* meleeweapon sheet don't shot active effect table refactored the flags isOwned & isEmbedded across all item sheets ([cddfdba](https://github.com/wakeand/fvtt-system-rqg/commit/cddfdba))


### Features

* add delete button to actor active effects table ([cf7e3f5](https://github.com/wakeand/fvtt-system-rqg/commit/cf7e3f5))




# [1.5.0](https://github.com/wakeand/fvtt-system-rqg/compare/v1.4.0...v1.5.0) (2021-09-15)


### Bug Fixes

* correct hitlocationname migration for tentacles ([1702bdb](https://github.com/wakeand/fvtt-system-rqg/commit/1702bdb))
* rolls from weapon chat card always rolled against 0% ([b5beb7c](https://github.com/wakeand/fvtt-system-rqg/commit/b5beb7c))


### Features

* show weapon damage on combat panel ([e11327b](https://github.com/wakeand/fvtt-system-rqg/commit/e11327b))




# [1.4.0](https://github.com/wakeand/fvtt-system-rqg/compare/v1.3.0...v1.4.0) (2021-09-15)


### Bug Fixes

* more ability rolls that get 0% chance ([4b85f5a](https://github.com/wakeand/fvtt-system-rqg/commit/4b85f5a))
* skillrolls from chat gets 0% chance ([c6b8c54](https://github.com/wakeand/fvtt-system-rqg/commit/c6b8c54))


### Features

* randomise characteristics when creating new actor Base characteristic formula is by default for humans. ([6eaa7c5](https://github.com/wakeand/fvtt-system-rqg/commit/6eaa7c5))




# [1.3.0](https://github.com/wakeand/fvtt-system-rqg/compare/v1.2.0...v1.3.0) (2021-09-14)


### Bug Fixes

* create Actor fails with "Dex SR was not yet calculated." ([2392a5c](https://github.com/wakeand/fvtt-system-rqg/commit/2392a5c))
* remove debugging dropdowns for actor health in actor sheet and hitlocation sheet ([fd9608f](https://github.com/wakeand/fvtt-system-rqg/commit/fd9608f))
* skillCategoryModifiers was not set properly also cleanup some reduce syntax ([afc986b](https://github.com/wakeand/fvtt-system-rqg/commit/afc986b))


### Features

* Improve hit location names ([0025625](https://github.com/wakeand/fvtt-system-rqg/commit/0025625))




# [1.2.0](https://github.com/wakeand/fvtt-system-rqg/compare/v1.1.0...v1.2.0) (2021-09-12)


### Bug Fixes

* add homeland "Black Horse County" ([e6cda1e](https://github.com/wakeand/fvtt-system-rqg/commit/e6cda1e))
* build ([55beccd](https://github.com/wakeand/fvtt-system-rqg/commit/55beccd))
* change naming of "praxian tribes" to "prax" ([fd3d788](https://github.com/wakeand/fvtt-system-rqg/commit/fd3d788))
* Extra comma in translation ([5f6baa1](https://github.com/wakeand/fvtt-system-rqg/commit/5f6baa1))
* make sure runeMagic is connected to a cault and that that connection is persisted ([383124b](https://github.com/wakeand/fvtt-system-rqg/commit/383124b))
* modifier field in chatcards only accept one character worked for weapon card - fixed for the other cards as well ([44c46a1](https://github.com/wakeand/fvtt-system-rqg/commit/44c46a1))
* MOV encumbrance penalty is not properly calculated ([e96ca2b](https://github.com/wakeand/fvtt-system-rqg/commit/e96ca2b))
* nested tab in gear isn't highlighted ([8f804e5](https://github.com/wakeand/fvtt-system-rqg/commit/8f804e5))
* preload rune compendium for all players ([7abb869](https://github.com/wakeand/fvtt-system-rqg/commit/7abb869))
* switch to new typescript definitions also contains some minor fixes ([d111b51](https://github.com/wakeand/fvtt-system-rqg/commit/d111b51))
* wrong headers for Homeland & Occupation in player mode (background tab) ([31423a1](https://github.com/wakeand/fvtt-system-rqg/commit/31423a1))


### Features

* translate cult ranks ([a80cb81](https://github.com/wakeand/fvtt-system-rqg/commit/a80cb81))
* translate equipped status ([cfa3c2f](https://github.com/wakeand/fvtt-system-rqg/commit/cfa3c2f))
* translate skill categories ([2f33ec6](https://github.com/wakeand/fvtt-system-rqg/commit/2f33ec6))




# [1.2.0](https://github.com/wakeand/fvtt-system-rqg/compare/v1.1.0...v1.2.0) (2021-09-12)


### Bug Fixes

* add homeland "Black Horse County" ([e6cda1e](https://github.com/wakeand/fvtt-system-rqg/commit/e6cda1e))
* change naming of "praxian tribes" to "prax" ([fd3d788](https://github.com/wakeand/fvtt-system-rqg/commit/fd3d788))
* Extra comma in translation ([5f6baa1](https://github.com/wakeand/fvtt-system-rqg/commit/5f6baa1))
* make sure runeMagic is connected to a cault and that that connection is persisted ([383124b](https://github.com/wakeand/fvtt-system-rqg/commit/383124b))
* modifier field in chatcards only accept one character worked for weapon card - fixed for the other cards as well ([44c46a1](https://github.com/wakeand/fvtt-system-rqg/commit/44c46a1))
* MOV encumbrance penalty is not properly calculated ([e96ca2b](https://github.com/wakeand/fvtt-system-rqg/commit/e96ca2b))
* nested tab in gear isn't highlighted ([8f804e5](https://github.com/wakeand/fvtt-system-rqg/commit/8f804e5))
* preload rune compendium for all players ([7abb869](https://github.com/wakeand/fvtt-system-rqg/commit/7abb869))
* switch to new typescript definitions also contains some minor fixes ([d111b51](https://github.com/wakeand/fvtt-system-rqg/commit/d111b51))
* wrong headers for Homeland & Occupation in player mode (background tab) ([31423a1](https://github.com/wakeand/fvtt-system-rqg/commit/31423a1))


### Features

* translate cult ranks ([a80cb81](https://github.com/wakeand/fvtt-system-rqg/commit/a80cb81))
* translate equipped status ([cfa3c2f](https://github.com/wakeand/fvtt-system-rqg/commit/cfa3c2f))
* translate skill categories ([2f33ec6](https://github.com/wakeand/fvtt-system-rqg/commit/2f33ec6))




# [1.1.0](https://github.com/wakeand/fvtt-system-rqg/compare/v1.0.2...v1.1.0) (2021-08-27)


### Bug Fixes

* actorsheet combat panel isn't visible if actor only has dodge skill but no other weapons ([e2a673e](https://github.com/wakeand/fvtt-system-rqg/commit/e2a673e))
* bottom of chatlog is hidden after weaponcard is updated ([0231dd1](https://github.com/wakeand/fvtt-system-rqg/commit/0231dd1))
* changing foundry roll mode results in exception ([46a2d1f](https://github.com/wakeand/fvtt-system-rqg/commit/46a2d1f))
* embedding a weapon with a skill the actor already knows fails to connect to the known skill ([20bb649](https://github.com/wakeand/fvtt-system-rqg/commit/20bb649))
* Exception when adding natural weapons ([ad0baba](https://github.com/wakeand/fvtt-system-rqg/commit/ad0baba))
* Exception when opening some items from compendiums additionally now hides active effects from items if they are owned ([819c365](https://github.com/wakeand/fvtt-system-rqg/commit/819c365))
* popped out weapon chat cards roll twice if updated at any point ([0343a56](https://github.com/wakeand/fvtt-system-rqg/commit/0343a56))
* runeMagic cult links can crash actor Redo the system to prompt for what cult should be connected to the added runeMagic ([eba22cb](https://github.com/wakeand/fvtt-system-rqg/commit/eba22cb))
* simple calendar init fails ([9a93f02](https://github.com/wakeand/fvtt-system-rqg/commit/9a93f02))
* Use lower case "d" for rolls to be consistent with foundry rolls notation ([b4627d5](https://github.com/wakeand/fvtt-system-rqg/commit/b4627d5))


### Features

* activate chat tab when showing a chat card hopefully fixes players not noticing that there is a new chat card when for example attacking with a weapon ([d22bd5b](https://github.com/wakeand/fvtt-system-rqg/commit/d22bd5b))
* add habitats to homeland dropdown for animals also translate background tab ([a45afd7](https://github.com/wakeand/fvtt-system-rqg/commit/a45afd7))
* disallow rolling weapon skills from the skills tab - this should be done from the weapon on the combat tab ([e2ea248](https://github.com/wakeand/fvtt-system-rqg/commit/e2ea248))
* improve damage roll flavor also avoid error if edgecase of weapon without damage ([f5d10f2](https://github.com/wakeand/fvtt-system-rqg/commit/f5d10f2))
* localize weapon chat card ([e1a33e7](https://github.com/wakeand/fvtt-system-rqg/commit/e1a33e7))
* runemagic context menu now includes both direct roll & show roll chat card ([e498d6b](https://github.com/wakeand/fvtt-system-rqg/commit/e498d6b))
* translate item names ([d4b87cf](https://github.com/wakeand/fvtt-system-rqg/commit/d4b87cf))
* update chance immediately from weapon chat card involves finding the correct input, refocusing and setting cursor at the end after update ([ac4ccba](https://github.com/wakeand/fvtt-system-rqg/commit/ac4ccba))




## [1.0.2](https://github.com/wakeand/fvtt-system-rqg/compare/v1.0.1...v1.0.2) (2021-08-11)


### Bug Fixes

* world journal links don't work also improve display of linked journals in item sheets ([3213317](https://github.com/wakeand/fvtt-system-rqg/commit/3213317))




## [1.0.1](https://github.com/wakeand/fvtt-system-rqg/compare/v1.0.0...v1.0.1) (2021-08-09)


### Bug Fixes

* ts / 0.8 errors ([cc95a2b](https://github.com/wakeand/fvtt-system-rqg/commit/cc95a2b))




# [1.0.0](https://github.com/wakeand/fvtt-system-rqg/compare/v0.19.0...v1.0.0) (2021-08-09)


### Bug Fixes

* about time does not work the same anymore - switch to simple calendar ([90eabb1](https://github.com/wakeand/fvtt-system-rqg/commit/90eabb1))
* actor health not affected by hitlocation wounds ([ea30273](https://github.com/wakeand/fvtt-system-rqg/commit/ea30273))
* armor AE doesn't work ([750776f](https://github.com/wakeand/fvtt-system-rqg/commit/750776f))
* armorSheet equipped status dropdown don't work ([c224a5f](https://github.com/wakeand/fvtt-system-rqg/commit/c224a5f))
* calc ENC and SR + lots of fixes ([28f3045](https://github.com/wakeand/fvtt-system-rqg/commit/28f3045))
* combat tracker doesn't work ([fe7d470](https://github.com/wakeand/fvtt-system-rqg/commit/fe7d470))
* difficulty dropdown on characteristic roll doesn't work and chances in chat cards are not correct ([6f243d1](https://github.com/wakeand/fvtt-system-rqg/commit/6f243d1))
* duplicate items are not prevented ([87e2349](https://github.com/wakeand/fvtt-system-rqg/commit/87e2349))
* fumble rolls don't work ([3ff9964](https://github.com/wakeand/fvtt-system-rqg/commit/3ff9964))
* itemsSheets not working, refactor sheet data and fix _id -> id ([5b9d7a2](https://github.com/wakeand/fvtt-system-rqg/commit/5b9d7a2))
* location does not affect updates to equippedstatus correctly ([f92ba14](https://github.com/wakeand/fvtt-system-rqg/commit/f92ba14))
* make items with same location have a synced equipppedstatus at all times also cleanup som unused lifecycle methods ([a6bde7b](https://github.com/wakeand/fvtt-system-rqg/commit/a6bde7b))
* migrations don't work also change the way armor works from AE to derived data to avoid orphaned Armor AE on actors ([4623cd6](https://github.com/wakeand/fvtt-system-rqg/commit/4623cd6))
* remove armor AE icon so it doesn't show up on token and combat tracker ([1b90c6e](https://github.com/wakeand/fvtt-system-rqg/commit/1b90c6e))
* runeMagic chance is now calculated as a derived value so that it is updated whenever a rune chance changes. Also opposing runes gets updated when one is updated. ([20dad17](https://github.com/wakeand/fvtt-system-rqg/commit/20dad17))
* runeMagic chance not calculated when embedding runeMagic Item ([d75e41b](https://github.com/wakeand/fvtt-system-rqg/commit/d75e41b))
* runeMagic runes on sheet doesn't work ([d649fec](https://github.com/wakeand/fvtt-system-rqg/commit/d649fec))
* skill category modifiers not added to skill chance ([5cef324](https://github.com/wakeand/fvtt-system-rqg/commit/5cef324))
* switch from getOwnedItems to items.get ([f60d80a](https://github.com/wakeand/fvtt-system-rqg/commit/f60d80a))
* token effects are not updated ([16b911c](https://github.com/wakeand/fvtt-system-rqg/commit/16b911c))
* unlinken token doesn't get damage token effects ([c7bd131](https://github.com/wakeand/fvtt-system-rqg/commit/c7bd131))
* use async dice rolls ([ca3d0b3](https://github.com/wakeand/fvtt-system-rqg/commit/ca3d0b3))
* use id instead of _id, also fix actorsheet derived data ([2e2564b](https://github.com/wakeand/fvtt-system-rqg/commit/2e2564b))


### chore

* dummy commit to force major version update ([7355514](https://github.com/wakeand/fvtt-system-rqg/commit/7355514))


### Features

* rely on Foundry "default Token Configuration" instead of presets when creating an actor GM will have to set the desired presets in each world. Token bars defaults to hitPoints & magicPoints, but there are now no more defaults from the system. ([ff885c7](https://github.com/wakeand/fvtt-system-rqg/commit/ff885c7))
* update actor health status to wounded if current hp is less than max hp even if there are no injuries to hitlocations ([8aecf16](https://github.com/wakeand/fvtt-system-rqg/commit/8aecf16))


### BREAKING CHANGES

* only works with foundry v8+




# [0.19.0](https://github.com/wakeand/fvtt-system-rqg/compare/v0.18.0...v0.19.0) (2021-06-17)


### Bug Fixes

* encumbrance skill category modifiers don't work ([4904647](https://github.com/wakeand/fvtt-system-rqg/commit/4904647))
* fumbles, specials etc don't follow the result table ([1323814](https://github.com/wakeand/fvtt-system-rqg/commit/1323814))
* gui alternate row striping on runemagic isn't working ([2a8f0da](https://github.com/wakeand/fvtt-system-rqg/commit/2a8f0da))


### Features

* add link to rune description for character main elemental runes on actor sheet ([e541ae3](https://github.com/wakeand/fvtt-system-rqg/commit/e541ae3))
* add more hitlocation names and remove hitlocation compendium setting ([f696e44](https://github.com/wakeand/fvtt-system-rqg/commit/f696e44))
* new naming of skill & armor items also includes some minor GUI updates of some item sheets and migrations to use the new compendiums ([d59fa83](https://github.com/wakeand/fvtt-system-rqg/commit/d59fa83))




# [0.18.0](https://github.com/wakeand/fvtt-system-rqg/compare/v0.17.0...v0.18.0) (2021-05-11)


### Bug Fixes

* clickable hover effect on combat and prevent roll when editing weapon hp ([9e730c7](https://github.com/wakeand/fvtt-system-rqg/commit/9e730c7))
* fumble rolls don't work anymore ([1bc9134](https://github.com/wakeand/fvtt-system-rqg/commit/1bc9134))
* harmonise displayed actor / token name for all chat messages If token, use token name else use actor prototype token name. Also update the actorSheet title. For unlinked tokens show "[Token] <token name> (<actor prototype name>)", for unlinked prototype (sidebar) tokens show "[Prototype] <actor prototype token name>", and for linked tokens and prototype tokens show "actor prototype name" ([bc2b8e4](https://github.com/wakeand/fvtt-system-rqg/commit/bc2b8e4))
* missile weapon SR isn't displayed anymore ([76b609a](https://github.com/wakeand/fvtt-system-rqg/commit/76b609a))
* NPE if actor doesn't have any hit locations (actually no hitPoints.value) ([d08dfa8](https://github.com/wakeand/fvtt-system-rqg/commit/d08dfa8))
* show correct ENC in gear - view by location ([884349d](https://github.com/wakeand/fvtt-system-rqg/commit/884349d))
* token damage effects are not set for linked actors ([b067792](https://github.com/wakeand/fvtt-system-rqg/commit/b067792))
* token/actor confusion should now mostly be fixed ([d3d812c](https://github.com/wakeand/fvtt-system-rqg/commit/d3d812c))
* wrong actorsheet title for some synthetic actors ([3387451](https://github.com/wakeand/fvtt-system-rqg/commit/3387451))


### Features

* add cowardly passion ([13d0895](https://github.com/wakeand/fvtt-system-rqg/commit/13d0895))
* add more homelands ([368897b](https://github.com/wakeand/fvtt-system-rqg/commit/368897b))
* disable clicked card buutons for 1 sec to prevent double clicks ([8e5a5b2](https://github.com/wakeand/fvtt-system-rqg/commit/8e5a5b2))
* implement context menu rolls for passion and rune ([921499a](https://github.com/wakeand/fvtt-system-rqg/commit/921499a))
* include combat maneuver in flavor for weapon ability roll (slash/impale/crush/parry/...) ([ea233a2](https://github.com/wakeand/fvtt-system-rqg/commit/ea233a2))
* reopen heal wounds dialog if there still are unhealed wounds in that hit location after healing ([ccd1f82](https://github.com/wakeand/fvtt-system-rqg/commit/ccd1f82))
* set combat SR for token from actor sheet not implemented for missile weapons yet ([ab912c3](https://github.com/wakeand/fvtt-system-rqg/commit/ab912c3))
* show price on weapons and armor ([5b2e087](https://github.com/wakeand/fvtt-system-rqg/commit/5b2e087))




# [0.17.0](https://github.com/wakeand/fvtt-system-rqg/compare/v0.16.0...v0.17.0) (2021-04-23)


### Bug Fixes

* black on grey SR numbers in combat tracker ([af9d56b](https://github.com/wakeand/fvtt-system-rqg/commit/af9d56b))
* damage text fixes ([15a2462](https://github.com/wakeand/fvtt-system-rqg/commit/15a2462))
* improve token / actor handling ([ea7c91d](https://github.com/wakeand/fvtt-system-rqg/commit/ea7c91d))
* unconcious and dead notifications pops up for everyone, also refactored into chatMessages ([0c344b3](https://github.com/wakeand/fvtt-system-rqg/commit/0c344b3))
* unnecessary notifications about no active combat ([ac47e59](https://github.com/wakeand/fvtt-system-rqg/commit/ac47e59))


### Features

* also show token name in actorsheet title ([a35d6b8](https://github.com/wakeand/fvtt-system-rqg/commit/a35d6b8))




# [0.16.0](https://github.com/wakeand/fvtt-system-rqg/compare/v0.15.0...v0.16.0) (2021-04-20)


### Bug Fixes

* don't show dodge & spirit combat if the actor doesn't have those items ([bb37c70](https://github.com/wakeand/fvtt-system-rqg/commit/bb37c70))
* limit extreme skill category modifiers by only increasing in 1% steps after +30% ([8a73bfc](https://github.com/wakeand/fvtt-system-rqg/commit/8a73bfc))
* locations stopped working ([7618fbc](https://github.com/wakeand/fvtt-system-rqg/commit/7618fbc))
* mistake when typing itemSheets ([543ef66](https://github.com/wakeand/fvtt-system-rqg/commit/543ef66))
* multiple smaller wounds doesn't make actor unconscious ([f4b3cef](https://github.com/wakeand/fvtt-system-rqg/commit/f4b3cef))
* reduce number of gui warning notifications while keeping the console logs ([bd1cb9e](https://github.com/wakeand/fvtt-system-rqg/commit/bd1cb9e))
* token status effects don't update when affected by low hp ([1fb9212](https://github.com/wakeand/fvtt-system-rqg/commit/1fb9212))


### Features

* include damage rules för limbs etc, also rework the edit wounds dialog to a heal wound dialog ([af36f0d](https://github.com/wakeand/fvtt-system-rqg/commit/af36f0d))
* only combatant (or GM) owner should be allowed to change combat tracker SR ([dfce972](https://github.com/wakeand/fvtt-system-rqg/commit/dfce972))
* re-add token effects and abdomen hits that make legs useless ([3036945](https://github.com/wakeand/fvtt-system-rqg/commit/3036945))




# [0.15.0](https://github.com/wakeand/fvtt-system-rqg/compare/v0.14.0...v0.15.0) (2021-03-09)


### Bug Fixes

* parry special damage is wrong also refactor code and improve weapons card layout ([66187f0](https://github.com/wakeand/fvtt-system-rqg/commit/66187f0))


### Features

* add fumble table rolls ([2f2e152](https://github.com/wakeand/fvtt-system-rqg/commit/2f2e152))




# [0.14.0](https://github.com/wakeand/fvtt-system-rqg/compare/v0.13.1...v0.14.0) (2021-03-06)


### Bug Fixes

* active effects on duplicated or imported actors looses origin connection with the actor ownedItems ([2fcaaae](https://github.com/wakeand/fvtt-system-rqg/commit/2fcaaae))
* characteristic rolls don't include difficulty multiplier also some refactoring to use async in chatcards ([7854de6](https://github.com/wakeand/fvtt-system-rqg/commit/7854de6))
* don't show error messages for other players when changing equipped status Check that you have owner rights before entering life cycle methods, also disable interaction for observers. ([0f03456](https://github.com/wakeand/fvtt-system-rqg/commit/0f03456))
* make currency quantity player editable ([437a59f](https://github.com/wakeand/fvtt-system-rqg/commit/437a59f))
* NPE in RqgCombat ([6aeb3f7](https://github.com/wakeand/fvtt-system-rqg/commit/6aeb3f7))
* only show the AE tab to GM ([5388e40](https://github.com/wakeand/fvtt-system-rqg/commit/5388e40))
* round enc on gear.sheet down ([38ca903](https://github.com/wakeand/fvtt-system-rqg/commit/38ca903))
* wrong actor on roll chat messages ([cdaed85](https://github.com/wakeand/fvtt-system-rqg/commit/cdaed85))


### Features

* add GM Notes field to physical items ([4dc9478](https://github.com/wakeand/fvtt-system-rqg/commit/4dc9478))
* add migrations - clean actor active effects and migrate price model change ([c3e5c1c](https://github.com/wakeand/fvtt-system-rqg/commit/c3e5c1c))
* add more homelands ([bc95467](https://github.com/wakeand/fvtt-system-rqg/commit/bc95467))
* add town/home area background field ([ca53c7f](https://github.com/wakeand/fvtt-system-rqg/commit/ca53c7f))
* only let GM edit hero points ([7078c92](https://github.com/wakeand/fvtt-system-rqg/commit/7078c92))
* show chatCards to both GM and issuer ([2b9a88d](https://github.com/wakeand/fvtt-system-rqg/commit/2b9a88d))
* show damage buttons for parry as well ([1e1fcd5](https://github.com/wakeand/fvtt-system-rqg/commit/1e1fcd5))
* split price into GM visible (real) and player visible (estimated) ([12dac6b](https://github.com/wakeand/fvtt-system-rqg/commit/12dac6b))




## [0.13.1](https://github.com/wakeand/fvtt-system-rqg/compare/v0.13.0...v0.13.1) (2021-02-26)




# [0.12.0](https://github.com/wakeand/fvtt-system-rqg/compare/v0.11.0...v0.12.0) (2021-02-26)


### Features

* add attunedTo field on physical items ([75c1508](https://github.com/wakeand/fvtt-system-rqg/commit/75c1508))




# [0.11.0](https://github.com/wakeand/fvtt-system-rqg/compare/v0.10.0...v0.11.0) (2021-02-23)


### Bug Fixes

* entity links in editor fields don't show up as links for players ([8b56d73](https://github.com/wakeand/fvtt-system-rqg/commit/8b56d73))
* owned armor doesn't reveal the gear tab ([5729ffd](https://github.com/wakeand/fvtt-system-rqg/commit/5729ffd))


### Features

* add weapon chatcard and refactor cards handling ([7452919](https://github.com/wakeand/fvtt-system-rqg/commit/7452919))
* combat notes for allies and general notes ([749c4b4](https://github.com/wakeand/fvtt-system-rqg/commit/749c4b4))
* make missileWeapons consume projectiles again also correct special damage depending on combat maneuver & make missile/thrown weapons get correct damage bonus ([2b98427](https://github.com/wakeand/fvtt-system-rqg/commit/2b98427))
* show damage & hit location buttons in the weapon chat card and do adjusted rolls ([a16169a](https://github.com/wakeand/fvtt-system-rqg/commit/a16169a))




# [0.10.0](https://github.com/wakeand/fvtt-system-rqg/compare/v0.9.0...v0.10.0) (2021-02-17)


### Bug Fixes

* rune magic tab still shown even if a cult exists ([a3bb4ac](https://github.com/wakeand/fvtt-system-rqg/commit/a3bb4ac))


### Features

* add ritual to runeMagic data ([6849f6c](https://github.com/wakeand/fvtt-system-rqg/commit/6849f6c))
* check POW experience on successful Characteristic roll also refactor chat cards ([0b53fcb](https://github.com/wakeand/fvtt-system-rqg/commit/0b53fcb))
* item Card and connect skills to click/dbl click & experience ([1120104](https://github.com/wakeand/fvtt-system-rqg/commit/1120104))
* spirit magic card and connect spirit magic to click/dbl click & MP decrease ([ec81172](https://github.com/wakeand/fvtt-system-rqg/commit/ec81172))




# [0.9.0](https://github.com/wakeand/fvtt-system-rqg/compare/v0.8.0...v0.9.0) (2021-02-14)


### Bug Fixes

* exclude natural weapons from gear by-location view ([bae724d](https://github.com/wakeand/fvtt-system-rqg/commit/bae724d))
* HP is not correctly calculated ([9f7a734](https://github.com/wakeand/fvtt-system-rqg/commit/9f7a734))
* MOV not initialised properly ([4b5b86b](https://github.com/wakeand/fvtt-system-rqg/commit/4b5b86b))
* remove description field from cultSheet and rephrase sub cult field label ([c588731](https://github.com/wakeand/fvtt-system-rqg/commit/c588731))
* write protect background tab unless GM ([ed5084c](https://github.com/wakeand/fvtt-system-rqg/commit/ed5084c))


### Features

* display effective SR in combat section ([2f9073f](https://github.com/wakeand/fvtt-system-rqg/commit/2f9073f))
* hide menu tabs/sections without content ([604f9e3](https://github.com/wakeand/fvtt-system-rqg/commit/604f9e3))
* make spirit combat & damage bonus rollable ([2ff9965](https://github.com/wakeand/fvtt-system-rqg/commit/2ff9965))
* show the actor's elemental runes next to name ([202a651](https://github.com/wakeand/fvtt-system-rqg/commit/202a651))




# [0.8.0](https://github.com/wakeand/fvtt-system-rqg/compare/v0.7.0...v0.8.0) (2021-02-10)


### Bug Fixes

* armor don't update hitlocation AP ([54723db](https://github.com/wakeand/fvtt-system-rqg/commit/54723db))
* hitlocation compendium name wrong ([822a0b6](https://github.com/wakeand/fvtt-system-rqg/commit/822a0b6))


### Features

* add location, isContainer & physicalItemType to gear-page items also added a separate tab on gear that shows nested objects ([17e4f7f](https://github.com/wakeand/fvtt-system-rqg/commit/17e4f7f))
* define hitlocation HP delta on hitlocation item ([92cfeae](https://github.com/wakeand/fvtt-system-rqg/commit/92cfeae))
* equipStatus is now synced across contained items also split gear / currency / consumables view ([b973624](https://github.com/wakeand/fvtt-system-rqg/commit/b973624))




# [0.7.0](https://github.com/wakeand/fvtt-system-rqg/compare/v0.6.1...v0.7.0) (2021-02-02)


### Features

* add race as text field also fix rune context menu ([fe49d85](https://github.com/wakeand/fvtt-system-rqg/commit/fe49d85))
* allow link to journalentry with description from items Now implemented for: skill, rune, cult, spirit-magic & rune-magic ([5e83fc0](https://github.com/wakeand/fvtt-system-rqg/commit/5e83fc0))
* allow link to journalentry with description from rune magic item ([2bed846](https://github.com/wakeand/fvtt-system-rqg/commit/2bed846))
* apply armor penalties to the move quietly skill ([db187d9](https://github.com/wakeand/fvtt-system-rqg/commit/db187d9))
* autoset passion image depending on passion type ([0c9be18](https://github.com/wakeand/fvtt-system-rqg/commit/0c9be18))
* chatcards for characteristics also implement click/doubleclick on characteristics ([c695128](https://github.com/wakeand/fvtt-system-rqg/commit/c695128))
* implement 3-state equipped flag: notCarried, carried, equipped also implement CONFIG.RQG ([18a2fc5](https://github.com/wakeand/fvtt-system-rqg/commit/18a2fc5))
* let GM edit move ([e52c666](https://github.com/wakeand/fvtt-system-rqg/commit/e52c666))
* make characteristics rollable also make them editable for GM only ([fe55a2d](https://github.com/wakeand/fvtt-system-rqg/commit/fe55a2d))
* possibility to remove skill check for skills that needs to be studied ([6f5204d](https://github.com/wakeand/fvtt-system-rqg/commit/6f5204d))




## [0.6.1](https://github.com/wakeand/fvtt-system-rqg/compare/v0.6.0...v0.6.1) (2021-01-20)




# [0.6.0](https://github.com/wakeand/fvtt-system-rqg/compare/v0.5.0...v0.6.0) (2021-01-20)


### Bug Fixes

* Display item type in item sheet dialogs. ([d3dd30a](https://github.com/wakeand/fvtt-system-rqg/commit/d3dd30a))
* Make it possible to create non Embedded Rune Spell Items. Also connect spells dragged to actor, and disconnect spells from deleted Cults. ([58d4e6e](https://github.com/wakeand/fvtt-system-rqg/commit/58d4e6e))
* NPE if weapon was equipped but didn't have a associated skill. ([9887cd4](https://github.com/wakeand/fvtt-system-rqg/commit/9887cd4))
* only prevent items with same type & name, also display a notification when adding an item is blocked ([a3540ee](https://github.com/wakeand/fvtt-system-rqg/commit/a3540ee))
* passion honor automatically gets subject Since passions always will be created directly as ownedItems, the name autofill fix is not needed here. ([00ab88a](https://github.com/wakeand/fvtt-system-rqg/commit/00ab88a))
* Set default Power Rune chance to 50. ([f92e5ce](https://github.com/wakeand/fvtt-system-rqg/commit/f92e5ce))
* show itemsheet if weapon skill could not be found ([6c639ec](https://github.com/wakeand/fvtt-system-rqg/commit/6c639ec))


### Features

* Add Cult tagline. Also remove redundant data-dtype attributes. ([01303d0](https://github.com/wakeand/fvtt-system-rqg/commit/01303d0))
* Add dropdown to choose RuneItem minor runes. ([7b2c6a1](https://github.com/wakeand/fvtt-system-rqg/commit/7b2c6a1))
* Add isNatural checkbox for melee weaponsheet ([a93cccf](https://github.com/wakeand/fvtt-system-rqg/commit/a93cccf))
* Add price field for gear including all kinds of weapons. ([0d4ae07](https://github.com/wakeand/fvtt-system-rqg/commit/0d4ae07))
* Add proper RuneMagic data. Also refactor adding cult runes etc to a BaseItem#onEmbedItem & BaseItem#onDeleteItem. ([0209fe0](https://github.com/wakeand/fvtt-system-rqg/commit/0209fe0))
* Add runes to cults and correct chance calculation of magic runes spells. Also show rune icons för cults and rune magic. ([8c05693](https://github.com/wakeand/fvtt-system-rqg/commit/8c05693))
* Add runes to skills for Sorcery Magic. ([02c076f](https://github.com/wakeand/fvtt-system-rqg/commit/02c076f))
* Add skill specializations - like "Speak (Trade talk)" ([517f6b2](https://github.com/wakeand/fvtt-system-rqg/commit/517f6b2))
* Add spell focus field to spirit magic items. Change name of "spellType" to "concentration" and hide/set that field depending on duration. Improve actor sheet display of spirit magic variable value (yes/no instead of readonly checkbox). ([902017b](https://github.com/wakeand/fvtt-system-rqg/commit/902017b))
* Add support for magic crystals affecting "data.attributes.magicPoints.max". Also round ENC calculations. ([dec21f7](https://github.com/wakeand/fvtt-system-rqg/commit/dec21f7))
* Allow edit of current cult runepoints from actorsheet. ([70ffa64](https://github.com/wakeand/fvtt-system-rqg/commit/70ffa64))
* Auto add linked weapon skill ([#44](https://github.com/wakeand/fvtt-system-rqg/issues/44)) ([7b3fdb6](https://github.com/wakeand/fvtt-system-rqg/commit/7b3fdb6))
* Automatically add Cult runes to the Actor when "embedding" the Cult. ([fe657db](https://github.com/wakeand/fvtt-system-rqg/commit/fe657db))
* calculate and use encumbrance penalties for dodge & skill category bonuses ([ef8ad01](https://github.com/wakeand/fvtt-system-rqg/commit/ef8ad01))
* Change create Actor to create a bare bone actor that can be added to by dragging hitlocations, skills etc to it. ([7b171df](https://github.com/wakeand/fvtt-system-rqg/commit/7b171df))
* Implement an onUpdateItem "lifecycle" function for BaseItem. Also remove some of the excessive logging. ([1446ff3](https://github.com/wakeand/fvtt-system-rqg/commit/1446ff3))
* item context menus first unfinished version ([66f666d](https://github.com/wakeand/fvtt-system-rqg/commit/66f666d))
* Limit HP to max HP. ([069e25f](https://github.com/wakeand/fvtt-system-rqg/commit/069e25f))
* Make the covered hit locations in armor items selectable from a dropdow populated from a compendium pointer to by a game setting. Also various smaller fixes. ([4076460](https://github.com/wakeand/fvtt-system-rqg/commit/4076460))
* new ui look, first iteration ([486ad7a](https://github.com/wakeand/fvtt-system-rqg/commit/486ad7a))
* Populate Skill, Rune & Passion from initial name when created. ([3bd04a9](https://github.com/wakeand/fvtt-system-rqg/commit/3bd04a9))
* prevent adding duplicate items (based on name) This might need some modification at some point ([23e63dd](https://github.com/wakeand/fvtt-system-rqg/commit/23e63dd))
* show item image in actor sheet (gear, magic, ...) ([0c94979](https://github.com/wakeand/fvtt-system-rqg/commit/0c94979))
* Show melee weapon SR in actorsheet Combat section. Also correct size of HP input field length. ([1cfb25f](https://github.com/wakeand/fvtt-system-rqg/commit/1cfb25f))
* show spirit magic CHA limit and sorcery free INT ([93bcc8c](https://github.com/wakeand/fvtt-system-rqg/commit/93bcc8c))
* Sort skills. ([d8734b7](https://github.com/wakeand/fvtt-system-rqg/commit/d8734b7))
* Use Runes from compendium. ([#42](https://github.com/wakeand/fvtt-system-rqg/issues/42)) ([c97b3d4](https://github.com/wakeand/fvtt-system-rqg/commit/c97b3d4))




# [0.5.0](https://github.com/wakeand/fvtt-system-rqg/compare/v0.4.0...v0.5.0) (2020-11-17)


### Bug Fixes

* Communication Skill bonus was wrong. ([332961e](https://github.com/wakeand/fvtt-system-rqg/commit/332961e))
* Correct damage bonus & spirir combat damage calculations. ([2218b98](https://github.com/wakeand/fvtt-system-rqg/commit/2218b98))


### Features

* Add Rune Magic Item ([b9c7ee7](https://github.com/wakeand/fvtt-system-rqg/commit/b9c7ee7))
* Cult item v1. ([67f52e2](https://github.com/wakeand/fvtt-system-rqg/commit/67f52e2))
* Make Passions name reflect the whole passion. Also makes honor work with the passion system. ([a5c3c91](https://github.com/wakeand/fvtt-system-rqg/commit/a5c3c91))




# [0.4.0](https://github.com/wakeand/fvtt-system-rqg/compare/v0.3.0...v0.4.0) (2020-11-09)


### Bug Fixes

* Make Armor is only applied once, even when editing hit location item. Updated ts type definition and removed some ts-ignores. ([cbe1fc3](https://github.com/wakeand/fvtt-system-rqg/commit/cbe1fc3))


### Features

* Add and edit active effects to select item types via a rough GUI. ([0510b82](https://github.com/wakeand/fvtt-system-rqg/commit/0510b82))
* Calculate ENC movement penalty and show current MOV on ActorSheet. ([ea30b72](https://github.com/wakeand/fvtt-system-rqg/commit/ea30b72))




# [0.3.0](https://github.com/wakeand/fvtt-system-rqg/compare/v0.2.0...v0.3.0) (2020-10-22)


### Bug Fixes

* A roll of 01-05 is always a success. ([300dada](https://github.com/wakeand/fvtt-system-rqg/commit/300dada))
* Changed armor references to hitlocation. Layout fixes, including moving runes to a tab. Type fixes in ActorSheet ([5c79e8f](https://github.com/wakeand/fvtt-system-rqg/commit/5c79e8f))
* Cleaned up layout of items in actor sheet. ([e20ab89](https://github.com/wakeand/fvtt-system-rqg/commit/e20ab89))
* Hide "natural" weapons on the gear tab. ([06d053c](https://github.com/wakeand/fvtt-system-rqg/commit/06d053c))
* Hide "natural" weapons on the gear tab. ([2d35a3f](https://github.com/wakeand/fvtt-system-rqg/commit/2d35a3f))
* Missed a classname. ([a010aaf](https://github.com/wakeand/fvtt-system-rqg/commit/a010aaf))
* show AP value. ([3685ebd](https://github.com/wakeand/fvtt-system-rqg/commit/3685ebd))


### Features

* Add input field for weapon HP. Also move total actor hitpoints closer to hitlocation/wounds. ([93f2846](https://github.com/wakeand/fvtt-system-rqg/commit/93f2846))
* Add natural weapons. Also add "combat maneuvers" to melee weapons to specify what you can do with them. ([6d2c9df](https://github.com/wakeand/fvtt-system-rqg/commit/6d2c9df))
* Add Spirit Combat to the Actor Sheet. Also add Dodge skill roll to Combat section and move Damage Bonus & Healing rate to the their sections. ([6d019c8](https://github.com/wakeand/fvtt-system-rqg/commit/6d019c8))
* Added Experience checkboxes to Combat (and all other experience). Made Equipped a checkbox. Added some todo-tabs. ([8831604](https://github.com/wakeand/fvtt-system-rqg/commit/8831604))
* Connect skillItem to meleeWeapon item and make it rollable from actorsheet. ([8b0b462](https://github.com/wakeand/fvtt-system-rqg/commit/8b0b462))
* Include shields in MeleeWeaponItems. ([ba0ad62](https://github.com/wakeand/fvtt-system-rqg/commit/ba0ad62))
* Sort combat tracker on increasing initiative (SR) and prefill SIZ + DEX SR. So far weapon SR isn't used. ([c1eba23](https://github.com/wakeand/fvtt-system-rqg/commit/c1eba23))




# [0.2.0](https://github.com/wakeand/fvtt-system-rqg/compare/v0.1.11...v0.2.0) (2020-09-16)


### Features

* Add Armor Item. ([#28](https://github.com/wakeand/fvtt-system-rqg/issues/28)) ([6b845b2](https://github.com/wakeand/fvtt-system-rqg/commit/6b845b2))
* Add Gear Item. ([#26](https://github.com/wakeand/fvtt-system-rqg/issues/26)) ([e49141a](https://github.com/wakeand/fvtt-system-rqg/commit/e49141a))
* Calculate embedded item data from actor. Added default skills & a skill compendium. Add owned item listener (passions example) ([19ec695](https://github.com/wakeand/fvtt-system-rqg/commit/19ec695))




## [0.1.11](https://github.com/wakeand/fvtt-system-rqg/compare/v0.1.10...v0.1.11) (2020-09-01)




## [0.1.10](https://github.com/wakeand/fvtt-system-rqg/compare/v0.1.9...v0.1.10) (2020-08-31)




## [0.1.9](https://github.com/wakeand/fvtt-system-rqg/compare/v0.1.8...v0.1.9) (2020-08-30)




## [0.1.8](https://github.com/wakeand/fvtt-system-rqg/compare/v0.1.7...v0.1.8) (2020-08-30)




## [0.1.7](https://github.com/wakeand/fvtt-system-rqg/compare/v0.1.6...v0.1.7) (2020-08-30)





## [0.1.5](https://github.com/wakeand/fvtt-system-rqg/compare/v0.1.4...v0.1.5) (2020-08-30)




## [0.1.4](https://github.com/wakeand/fvtt-system-rqg/compare/v0.1.3...v0.1.4) (2020-08-30)




## [0.1.3](https://github.com/wakeand/fvtt-system-rqg/compare/v0.1.2...v0.1.3) (2020-08-30)
