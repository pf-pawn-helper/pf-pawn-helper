import { DruidFighterMonkBook } from "../books";
import { Pawn, Separator } from "../pawn-types";
import { BookHelper } from "./pawn-helpers";

export const DruidFighterMonkPawns: (Pawn | Separator)[] = new BookHelper(
  DruidFighterMonkBook
)
  .withSeparatorPage("Front", 1, "Druid", "Dwarf")
  .withPage("Front", 2, "Druid", (page) =>
    page
      .withStandardSlot(
        "Dwarf",
        "Earthfather",
        "Initiate of the Flame",
        "Initiate of the Flame"
      )
      .withStandardSlot("Dwarf", "Miner")
      .withSeparator("Elf / Half-Elf")
      .withStandardSlot(
        "Elf / Half-Elf",
        "Creeping Death",
        "Forest Guardian",
        "Forest Guardian"
      )
  )
  .withPage("Front", 3, "Druid", (page) =>
    page
      .withStandardSlot(
        "Elf / Half-Elf",
        "Forest Guardian",
        "Ice Mage",
        "Jungle Wizard"
      )
      .withStandardSlot("Elf / Half-Elf", "Nature Scholar")
      .withSeparator("Orc / Half-Orc")
      .withStandardSlot(
        "Orc / Half-Orc",
        "Angel Slayer",
        "Castaway",
        "Chameleon"
      )
  )
  .withPage("Front", 4, "Druid", (page) =>
    page
      .withStandardSlot(
        "Orc / Half-Orc",
        "Rage Flame",
        "Savage Plant Sage",
        "Shaman"
      )
      .withStandardSlot("Orc / Half-Orc", "Spirit Avenger", "Village Elder")
      .withSeparator("Human", "Halfling / Gnome")
      .withStandardSlot(
        "Human",
        "Fury of Flame",
        "God Stealer",
        "Hateful Scourge"
      )
  )
  .withPage("Front", 5, "Druid", (page) =>
    page
      .withStandardSlot(
        "Human",
        "Island Defender",
        "Mother of Beasts",
        "Mud Shaman"
      )
      .withSlot((slot) =>
        slot
          .withSmallPawns(
            "Halfling / Gnome",
            "Accomplished Angler",
            "Dark Nature Priest",
            "Fey Fiend",
            "Lini, Druid"
          )
          .andMediumPawn("Human", "Mud Shaman")
      )
      .withSlot((slot) =>
        slot
          .withSmallPawns(
            "Halfling / Gnome",
            "Prankster Illusionist",
            "Sacred Guardian",
            "Sylvan Protector",
            "Sylvan Protector"
          )
          .andMediumPawn("Human", "Tribal Champion")
      )
  )
  .withSeparatorPage("Front", 6, "Monk", "Dwarf", "Halfling / Gnome")
  .withSeparatorPage("Front", 7, "Monk", "Dwarf", "Halfling / Gnome")
  .withPage("Front", 8, "Monk", (page) =>
    page
      .withStandardSlot(
        "Dwarf",
        "Improvised Hurler",
        "Improvised Hurler",
        "Spell Hunter"
      )
      .withSlot((slot) =>
        slot
          .withPawn("Halfling / Gnome", "Nimble Shuriken Thrower", "Left Top")
          .withPawn("Halfling / Gnome", "Natural Arcanist", "Left Bottom")
          .withPawn("Dwarf", "Spell Hunter", "Middle")
          .withPawn("Dwarf", "Steadfast Defender", "Right")
      )
      .withSeparator("Elf / Half-Elf")
      .withStandardSlot(
        "Elf / Half-Elf",
        "Grove Guardian",
        "Monastic Sniper",
        "Sword Savant"
      )
  )
  .withPage("Front", 9, "Monk", (page) =>
    page
      .withSeparator("Orc / Half-Orc")
      .withStandardSlot("Orc / Half-Orc", "Cautious Hunter")
      .withSeparator("Human")
      .withStandardSlot(
        "Human",
        "Bullying Brawler",
        "Bullying Brawler",
        "Careful Initiate"
      )
  )
  .withPage("Front", 10, "Monk", (page) =>
    page
      .withStandardSlot(
        "Human",
        "Careful Initiate",
        "Careful Initiate",
        "Cruel Devotee"
      )
      .withStandardSlot(
        "Human",
        "Death Initiate",
        "Death Initiate",
        "Death Initiate"
      )
      .withStandardSlot(
        "Human",
        "Gladiator Champion",
        "Harrying Brute",
        "Mayor"
      )
      .withStandardSlot(
        "Human",
        "Sajan, Monk",
        "Swift Brawler",
        "Vigilant Bodyguard"
      )
  )
  .withSeparatorPage("Back", 1, "Fighter", "Dwarf")
  .withPage("Back", 2, "Fighter", (page) =>
    page
      .withStandardSlot(
        "Dwarf",
        "Dwarven Arbalester",
        "Dwarven Arbalester",
        "Dwarf Fighter (female)"
      )
      .withStandardSlot(
        "Dwarf",
        "Dwarf Fighter (male)",
        "Expert Blacksmith",
        "Golem-Breaker"
      )
      .withStandardSlot("Dwarf", "Shieldbreaker")
      .withSeparator("Elf / Half-Elf")
  )
  .withPage("Back", 3, "Fighter", (page) =>
    page
      .withStandardSlot(
        "Elf / Half-Elf",
        "Doomsayer",
        "Elf Fighter (female)",
        "Elf Fighter (male)"
      )
      .withStandardSlot(
        "Elf / Half-Elf",
        "Elven Recluse",
        "Griffon Rider",
        "Holy Archer"
      )
      .withStandardSlot(
        "Elf / Half-Elf",
        "Pirate King",
        "Scheming Fencer",
        "Scheming Fencer"
      )
      .withStandardSlot(
        "Elf / Half-Elf",
        "Scheming Fencer",
        "Scheming Fencer",
        "Taiga Stalker"
      )
  )
  .withPage("Back", 4, "Fighter", (page) =>
    page
      .withSeparator("Orc / Half-Orc", "Halfling / Gnome")
      .withStandardSlot(
        "Orc / Half-Orc",
        "Brutal Warlord",
        "Failed Disciple",
        "Infernal Champion"
      )
      .withSlot((slot) =>
        slot
          .withSmallPawns(
            "Halfling / Gnome",
            "Fastidious Sharpshooter",
            "Giant Hunter",
            "Giant-Killer",
            "Giant-Killer"
          )
          .andMediumPawn("Orc / Half-Orc", "Sacred Killer")
      )
      .withSlot((slot) =>
        slot
          .withSmallPawns(
            "Halfling / Gnome",
            "Little Fist",
            "Little Fist",
            "Pirate Queen",
            "Sea Captain"
          )
          .andMediumPawn("Orc / Half-Orc", "Traitorous Brigand")
      )
  )
  .withPage("Back", 5, "Fighter", (page) =>
    page
      .withSlot((slot) =>
        slot
          .withPawn("Halfling / Gnome", "Water Merchant", "Left Top")
          .withPawn("Halfling / Gnome", "Seasoned Trapper", "Left Bottom")
          .withPawn("Orc / Half-Orc", "Traitorous Brigand", "Middle")
          .withPawn("Orc / Half-Orc", "Traitorous Brigand", "Right")
      )
      .withSeparator("Human")
      .withStandardSlot(
        "Human",
        "Adventuring Blacksmith",
        "Ageless Master",
        "Cavalry Soldier"
      )
      .withStandardSlot(
        "Human",
        "Cavalry Soldier",
        "Cavalry Soldier",
        "Cavalry Soldier"
      )
  )
  .withPage("Back", 6, "Fighter", (page) =>
    page
      .withStandardSlot(
        "Human",
        "Expert Bodyguard",
        "Expert Bodyguard",
        "Grizzled Mercenary"
      )
      .withStandardSlot("Human", "Guard", "Guard", "Guard")
      .withStandardSlot(
        "Human",
        "Guard",
        "Horse Monk",
        "Human Fighter (female)"
      )
      .withStandardSlot(
        "Human",
        "Human Fighter (male)",
        "Sail Master",
        "Sapper"
      )
  )
  .withPage("Back", 7, "Fighter", (page) =>
    page
      .withStandardSlot(
        "Human",
        "Superstitious Mercenary",
        "Superstitious Mercenary",
        "Superstitious Mercenary"
      )
      .withStandardSlot("Human", "Valeros, Fighter", "Valeros, Fighter")
  )
  .constructBook();
