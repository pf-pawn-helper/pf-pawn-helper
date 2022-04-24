import { Book, BookOrientation } from "../books";
import {
  Pawn,
  PawnClass,
  PawnRace,
  PawnSize,
  Separator,
  SlotPosition,
} from "../pawn-types";

export class BookHelper {
  book: Book;
  pages: Page[] = [];

  constructor(book: Book) {
    this.book = book;
  }

  withPage = (
    orientation: BookOrientation,
    number: number,
    pawnClass: PawnClass,
    creator: (page: Page) => Page
  ) => {
    this.pages.push(creator(new Page(orientation, number, pawnClass)));
    return this;
  };

  constructBook = () => [
    ...this.pages.map((page) => page.constructPage(this.book)).flat(),
  ];
}

export class Page {
  orientation: BookOrientation;
  number: number;
  pawnClass: PawnClass;
  slots: Slot[] = [];
  separators: { slotNumber: number; races: PawnRace[] }[] = [];

  constructor(
    orientation: BookOrientation,
    number: number,
    pawnClass: PawnClass
  ) {
    this.orientation = orientation;
    this.number = number;
    this.pawnClass = pawnClass;
  }

  withStandardSlot = (
    race: PawnRace,
    left: string,
    middle?: string,
    right?: string
  ) => this.withSlot((slot) => slot.withPawns(race, left, middle, right));

  withSlot = (creator: (slot: Slot) => Slot) => {
    const slotNumber = this.nextSlotNumber();
    this.errorIfTooMany();
    this.errorIfSlotOutOfRangeOrAccountedFor(slotNumber);

    this.slots.push(creator(new Slot(slotNumber)));
    return this;
  };

  withSeparatorInNumber = (slotNumber: number, ...pawnRaces: PawnRace[]) => {
    this.errorIfTooMany();
    this.errorIfSlotOutOfRangeOrAccountedFor(slotNumber);

    this.separators.push({ slotNumber, races: pawnRaces });

    return this;
  };

  withSeparator = (...pawnRaces: PawnRace[]) =>
    this.withSeparatorInNumber(this.nextSlotNumber(), ...pawnRaces);

  constructPage = (book: Book) => {
    return [
      ...this.constructSlot(book, 1).flat(),
      ...this.constructSlot(book, 2).flat(),
      ...this.constructSlot(book, 3).flat(),
      ...this.constructSlot(book, 4).flat(),
    ];
  };

  constructSlot = (book: Book, slotNumber: number) => {
    const slot = this.slots.find((s) => s.number === slotNumber);

    if (slot) {
      return [...slot.constructPawns(book, this, slot).flat()];
    }

    const slotSeparator = this.separators.find(
      (s) => s.slotNumber === slotNumber
    );

    if (slotSeparator) {
      const separator: Separator = {
        isSeparator: true,
        book,
        orientation: this.orientation,
        page: this.number,
        slot: slotSeparator.slotNumber,
        class: this.pawnClass,
        races: slotSeparator.races,
      };

      return [separator];
    }

    return [];
  };

  private nextSlotNumber = () => this.slots.length + this.separators.length + 1;

  private errorIfSlotOutOfRangeOrAccountedFor = (slotNumber: number) => {
    if (slotNumber > 4) {
      throw new Error(`Tried to add a slot in position > 4`);
    }

    if (
      this.slots.map((s) => s.number).includes(slotNumber) ||
      this.separators.map((s) => s.slotNumber).includes(slotNumber)
    ) {
      throw new Error(
        `Tried to add a slot in a position that has already been defined`
      );
    }
  };

  private errorIfTooMany = () => {
    if (this.slots.length + this.separators.length === 4) {
      throw new Error(`Tried to add too many slots to page ${this.number}`);
    }
  };
}

export class Slot {
  number: number;
  pawns: {
    race: PawnRace;
    name: string;
    size: PawnSize;
    position: SlotPosition;
  }[] = [];

  constructor(number: number) {
    this.number = number;
  }

  withPawns = (
    race: PawnRace,
    left: string,
    middle?: string,
    right?: string
  ) => {
    const size = getRaceSize(race);
    this.pawns.push({ race, name: left, size, position: "Left" });

    if (middle) {
      this.pawns.push({ race, name: middle, size, position: "Middle" });
    }

    if (right) {
      this.pawns.push({ race, name: right, size, position: "Right" });
    }

    return this;
  };

  withIndividualPawns = (
    leftRace: PawnRace,
    left: string,
    middleRace?: PawnRace,
    middle?: string,
    rightRace?: PawnRace,
    right?: string
  ) => {
    this.pawns.push({
      race: leftRace,
      name: left,
      size: getRaceSize(leftRace),
      position: "Left",
    });

    if (middleRace && middle) {
      this.pawns.push({
        race: middleRace,
        name: middle,
        size: getRaceSize(middleRace),
        position: "Middle",
      });
    }

    if (rightRace && right) {
      this.pawns.push({
        race: rightRace,
        name: right,
        size: getRaceSize(rightRace),
        position: "Right",
      });
    }

    return this;
  };

  withSmallPawns = (
    race: PawnRace,
    leftTop: string,
    leftBottom?: string,
    middleTop?: string,
    middleBottom?: string
  ) => {
    const size = getRaceSize(race);
    this.pawns.push({ race, name: leftTop, size, position: "Left Top" });

    if (leftBottom) {
      this.pawns.push({
        race,
        name: leftBottom,
        size,
        position: "Left Bottom",
      });
    }

    if (middleTop) {
      this.pawns.push({ race, name: middleTop, size, position: "Middle Top" });
    }

    if (middleBottom) {
      this.pawns.push({
        race,
        name: middleBottom,
        size,
        position: "Middle Bottom",
      });
    }

    return this;
  };

  andMediumPawn = (race: PawnRace, name: string) => {
    const size = getRaceSize(race);
    this.pawns.push({ race, name: name, size, position: "Right" });
    return this;
  };

  constructPawns = (book: Book, page: Page, slot: Slot): Pawn[] => {
    return [
      ...this.pawns.map(
        (p): Pawn => ({
          isSeparator: false,
          book,
          orientation: page.orientation,
          page: page.number,
          slot: slot.number,
          class: page.pawnClass,
          position: p.position,
          size: p.size,
          race: p.race,
          name: p.name,
        })
      ),
    ];
  };
}

const getRaceSize = (race: PawnRace): PawnSize => {
  switch (race) {
    case "Halfling / Gnome":
      return "Small";
    default:
      return "Medium";
  }
};
