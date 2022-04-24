import { Autocomplete, TextField } from "@mui/material";
import { styled } from "@mui/system";
import { AllBooks, BarbarianBardClericBook, Book } from "../data/books";

type Props = {
  book: Book;
  setBook: (book: Book) => void;
};

const SearchField = styled(TextField)({
  backgroundColor: "white",
  width: 300,
  margin: 6,
});

const BookSearch = ({ book, setBook }: Props) => {
  const names = AllBooks.map((b) => b.fullName);

  return (
    <Autocomplete
      options={names}
      renderInput={(params) => <SearchField variant="standard" {...params} />}
      value={book.fullName}
      onChange={(_, val) =>
        setBook(
          AllBooks.find((b) => b.fullName === val) ?? BarbarianBardClericBook
        )
      }
    />
  );
};

export default BookSearch;
