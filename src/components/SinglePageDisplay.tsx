import { Divider, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
import { Book, BookOrientation } from "../data/books";
import { Pawn } from "../data/pawn-types";
import SlotDisplay from "./slot/SlotDisplay";

type Props = {
  book: Book;
  orientation: BookOrientation;
  page: number;
  pawn?: Pawn;
  isRight?: boolean;
};

const SlotBox = styled(Box)({
  position: "relative",
});

const PageNumber = styled(Typography)({
  position: "absolute",
  bottom: 5,
  right: 5,
  padding: 3,
  border: "1px solid black",
  backgroundColor: "white",
});

const SinglePageDisplay = ({
  book,
  orientation,
  page,
  pawn,
  isRight = false,
}: Props) => {
  return (
    <>
      {[1, 2, 3, 4].map((slotNumber) => (
        <React.Fragment key={slotNumber}>
          <SlotBox>
            <SlotDisplay
              book={book}
              orientation={orientation}
              page={page}
              slot={slotNumber}
              pawn={pawn}
              isRight={isRight}
            />
            {slotNumber === 4 && isRight && <PageNumber>{page}</PageNumber>}
          </SlotBox>
          <Divider />
        </React.Fragment>
      ))}
    </>
  );
};

export default SinglePageDisplay;
