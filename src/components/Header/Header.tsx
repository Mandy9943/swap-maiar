import { Box, Paper, styled, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import Buttons from "./commons/Buttons";
import Logo from "./commons/Logo";
import Tabs from "./commons/Tabs";

const Header = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("xl"));
  const matchesSm = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <HeaderWrapper>
      <Box
        sx={{
          width: " 100%",
          display: "flex",
          justifyContent: matchesSm ? "space-between" : "flex-end",
          alignItems: "center",
        }}
      >
        {matchesSm && <Logo />}
        {matches && <Tabs />}
        <Buttons />
      </Box>
      {!matches && (
        <Box
          sx={{
            width: " 100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Tabs />
        </Box>
      )}
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled(Paper)(({ theme }) => ({
  padding: "1.2rem",
  boxShadow: "none",
  borderRadius: 0,
}));
