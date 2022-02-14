import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Card from "../Card";
import Footer from "../Footer/Footer";

const Content = () => {
  return (
    <Box sx={{ bgcolor: "#f2f2f2", flex: "1" }}>
      <Container>
        <Box
          sx={{
            marginTop: "3.5rem",
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          <Typography variant="h4" sx={{ marginBottom: "0.5rem" }}>
            Swap
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#667183" }}>
            Trade tokens in an instant
          </Typography>
        </Box>
        <Card />
      </Container>
      <Footer />
    </Box>
  );
};

export default Content;
