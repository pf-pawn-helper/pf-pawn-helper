import React from "react";
import { getItemsForSlot } from "../../data/all-pawns";
import { Book, BookOrientation } from "../../data/books";
import { Pawn } from "../../data/pawn-types";
import SeparatorDisplay from "./SeparatorDisplay";
import SmallSlotDisplay from "./SmallSlotDisplay";
import StandardSlotDisplay from "./StandardSlotDisplay";

type Props = {
  book: Book;
  orientation: BookOrientation;
  page: number;
  slot: number;
  pawn?: Pawn;
  isRight?: boolean;
};

const SlotDisplay = ({
  book,
  orientation,
  page,
  slot,
  pawn,
  isRight = false,
}: Props) => {
  const slotItems = getItemsForSlot(book, orientation, page, slot);

  if (slotItems.length < 1) {
    return <SeparatorDisplay />;
  }

  if (slotItems[0].isSeparator) {
    return <SeparatorDisplay separator={slotItems[0]} />;
  }

  if (slotItems.every((s) => !s.isSeparator)) {
    const pawns = slotItems.map((s) => s as Pawn);

    if (pawns.some((s) => s.size === "Small")) {
      return <SmallSlotDisplay pawns={pawns} pawn={pawn} isRight={isRight} />;
    }

    return <StandardSlotDisplay pawns={pawns} pawn={pawn} isRight={isRight} />;
  }

  return <div>Unable to display a slot with separators and pawns</div>;
};

export default SlotDisplay;
