import { createTheme, ThemeOptions } from "@mui/material";
import { createSlice } from "@reduxjs/toolkit";
import { Colors } from "../../lib/colors";

export interface IThemeSlice {
  mainTheme: any;
}
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
      fontSize: "0.9rem",
      "@media (min-width:768px)": {
        fontSize: "1rem",
      },
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

const initialState: IThemeSlice = {
  mainTheme: themeOptions,
};

export const ThemeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeMode: (state) => {
      state.mainTheme = createTheme({
        ...themeOptions,
        palette: {
          ...themeOptions.palette,
          mode: state.mainTheme.palette.mode === "light" ? "dark" : "light",
        },
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeMode } = ThemeSlice.actions;

export default ThemeSlice.reducer;
