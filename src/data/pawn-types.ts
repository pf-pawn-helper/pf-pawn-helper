import { Book, BookOrientation } from "./books";

export type SlotPosition =
  | "Left"
  | "Left Top"
  | "Left Bottom"
  | "Middle"
  | "Middle Top"
  | "Middle Bottom"
  | "Right"
  | "Right Top"
  | "Right Bottom";

export type PawnSize = "Large" | "Medium" | "Small";

export type PawnRace =
  | "Dwarf"
  | "Halfling / Gnome"
  | "Elf / Half-Elf"
  | "Orc / Half-Orc"
  | "Human";

export type PawnClass =
  | "Barbarian"
  | "Bard"
  | "Cleric"
  | "Druid"
  | "Fighter"
  | "Monk"
  | "Paladin"
  | "Ranger"
  | "Rogue"
  | "Sorcerer"
  | "Wizard"
  | "Villager";

export type BookItemBase = {
  isSeparator: boolean;
  book: Book;
  orientation: BookOrientation;
  page: number;
  slot: number;
  class: PawnClass;
};

export interface Separator extends BookItemBase {
  isSeparator: true;
  races: PawnRace[];
}

export interface Pawn extends BookItemBase {
  isSeparator: false;
  position: SlotPosition;
  size: PawnSize;
  race: PawnRace;
  name: string;
}
