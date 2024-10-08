import { PaladinRangerRogueBook } from "../books";
import { Pawn, Separator } from "../pawn-types";
import { BookHelper } from "./pawn-helpers";

export const PaladinRangerRoguePawns: (Pawn | Separator)[] = new BookHelper(
  PaladinRangerRogueBook
)
  .withSeparatorPage("Front", 1, "Paladin", "Dwarf")
  .withPage("Front", 2, "Paladin", (page) =>
    page
      .withStandardSlot("Dwarf", "Axe Lord", "Deep Marshal", "Forge Rider")
      .withStandardSlot("Dwarf", "Hammer of Justice", "Recruit", "Recruit")
      .withStandardSlot("Dwarf", "Recruit", "Recruit", "Recruit")
      .withStandardSlot("Dwarf", "Recruit")
  )
  .withPage("Front", 3, "Paladin", (page) =>
    page
      .withSeparator("Elf / Half-Elf")
      .withStandardSlot(
        "Elf / Half-Elf",
        "Aloof Archer",
        "Desert Protector",
        "Elven Honorblade"
      )
      .withStandardSlot("Elf / Half-Elf", "Heir Apparent", "Mithral Master")
      .withSeparator("Orc / Half-Orc", "Halfling / Gnome")
  )
  .withPage("Front", 4, "Paladin", (page) =>
    page
      .withSlot((slot) =>
        slot
          .withSmallPawns(
            "Halfling / Gnome",
            "Dog Rider Knight",
            "Evasive Slip",
            "Furious Crusader",
            "Halfling Slinger"
          )
          .andMediumPawn("Orc / Half-Orc", "Dragon Smiter")
      )
      .withSlot((slot) =>
        slot
          .withPawn("Halfling / Gnome", "Halfling Slinger", "Left Top")
          .withPawn("Orc / Half-Orc", "Saintly Knight", "Middle")
      )
      .withSeparator("Human")
      .withStandardSlot("Human", "Callous Rake", "Callous Rake", "Demon Hunter")
  )
  .withPage("Front", 5, "Paladin", (page) =>
    page
      .withStandardSlot("Human", "Knight", "Mounted Archer", "Mounted Paragon")
      .withStandardSlot(
        "Human",
        "Mounted Paragon",
        "Mounted Paragon",
        "Mounted Paragon"
      )
      .withStandardSlot("Human", "Pious Guard", "Pious Guard", "Pious Guard")
      .withStandardSlot("Human", "Pious Guard", "Seelah, Paladin")
  )
  .withPage("Front", 6, "Ranger", (page) =>
    page
      .withSeparator()
      .withSeparator("Dwarf", "Halfling / Gnome", "Orc / Half-Orc")
      .withSlot((slot) =>
        slot
          .withSmallPawns(
            "Halfling / Gnome",
            "Arcane Experimenter",
            "Cannibalistic Hunter",
            "Chaos Arrow",
            "Skirmishing Crusader"
          )
          .andMediumPawn("Dwarf", "Cave Stalker")
      )
      .withSlot((slot) =>
        slot
          .withPawn("Halfling / Gnome", "Tunnel Rat", "Left Top")
          .withPawn("Halfling / Gnome", "Skirmishing Crusader", "Left Bottom")
          .withPawn("Dwarf", "Harsk, Ranger", "Middle")
          .withPawn("Dwarf", "Mountaineer", "Right")
      )
  )
  .withPage("Front", 7, "Ranger", (page) =>
    page
      .withStandardSlot("Orc / Half-Orc", "Border Guard")
      .withSeparator("Elf / Half-Elf")
      .withStandardSlot(
        "Elf / Half-Elf",
        "Cautious Archer",
        "Daredevil Hunter",
        "Green Warden"
      )
      .withStandardSlot("Elf / Half-Elf", "Ice Maiden", "Officer", "Orc Slayer")
  )
  .withPage("Front", 8, "Ranger", (page) =>
    page
      .withStandardSlot(
        "Elf / Half-Elf",
        "Rider of the Steppe",
        "Skilled Sniper",
        "Storm Sorcerer"
      )
      .withStandardSlot("Elf / Half-Elf", "Street Artist", "Unseen Archer")
      .withSeparator("Human")
      .withStandardSlot("Human", "Brigand", "Bounty Hunter", "Charlatan")
  )
  .withPage("Front", 9, "Ranger", (page) =>
    page
      .withStandardSlot("Human", "Falconer", "Fiendslayer", "Mage Hunter")
      .withStandardSlot("Human", "Poacher", "Supreme Hunter", "Swampwalker")
      .withStandardSlot("Human", "Swampwalker", "Novice Scout", "Novice Scout")
      .withStandardSlot("Human", "Novice Scout")
  )
  .withSeparatorPage("Back", 1, "Rogue", "Dwarf")
  .withPage("Back", 2, "Rogue", (page) =>
    page
      .withStandardSlot(
        "Dwarf",
        "Dwarf Rogue (female)",
        "Dwarf Rogue (male)",
        "Fatal Axe"
      )
      .withSeparator("Elf / Half-Elf")
      .withStandardSlot(
        "Elf / Half-Elf",
        "Contract Killer",
        "Contract Killer",
        "Death Priest"
      )
      .withStandardSlot(
        "Elf / Half-Elf",
        "Death Priest",
        "Death Whisperer",
        "Elf Rogue (female)"
      )
  )
  .withPage("Back", 3, "Rogue", (page) =>
    page
      .withStandardSlot(
        "Elf / Half-Elf",
        "Elf Rogue (male)",
        "Shadow Cleric",
        "Shopkeeper"
      )
      .withStandardSlot(
        "Elf / Half-Elf",
        "Master Duelist",
        "Merisiel, Rogue",
        "Merisiel, Rogue"
      )
      .withSeparator("Orc / Half-Orc", "Halfling / Gnome")
      .withSlot((slot) =>
        slot
          .withSmallPawns(
            "Halfling / Gnome",
            "Arcanothief",
            "Dagger Master",
            "Darkstar",
            "Daring Bravo"
          )
          .andMediumPawn("Orc / Half-Orc", "Mage Slayer")
      )
  )
  .withPage("Back", 4, "Rogue", (page) =>
    page
      .withSlot((slot) =>
        slot
          .withSmallPawns(
            "Halfling / Gnome",
            "Daring Bravo",
            "Feisty Hotspur",
            "Guild Initiate",
            "Guild Initiate"
          )
          .andMediumPawn("Orc / Half-Orc", "Midnight Dancer")
      )
      .withSlot((slot) =>
        slot
          .withSmallPawns(
            "Halfling / Gnome",
            "Guild Initiate",
            "Mage Spy",
            "Sound Warrior"
          )
          .andMediumPawn("Orc / Half-Orc", "Skulking Brute")
      )
      .withStandardSlot("Orc / Half-Orc", "Skulking Brute")
      .withSeparator("Human")
  )
  .withPage("Back", 5, "Rogue", (page) =>
    page
      .withStandardSlot("Human", "Blackstrike", "Blade lord", "Chain Mauler")
      .withStandardSlot("Human", "Cutpurse", "Cutpurse", "Dancing Dervish")
      .withStandardSlot("Human", "Deadly Spy", "Dilettante", "Freelance Thief")
      .withStandardSlot(
        "Human",
        "Human Rogue (female)",
        "Human Rogue (male)",
        "Initiate"
      )
  )
  .withPage("Back", 6, "Rogue", (page) =>
    page
      .withStandardSlot("Human", "Initiate", "Initiate", "Masked Lord")
      .withStandardSlot("Human", "Master Spy", "Ruffian", "Squire")
      .withStandardSlot(
        "Human",
        "Street Performer",
        "Street Performer",
        "Traitor"
      )
      .withStandardSlot(
        "Human",
        "Vaultbreaker",
        "Veteran Buccaneer",
        "Veteran Buccaneer"
      )
  )
  .withPage("Back", 7, "Rogue", (page) =>
    page
      .withStandardSlot(
        "Human",
        "Veteran Buccaneer",
        "Veteran Buccaneer",
        "Veteran Buccaneer"
      )
      .withStandardSlot("Human", "Veteran Buccaneer")
  )
  .constructBook();
