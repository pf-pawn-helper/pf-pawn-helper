import { IconButton, Paper, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
import { Book, BookOrientation } from "../data/books";
import { Pawn } from "../data/pawn-types";
import PageDisplay from "./PageDisplay";
import SwapHorizontalCircleIcon from "@mui/icons-material/SwapHorizontalCircle";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

type Props = {
  book: Book;
  orientation: BookOrientation;
  page: number;
  pawn?: Pawn;
  flip: () => void;
  nextPage: () => void;
  previousPage: () => void;
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
  background: "#0D0D0D",
});

const BackBlackPaper = styled(Paper)({
  background:
    "repeating-linear-gradient(45deg, #0D0D0D, #0D0D0D 10px, #252525 10px, #252525 20px)",
});

const HeaderFooterBox = styled(Box)({
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
}: Props) => {
  const BookPaper = orientation === "Front" ? BlackPaper : BackBlackPaper;
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BookPaper elevation={1}>
        <HeaderFooterBox>
          <TitleText>
            <strong>Book</strong>: {book.fullName}
          </TitleText>
          <TitleText>
            <IconButton onClick={flip} size="small">
              <SwapHorizontalCircleIcon htmlColor="white" />
            </IconButton>
            <strong>{orientation}</strong> (
            {orientation === "Front" ? book.frontName : book.backName})
          </TitleText>
        </HeaderFooterBox>
        <PageDisplay
          book={book}
          orientation={orientation}
          page={page}
          pawn={pawn}
        />
        <HeaderFooterBox>
          <IconButton onClick={previousPage} size="small">
            <NavigateBeforeIcon htmlColor="white" />
          </IconButton>
          <IconButton onClick={nextPage} size="small">
            <NavigateNextIcon htmlColor="white" />
          </IconButton>
        </HeaderFooterBox>
      </BookPaper>
    </Box>
  );
};

export default BookDisplay;
