import { Divider, Paper, styled } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Book, BookOrientation } from "../data/books";
import { Pawn } from "../data/pawn-types";
import SinglePageDisplay from "./SinglePageDisplay";

type Props = {
  book: Book;
  orientation: BookOrientation;
  page: number;
  pawn?: Pawn;
  nextPage: () => void;
  previousPage: () => void;
};

const SideBySideBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  margin: theme.spacing(2),
  marginTop: 0,
}));

const PageDisplay = ({
  book,
  orientation,
  page,
  pawn,
  nextPage,
  previousPage,
}: Props) => {
  const previous = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    previousPage();
  };

  const next = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    nextPage();
  };

  return (
    <SideBySideBox>
      <Paper onClick={previous}>
        <SinglePageDisplay
          book={book}
          orientation={orientation}
          page={page}
          pawn={pawn}
        />
      </Paper>
      <Divider orientation="vertical" sx={{ margin: "1px" }} />
      <Paper onClick={next}>
        <SinglePageDisplay
          book={book}
          orientation={orientation}
          page={page + 1}
          pawn={pawn}
          isRight
        />
      </Paper>
    </SideBySideBox>
  );
};

export default PageDisplay;
