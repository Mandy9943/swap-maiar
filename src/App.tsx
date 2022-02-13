import { Box, ThemeOptions } from "@mui/material";
import React from "react";

export const themeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#3066ff",
    },
    success: {
      main: "#12a366",
    },
  },
};

function App() {
  return (
    <Box>
      <div>
        <h1>Hola muindao</h1>
      </div>
    </Box>
  );
}

export default App;
