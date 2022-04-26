import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import PageLayout from "./components/PageLayout";

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <PageLayout />
    </ThemeProvider>
  );
};

export default App;
