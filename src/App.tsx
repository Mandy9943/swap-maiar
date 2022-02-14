import { createTheme, ThemeProvider } from "@mui/material/styles";

import { Box, ThemeOptions } from "@mui/material";
import React from "react";
import Banner from "./components/Banner/Banner";
import Content from "./components/Content/Content";
import Header from "./components/Header";
import { Colors } from "./lib/colors";
import Footer from "./components/Footer/Footer";

export const themeOptions: ThemeOptions = {
  breakpoints: {
    values: {
      // extra-small
      xs: 0,
      // small
      sm: 375,
      // medium
      md: 600,
      // large
      lg: 900,
      // extra-large
      xl: 1200,
    },
  },
  typography: {
    // allVariants: {
    //   color: "#1f2021",
    // },
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    body1: {
      color: Colors.textSecondary,
      fontWeight: "400",
    },
    body2: {
      fontSize: "11px",
    },
  },
  palette: {
    mode: "light",

    primary: {
      main: Colors.primary,
    },
    success: {
      main: Colors.success,
    },
    secondary: {
      main: Colors.blueGray,
    },
    text: {
      secondary: Colors.textSecondary,
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          padding: 8,
          width: "auto",
          minHeight: "40px",
          borderRadius: "0.45rem",
          minWidth: "46px",
          "&:hover": {
            backgroundColor: Colors.primary,
            color: "white",
          },
        },
      },
    },
  },
};

const theme = createTheme(themeOptions);

function App() {
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
