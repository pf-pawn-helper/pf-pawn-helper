import { BarbarianBardClericBook } from "../books";
import { Pawn, Separator } from "../pawn-types";
import { BookHelper } from "./pawn-helpers";

export const BarbarianBardClericPawns: (Pawn | Separator)[] = new BookHelper(
  BarbarianBardClericBook
)
  .withPage("Front", 1, "Barbarian", (page) =>
    page.withSeparatorInNumber(2).withSeparatorInNumber(4, "Dwarf")
  )
  .withPage("Front", 2, "Barbarian", (page) =>
    page
      .withStandardSlot(
        "Dwarf",
        "Dwarven Rager",
        "Dwarven Rager",
        "Giant Slayer"
      )
      .withStandardSlot(
        "Dwarf",
        "Scarred Wanderer",
        "Sundering Axe",
        "Sundering Axe"
      )
      .withSeparator("Elf / Half-Elf", "Halfling / Gnome")
      .withSlot((slot) =>
        slot
          .withSmallPawns(
            "Halfling / Gnome",
            "Crime Lord",
            "Dog Rider",
            "Glaive Rager"
          )
          .andMediumPawn("Elf / Half-Elf", "Graceful Slayer")
      )
  )
  .withPage("Front", 3, "Barbarian", (page) =>
    page
      .withSeparator("Orc / Half-Orc")
      .withStandardSlot(
        "Orc / Half-Orc",
        "Axe Dancer",
        "Axe Dancer",
        "Axe Warrior"
      )
      .withStandardSlot(
        "Orc / Half-Orc",
        "Axe Warrior",
        "Axe Warrior",
        "Axe Warrior"
      )
      .withStandardSlot(
        "Orc / Half-Orc",
        "Death Dealer",
        "Doom Prophet",
        "Double Axe Fury"
      )
  )
  .withPage("Front", 4, "Barbarian", (page) =>
    page
      .withStandardSlot(
        "Orc / Half-Orc",
        "Honourable Outcast",
        "Honourable Outcast",
        "Journeyman Carpenter"
      )
      .withStandardSlot(
        "Orc / Half-Orc",
        "Tavern Champion",
        "Undead Hunter",
        "Undead Hunter"
      )
      .withSeparator("Human")
      .withStandardSlot(
        "Human",
        "Amiri, Barbarian",
        "Battle Skald",
        "Death Master"
      )
  )
  .withPage("Front", 5, "Barbarian", (page) =>
    page
      .withStandardSlot(
        "Human",
        "Life Stealer",
        "Life Stealer",
        "Raging Swimmer"
      )
      .withStandardSlot(
        "Human",
        "Refined Reaver",
        "Savage Mercenary",
        "Savage Mercenary"
      )
      .withStandardSlot(
        "Human",
        "Savage Rider",
        "Savage Rider",
        "Seance Medium"
      )
      .withStandardSlot("Human", "Tribal Leader", "Wild Lancer")
  )
  .withPage("Front", 6, "Bard", (page) =>
    page
      .withSeparatorInNumber(2)
      .withSeparatorInNumber(4, "Dwarf", "Halfling / Gnome")
  )
  .withPage("Front", 7, "Bard", (page) =>
    page
      .withSlot((slot) =>
        slot
          .withSmallPawns(
            "Halfling / Gnome",
            "Lem, Bard",
            "Lion Tamer",
            "Master Entertainer",
            "Notorious Foil"
          )
          .andMediumPawn("Dwarf", "Gambler")
      )
      .withSlot((slot) =>
        slot
          .withSmallPawns(
            "Halfling / Gnome",
            "Taunting Comedian",
            "Town Watcher",
            "Town Watcher",
            "Town Watcher"
          )
          .andMediumPawn("Dwarf", "Tunnel Drummer")
      )
      .withSeparator("Elf / Half-Elf", "Orc / Half-Orc")
      .withStandardSlot(
        "Elf / Half-Elf",
        "Master Storycrafter",
        "Old Sailor",
        "Puppet Master"
      )
  )
  .withPage("Front", 8, "Bard", (page) =>
    page
      .withSlot((slot) =>
        slot.withIndividualPawns(
          "Elf / Half-Elf",
          "Spellsword",
          "Orc / Half-Orc",
          "Rival Explorer",
          "Orc / Half-Orc",
          "Stage Magician"
        )
      )
      .withSeparator("Human")
      .withStandardSlot("Human", "Con Artist", "Constable", "Courtesan")
      .withStandardSlot("Human", "Court Poet", "Enforcer", "Haughty Avenger")
  )
  .withPage("Front", 9, "Bard", (page) =>
    page
      .withStandardSlot(
        "Human",
        "Local Celebrity",
        "Poisonous Performer",
        "Poisonous Performer"
      )
      .withStandardSlot(
        "Human",
        "Successful Merchant",
        "Successful Merchant",
        "Tavern Singer"
      )
      .withStandardSlot("Human", "Tavern Singer", "Tournament Champion")
  )
  .withPage("Back", 1, "Cleric", (page) =>
    page.withSeparatorInNumber(2).withSeparatorInNumber(4, "Dwarf")
  )
  .withPage("Back", 2, "Cleric", (page) =>
    page
      .withStandardSlot(
        "Dwarf",
        "Dwarf Cleric (Female)",
        "Dwarf Cleric (Male)",
        "Guildmaster"
      )
      .withStandardSlot(
        "Dwarf",
        "Holy Battle Mage",
        "Iron Duelist",
        "War Priest"
      )
      .withStandardSlot("Dwarf", "War Priest")
      .withSeparator("Elf / Half-Elf")
  )
  .withPage("Back", 3, "Cleric", (page) =>
    page
      .withStandardSlot(
        "Elf / Half-Elf",
        "Diplomat",
        "Elf Cleric (Female)",
        "Elf Cleric (Male)"
      )
      .withStandardSlot(
        "Elf / Half-Elf",
        "Heretic",
        "Mistress of High Places",
        "Shoreline Cleric"
      )
      .withSeparator("Orc / Half-Orc", "Halfling / Gnome")
      .withStandardSlot(
        "Orc / Half-Orc",
        "Desert Stalker",
        "Desert Stalker",
        "Wrath Priest"
      )
  )
  .withPage("Back", 4, "Cleric", (page) =>
    page
      .withSlot((slot) =>
        slot
          .withSmallPawns(
            "Halfling / Gnome",
            "Champion of Magic",
            "Carousing Champion",
            "Healer",
            "Spry Ambusher"
          )
          .andMediumPawn("Orc / Half-Orc", "Desert Stalker")
      )
      .withSlot((slot) =>
        slot
          .withSmallPawns(
            "Halfling / Gnome",
            "Spry Ambusher",
            "Spry Ambusher",
            "Warren Chief"
          )
          .andMediumPawn("Orc / Half-Orc", "Desert Stalker")
      )
      .withSeparator("Human")
      .withStandardSlot(
        "Human",
        "Cavern Defender",
        "Fire Diabolist",
        "Fire Cleric"
      )
  )
  .withPage("Back", 5, "Cleric", (page) =>
    page
      .withStandardSlot(
        "Human",
        "Herald of Armageddon",
        "Human Cleric (Female)",
        "Human Cleric (Male)"
      )
      .withStandardSlot(
        "Human",
        "Kyra, Cleric",
        "Kyra, Cleric",
        "Master of Undeath"
      )
      .withStandardSlot(
        "Human",
        "Mercenary Healer",
        "Mercenary Healer",
        "Noble Crusader"
      )
      .withStandardSlot(
        "Human",
        "Noble Crusader",
        "Noble Crusader",
        "Noble Crusader"
      )
  )
  .withPage("Back", 6, "Cleric", (page) =>
    page
      .withStandardSlot(
        "Human",
        "Priest of Oblivion",
        "Profane General",
        "Sacred Sorcerer"
      )
      .withStandardSlot(
        "Human",
        "Scholar Priest",
        "Trickster Priest",
        "Undead Bane"
      )
      .withStandardSlot(
        "Human",
        "Undead Slayer",
        "Undead Slayer",
        "Undead Slayer"
      )
      .withStandardSlot("Human", "Vivisectionist")
  )
  .constructBook();
