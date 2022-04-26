import { Divider, styled } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Book, BookOrientation } from "../data/books";
import { Pawn } from "../data/pawn-types";
import FoldedPagePaper from "./FoldedPagePaper";
import SinglePageDisplay from "./SinglePageDisplay";

type Props = {
  book: Book;
  orientation: BookOrientation;
  page: number;
  pawn?: Pawn;
  nextPage: () => void;
  previousPage: () => void;
};

export const FrontBookBackground = "#0D0D0D";
export const BackBookBackground =
  "repeating-linear-gradient(45deg, #0D0D0D, #0D0D0D 10px, #252525 10px, #252525 20px)";

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
      <FoldedPagePaper
        shouldFold={page !== 1}
        foldDirection="left"
        pageBackground="white"
        behindPageBackground={FrontBookBackground}
        onClick={previous}
      >
        <SinglePageDisplay
          book={book}
          orientation={orientation}
          page={page}
          pawn={pawn}
        />
      </FoldedPagePaper>
      <Divider orientation="vertical" sx={{ margin: "1px" }} />
      <FoldedPagePaper
        shouldFold
        foldDirection="right"
        pageBackground="white"
        behindPageBackground={FrontBookBackground}
        onClick={next}
      >
        <SinglePageDisplay
          book={book}
          orientation={orientation}
          page={page + 1}
          pawn={pawn}
          isRight
        />
      </FoldedPagePaper>
    </SideBySideBox>
  );
};

export default PageDisplay;
