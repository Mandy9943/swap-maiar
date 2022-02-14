import { Lock } from "@mui/icons-material";
import { Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import React from "react";

const Banner = () => {
  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "center",
        background: "rgba(255, 170, 0, 0.2)",
        alignItems: "center",
        padding: 1,
        borderRadius: 0,
        boxShadow: "none",
      }}
    >
      <Typography variant="body2" component="span">
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Lock color="success" sx={{ fontSize: "13px" }} />
          Scam/Phishing verification: <LinkS>https://</LinkS>
          maiar.exchange
        </Box>
      </Typography>
    </Paper>
  );
};

export default Banner;

const LinkS = styled("span")(({ theme }) => ({
  color: theme.palette.success.main,
  marginLeft: "5px",
}));
