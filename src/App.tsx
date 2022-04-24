import { createTheme } from "@mui/material";
import { styled, ThemeProvider } from "@mui/system";
import PageLayout from "./components/PageLayout";
import PawnSearch from "./components/PawnSearch";

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <PageLayout />
    </ThemeProvider>
  );
};

export default App;
