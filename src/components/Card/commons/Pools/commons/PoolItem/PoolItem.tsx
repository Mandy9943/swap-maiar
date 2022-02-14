import { Box, IconButton, Paper, Typography } from "@mui/material";
import React, { useState } from "react";

import LockIcon from "@mui/icons-material/Lock";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PoolInfo from "../PoolInfo/PoolInfo";
import { Colors } from "../../../../../../lib/colors";

interface IPoolItem {
  color: "primary" | "success" | "warning";
}
const PoolItem = ({ color }: IPoolItem) => {
  const [isPullInfo, setIsPullInfo] = useState(false);
  const handlePullInfo = () => {
    setIsPullInfo(!isPullInfo);
  };
  return (
    <>
      <Box
        sx={{
          borderRadius: "0.75rem",
          border: "1px solid #cccccc",
          borderLeft: "0.4rem solid " + Colors[color],
          padding: "0.8rem",
          display: "flex",
          width: "100%",
          background: "white",
          marginTop: "1rem",
        }}
      >
        <Box
          sx={{
            marginRight: "1rem",
          }}
        >
          <Paper
            sx={{
              border: "1px solid rgb(31,32,33,0.3)",
              borderRadius: "50%",
              height: "2.3rem",
              width: "2.3rem",
              marginRight: "1.3rem",
              cursor: "pointer",
            }}
            elevation={4}
          >
            <img
              src={"https://media.elrond.com/tokens/asset/MEX-455c57/logo.svg"}
              alt=""
              style={{
                width: "2.3rem",
                height: "2.3rem",
              }}
            />
          </Paper>
          <Paper
            sx={{
              border: "1px solid rgb(31,32,33,0.3)",
              borderRadius: "50%",
              height: "2.3rem",
              width: "2.3rem",
              marginLeft: "1.3rem",
              marginTop: "-0.725rem",
              cursor: "pointer",
            }}
            elevation={4}
          >
            <img
              src={"https://media.elrond.com/tokens/asset/USDC-c76f1f/logo.svg"}
              alt=""
              style={{
                width: "2.3rem",
                height: "2.3rem",
              }}
            />
          </Paper>
        </Box>
        <Typography
          variant="body1"
          component={"div"}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box>MEX-EGLD</Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                borderBottom: "1px dotted " + Colors.textGray,
              }}
            >
              14% /<LockIcon fontSize="inherit" color="warning" /> 210%
            </Box>
            <IconButton onClick={handlePullInfo}>
              {isPullInfo ? (
                <KeyboardArrowUpIcon color="primary" />
              ) : (
                <KeyboardArrowDownIcon color="primary" />
              )}
            </IconButton>
          </Box>
        </Typography>
      </Box>
      {isPullInfo && <PoolInfo />}
    </>
  );
};

export default PoolItem;
