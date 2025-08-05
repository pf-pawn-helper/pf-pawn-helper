import { MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";
import { AllBooks, BarbarianBardClericBook, Book } from "../data/books";

type Props = {
  book: Book;
  setBook: (book: Book) => void;
};

const BookSearch = ({ book, setBook }: Props) => {
  const names = AllBooks.map((b) => b.fullName);

  return (
    <Box onClick={(e) => e.stopPropagation()}>
      <Select
        sx={{ backgroundColor: "white", margin: "6px", width: 300 }}
        value={book.fullName}
        onChange={(event) =>
          setBook(
            AllBooks.find((b) => b.fullName === event.target.value) ??
              BarbarianBardClericBook
          )
        }
        size="small"
        inputProps={{ sx: { padding: 0.5 } }}
      >
        {names.map((value) => (
          <MenuItem sx={{ margin: 0 }} key={value} value={value}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default BookSearch;
