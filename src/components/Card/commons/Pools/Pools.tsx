import { Box } from "@mui/material";
import React from "react";

import Wrapper from "../Wrapper/Wrapper";

import PoolItem from "./commons/PoolItem/PoolItem";

const Pools = () => {
  return (
    <Wrapper>
      <Box
        sx={{
          backgroundColor: "#f2f2f2",
          borderRadius: "0.75rem",
          padding: "1px 10px 10px 10px",
          marginTop: "20px",
        }}
      >
        <PoolItem color="success" />
        <PoolItem color="success" />
        <PoolItem color="warning" />
        <PoolItem color="primary" />
        <PoolItem color="warning" />
      </Box>
    </Wrapper>
  );
};

export default Pools;
