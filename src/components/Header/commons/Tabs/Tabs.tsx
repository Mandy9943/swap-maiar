import * as React from "react";
import {
  createTheme,
  PaletteMode,
  styled,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";

import TabUnstyled from "@mui/base/TabUnstyled";
import { Colors } from "../../../../lib/colors";

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    background: {
      default: mode === "dark" ? Colors.black2 : Colors.blueGray,
    },
    text: {
      primary: mode === "dark" ? Colors.lightextGray : Colors.primary,
    },
  },
});
const Tab = styled(TabUnstyled)(({ theme }) => ({
  color: theme.palette.text.primary,
  cursor: "pointer",
  fontSize: "0.75rem",
  fontWeight: "100",
  backgroundColor: "transparent",
  flex: "20%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "32px",
  margin: "0px",
  border: "none",
  borderRadius: "1.5rem",

  "&:focus": {
    color: "#fff",
    borderRadius: "1.6rem",
  },

  "&.Mui-selected": {
    backgroundColor: "#3066ff",
    color: "#fff",
  },

  "&.Mui-disable": {
    opacity: "0.5",
    cursor: "not-allowed",
  },
}));

const TabsList = styled(TabsListUnstyled)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.primary.main,
  borderRadius: "1.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: " 5px",
}));

export default function UnstyledTabsCustomized() {
  const [mode] = React.useState<"light" | "dark">("light");

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  const matchesSm = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <ThemeProvider theme={theme}>
      <TabsUnstyled
        defaultValue={1}
        style={{ width: matchesSm ? "auto " : "100%" }}
      >
        <TabsList sx={{ width: !matchesSm ? "100%" : "360px" }}>
          <Tab>Home</Tab>
          <Tab>Swap</Tab>
          <Tab>Liquidity</Tab>
          <Tab>Farms</Tab>
          <Tab>Analitics</Tab>
        </TabsList>
      </TabsUnstyled>
    </ThemeProvider>
  );
}
