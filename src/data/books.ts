export type Book = {
  fullName: string;
  frontName: string;
  backName: string;
};

export type BookOrientation = "Front" | "Back";

export const BarbarianBardClericBook: Book = {
  fullName: "Barbarian, Bard, Cleric",
  frontName: "Barbarian, Bard",
  backName: "Cleric",
};

export const DruidFighterMonkBook: Book = {
  fullName: "Druid, Fighter, Monk",
  frontName: "Druid, Monk",
  backName: "Fighter",
};

export const PaladinRangerRogueBook: Book = {
  fullName: "Paladin, Ranger, Rogue",
  frontName: "Paladin, Ranger",
  backName: "Rogue",
};

export const SorcererWizardBook: Book = {
  fullName: "Sorcerer, Wizard, Villager",
  frontName: "Sorcerer",
  backName: "Wizard, Villager",
};

export const AllBooks: Book[] = [
  BarbarianBardClericBook,
  DruidFighterMonkBook,
  PaladinRangerRogueBook,
  SorcererWizardBook,
];
