import { CssBaseline } from "@mui/material";
import { Box, styled } from "@mui/system";
import React, { useEffect, useState } from "react";
import {
  getFirstPawnByName,
  getMaxPageNumber,
  getMinPageNumber,
} from "../data/all-pawns";
import { BarbarianBardClericBook, Book, BookOrientation } from "../data/books";
import { Pawn } from "../data/pawn-types";
import BookDisplay from "./BookDisplay";
import PawnSearch from "./PawnSearch";

const defaultBook = BarbarianBardClericBook;
const defaultOrientation = "Front";
const defaultPage = 1;

const CenterAlignBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
});

const FitContentBox = styled(Box)({
  width: "fit-content",
});

const PageLayout = () => {
  const [pawnName, setPawnName] = useState<string>("");
  const [book, setBook] = useState<Book>(defaultBook);
  const [orientation, setOrientation] =
    useState<BookOrientation>(defaultOrientation);
  const [page, setPage] = useState<number>(defaultPage);
  const [pawn, setPawn] = useState<Pawn | undefined>();

  useEffect(() => {
    const pawn = getFirstPawnByName(pawnName);

    if (!pawn) {
      setBook(defaultBook);
      setOrientation(defaultOrientation);
      setPage(defaultPage);
      setPawn(undefined);
      return;
    }

    setBook(pawn.book);
    setOrientation(pawn.orientation);
    setPage(pawn.page);
    setPawn(pawn);
  }, [pawnName]);

  const flip = () => {
    const newOrientation = orientation === "Front" ? "Back" : "Front";
    setOrientation(newOrientation);
    setPage(getMinPageNumber(book, newOrientation));
  };
  const nextPage = () =>
    setPage(Math.min(page + 1, getMaxPageNumber(book, orientation)));
  const previousPage = () =>
    setPage(Math.max(page - 1, getMinPageNumber(book, orientation)));
  const changeBook = (newBook: Book) => {
    setBook(newBook);
    setOrientation("Front");
    setPage(getMinPageNumber(newBook, "Front"));
  };

  return (
    <CenterAlignBox>
      <CssBaseline />
      <FitContentBox>
        <BookDisplay
          book={book}
          orientation={orientation}
          page={page}
          pawn={pawn}
          flip={flip}
          nextPage={nextPage}
          previousPage={previousPage}
          setBook={changeBook}
        />
        <PawnSearch setPawnName={setPawnName} />
      </FitContentBox>
    </CenterAlignBox>
  );
};

export default PageLayout;
