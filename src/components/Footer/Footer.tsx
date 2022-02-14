import { Box, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        padding: "20px",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            color: "text.secondary",
            fontSize: "14px",
          }}
        >
          Made with <FavoriteIcon color="error" sx={{ fontSize: "14px" }} /> by
          Armando Martin
        </Typography>
      </Box>
      <Typography
        variant="body2"
        sx={{
          color: "text.secondary",
        }}
      >
        Build 3bacc3f
      </Typography>
    </Box>
  );
};

export default Footer;
