import { Paper } from "@mui/material";
import * as React from "react";
import { styled } from "@mui/material";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import TabUnstyled from "@mui/base/TabUnstyled";
import { Box } from "@mui/system";
import { Colors } from "../../lib/colors";
import Form from "./commons/Form/Form";

const Tab = styled(TabUnstyled)(({ theme }) => ({
  color: theme.palette.text.primary,
  cursor: "pointer",
  fontSize: "1rem",
  fontWeight: "500",
  backgroundColor: "#f7f7f7",
  flex: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "32px",
  margin: "0px",
  border: "none",
  borderRadius: "0.75rem 0.75rem 0 0",
  padding: "2rem 2rem",

  "&:focus": {
    color: "#fff",
    borderRadius: "0.75rem 0.75rem 0 0",
  },

  "&.Mui-selected": {
    backgroundColor: "#fff",
    color: theme.palette.text.primary,
  },

  "&.Mui-disable": {
    opacity: "0.5",
    cursor: "not-allowed",
  },
}));

const TabsList = styled(TabsListUnstyled)(({ theme }) => ({
  backgroundColor: "transparent",
  color: Colors.textGray,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  background-color: white;
  padding-bottom: 20px;
`;

const Card = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "510px",
          backgroundColor: "transparent",
        }}
      >
        <TabsUnstyled
          defaultValue={1}
          style={{ width: "100%" }}
          onChange={handleChange}
          value={value}
        >
          <TabsList sx={{ width: "100%" }}>
            <Tab
              sx={
                value === 0
                  ? {
                      borderTop: "0.4rem solid " + Colors.success,
                    }
                  : {}
              }
            >
              Home
            </Tab>
            <Tab>Swap</Tab>
          </TabsList>
          <TabPanel value={0}>
            <Form />
          </TabPanel>
          <TabPanel value={1}>Second content</TabPanel>
        </TabsUnstyled>
      </Box>
    </Box>
  );
};

export default Card;

// const getDesignTokens = (mode: PaletteMode) => ({
//   palette: {
//     mode,
//     background: {
//       default: mode === "dark" ? Colors.black2 : Colors.blueGray,
//     },
//     text: {
//       primary: mode === "dark" ? Colors.lightextGray : Colors.primary,
//     },
//   },
// });

// export default function UnstyledTabsCustomized() {
//   const [mode, setMode] = React.useState<"light" | "dark">("dark");

//   const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
//   const matchesSm = useMediaQuery(theme.breakpoints.up("sm"));
//   return (
//     <ThemeProvider theme={theme}>
//       <
//     </ThemeProvider>
//   );
// }
