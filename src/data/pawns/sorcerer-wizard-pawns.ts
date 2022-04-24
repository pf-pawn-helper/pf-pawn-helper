import { SorcererWizardBook } from "../books";
import { Pawn, Separator } from "../pawn-types";
import { BookHelper } from "./pawn-helpers";

export const SorcererWizardPawns: (Pawn | Separator)[] = new BookHelper(
  SorcererWizardBook
)
  .withSeparatorPage("Front", 1, "Sorcerer", "Dwarf")
  .withPage("Front", 2, "Sorcerer", (page) =>
    page
      .withStandardSlot(
        "Dwarf",
        "Fiery Dragonkin",
        "Gem Sorcerer",
        "Gem Sorcerer"
      )
      .withSeparator("Elf / Half-Elf")
      .withStandardSlot(
        "Elf / Half-Elf",
        "Battle Mage",
        "Battle Mage",
        "Cautious Mage"
      )
      .withStandardSlot(
        "Elf / Half-Elf",
        "Cautious Mage",
        "Master Universalist",
        "Seductive Enchanter"
      )
  )
  .withPage("Front", 3, "Sorcerer", (page) =>
    page
      .withStandardSlot("Elf / Half-Elf", "Whiteclaw Sorcerer")
      .withSeparator("Orc / Half-Orc", "Halfling / Gnome")
      .withStandardSlot(
        "Orc / Half-Orc",
        "Acid Terror",
        "Arisen Sorcerer",
        "Bloodfire Sorcerer"
      )
      .withStandardSlot(
        "Orc / Half-Orc",
        "Demon-Blooded Sorcerer",
        "Dragon Chieftain",
        "Toothy Transmuter"
      )
  )
  .withPage("Front", 4, "Sorcerer", (page) =>
    page
      .withSlot((slot) =>
        slot
          .withSmallPawns(
            "Halfling / Gnome",
            "Tainted Sorcerer",
            "Thunder Wizard",
            "Street Magician"
          )
          .andMediumPawn("Orc / Half-Orc", "Tribal Seer")
      )
      .withSeparator("Human")
      .withStandardSlot(
        "Human",
        "Acolyte",
        "Azure Bolt Sorcerer",
        "Azure Bolt Sorcerer"
      )
      .withStandardSlot(
        "Human",
        "Blackscale Sorcerer",
        "Blackscale Sorcerer",
        "Blackscale Sorcerer"
      )
  )
  .withPage("Front", 5, "Sorcerer", (page) =>
    page
      .withStandardSlot(
        "Human",
        "Bramble Sorcerer",
        "Celestial Theurge",
        "Diabolical Charmer"
      )
      .withStandardSlot(
        "Human",
        "Fate-Bound Mage",
        "Princess",
        "Seoni, Sorcerer"
      )
  )
  .withSeparatorPage("Front", 6, "Villager")
  .withSeparatorPage("Front", 7, "Villager")
  .withPage("Front", 8, "Villager", (page) =>
    page
      .withSeparator("Human")
      .withStandardSlot("Human", "Beggar", "Beggar", "Beggar")
      .withStandardSlot("Human", "Beggar", "Beggar", "Beggar")
      .withStandardSlot("Human", "Barmaid", "King", "Pig Farmer")
  )
  .withSeparatorPage("Back", 1, "Wizard", "Dwarf")
  .withPage("Back", 2, "Wizard", (page) =>
    page
      .withStandardSlot(
        "Dwarf",
        "Cave Wizard",
        "Dwarf Wizard (female)",
        "Dwarf Wizard (male)"
      )
      .withStandardSlot("Dwarf", "Guru", "Master Historian", "Wise Sage")
      .withSeparator("Elf / Half-Elf")
      .withStandardSlot(
        "Elf / Half-Elf",
        "Cutthroat Lawyer",
        "Cutthroat Lawyer",
        "Cutthroat Lawyer"
      )
  )
  .withPage("Back", 3, "Wizard", (page) =>
    page
      .withStandardSlot(
        "Elf / Half-Elf",
        "Cutthroat Lawyer",
        "Elf Wizard (female)",
        "Elf Wizard (male)"
      )
      .withStandardSlot(
        "Elf / Half-Elf",
        "Fey Enchantress",
        "Investigator Wizard",
        "Mage Sniper"
      )
      .withStandardSlot("Elf / Half-Elf", "Murderous Scythe")
      .withSeparator("Orc / Half-Orc", "Halfling / Gnome")
  )
  .withPage("Back", 4, "Wizard", (page) =>
    page
      .withSlot((slot) =>
        slot
          .withSmallPawns(
            "Halfling / Gnome",
            "Arcane Pretender",
            "Black Ice",
            "Divine Loremaster"
          )
          .andMediumPawn("Orc / Half-Orc", "Cruel Conjurer")
      )
      .withSlot((slot) =>
        slot
          .withSmallPawns(
            "Halfling / Gnome",
            "Elemental Priest",
            "Lucky Mage",
            "Mad Prophet"
          )
          .andMediumPawn("Orc / Half-Orc", "Queen of Staves")
      )
      .withSlot((slot) =>
        slot
          .withSmallPawns(
            "Halfling / Gnome",
            "Murderous Halfling",
            "Page",
            "Trapsmith"
          )
          .andMediumPawn("Orc / Half-Orc", "Storm Prophet")
      )
      .withSlot((slot) =>
        slot
          .withPawn("Halfling / Gnome", "Trapsmith", "Left Top")
          .withPawn("Halfling / Gnome", "Trickster Mage", "Left Bottom")
          .withPawn("Orc / Half-Orc", "Undead Creator", "Middle")
      )
  )
  .withPage("Back", 5, "Wizard", (page) =>
    page
      .withSeparator("Human")
      .withStandardSlot(
        "Human",
        "Aloof Scholar",
        "Apprentice Jeweler",
        "Apprentice Jeweler"
      )
      .withStandardSlot(
        "Human",
        "Apprentice Jeweler",
        "Cruel Instructor",
        "Cultist"
      )
      .withStandardSlot(
        "Human",
        "Demonologist",
        "Ezren, Wizard",
        "Ezren, Wizard"
      )
  )
  .withPage("Back", 6, "Wizard", (page) =>
    page
      .withStandardSlot(
        "Human",
        "Grand Necromancer",
        "Hermit",
        "Human Wizard (female)"
      )
      .withStandardSlot(
        "Human",
        "Human Wizard (male)",
        "Mercenary Magician",
        "Mercenary Magician"
      )
      .withStandardSlot(
        "Human",
        "Mithral Wizard",
        "Pyromaniac Mage",
        "Pyromaniac Mage"
      )
  )
  .constructBook();
