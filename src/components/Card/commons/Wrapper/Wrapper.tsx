import { Box, Container } from "@mui/material";
import React, { ReactNode } from "react";
import Block from "../../../Block/Block";
interface IProps {
  children: ReactNode;
}
const Wrapper = ({ children }: IProps) => {
  return (
    <Container
      sx={{
        padding: "20px",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Block text="Core" color="success" />
        <Block text="Comunity" color="primary" />
        <Block text="Experimental" color="warning" />
      </Box>
      {children}
    </Container>
  );
};

export default Wrapper;
