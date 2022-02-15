import { createTheme, ThemeProvider } from "@mui/material/styles";

import { Box } from "@mui/material";
import React from "react";
import Banner from "./components/Banner/Banner";
import Content from "./components/Content/Content";
import Header from "./components/Header";
import { RootState } from "./redux/store";
import { useSelector } from "react-redux";

function App() {
  const themeOptions = useSelector((state: RootState) => state.theme.mainTheme);

  const theme = React.useMemo(() => createTheme(themeOptions), [themeOptions]);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "background.default",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Banner />
        <Header />
        <Content />
      </Box>
    </ThemeProvider>
  );
}

export default App;
