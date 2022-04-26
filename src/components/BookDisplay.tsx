import { Paper, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
import { Book, BookOrientation } from "../data/books";
import { Pawn } from "../data/pawn-types";
import PageDisplay, {
  BackBookBackground,
  FrontBookBackground,
} from "./PageDisplay";
import BookSearch from "./BookSearch";
import Rotate90DegreesCcwIcon from "@mui/icons-material/Rotate90DegreesCcw";

type Props = {
  book: Book;
  orientation: BookOrientation;
  page: number;
  pawn?: Pawn;
  flip: () => void;
  nextPage: () => void;
  previousPage: () => void;
  setBook: (book: Book) => void;
};

const TitleText = styled(Typography)({
  padding: 5,
  color: "white",
  display: "flex",
  alignItems: "center",
});

const BlackPaper = styled(Paper)({
  margin: 2,
  width: "fit-content",
  background: FrontBookBackground,
});

const BackBlackPaper = styled(BlackPaper)({
  background: BackBookBackground,
});

const HeaderBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
});

const BookDisplay = ({
  book,
  orientation,
  page,
  pawn,
  flip,
  nextPage,
  previousPage,
  setBook,
}: Props) => {
  const BookPaper = orientation === "Front" ? BlackPaper : BackBlackPaper;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BookPaper onClick={flip} elevation={1}>
        <HeaderBox>
          <BookSearch book={book} setBook={setBook} />
          <TitleText>
            <Rotate90DegreesCcwIcon fontSize="small" htmlColor="white" />
            <strong>{orientation}</strong> (
            {orientation === "Front" ? book.frontName : book.backName})
          </TitleText>
        </HeaderBox>
        <PageDisplay
          book={book}
          orientation={orientation}
          page={page}
          pawn={pawn}
          nextPage={nextPage}
          previousPage={previousPage}
        />
      </BookPaper>
    </Box>
  );
};

export default BookDisplay;
