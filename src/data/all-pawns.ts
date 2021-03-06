import { Book, BookOrientation } from "./books";
import { Pawn } from "./pawn-types";
import { BarbarianBardClericPawns } from "./pawns/barbarian-bard-cleric-pawns";
import { DruidFighterMonkPawns } from "./pawns/druid-fighter-monk-pawns";
import { PaladinRangerRoguePawns } from "./pawns/paladin-ranger-rouge-pawns";
import { SorcererWizardPawns } from "./pawns/sorcerer-wizard-pawns";

const allPawns = [
  ...BarbarianBardClericPawns,
  ...DruidFighterMonkPawns,
  ...PaladinRangerRoguePawns,
  ...SorcererWizardPawns,
];

const unique = (array: string[]) => [...Array.from(new Set(array))];

export const UniquePawnNames = unique(
  allPawns
    .filter((p) => !p.isSeparator)
    .map((p) => (p.isSeparator ? "separator" : p.name))
).sort();

export const getFirstPawnByName = (name: string): Pawn | undefined =>
  allPawns.find((p) => !p.isSeparator && p.name === name) as Pawn;

export const getItemsForSlot = (
  book: Book,
  orientation: BookOrientation,
  page: number,
  slot: number
) =>
  allPawns.filter(
    (p) =>
      p.book === book &&
      p.orientation === orientation &&
      p.page === page &&
      p.slot === slot
  );

const getPawnsInSingleSideOfBook = (book: Book, orientation: BookOrientation) =>
  allPawns.filter((p) => p.book === book && p.orientation === orientation);

export const getMaxPageNumber = (book: Book, orientation: BookOrientation) =>
  Math.max(...getPawnsInSingleSideOfBook(book, orientation).map((p) => p.page));

export const getMinPageNumber = (book: Book, orientation: BookOrientation) =>
  Math.min(...getPawnsInSingleSideOfBook(book, orientation).map((p) => p.page));

export default allPawns;
