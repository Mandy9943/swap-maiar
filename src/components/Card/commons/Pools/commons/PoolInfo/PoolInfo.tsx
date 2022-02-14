import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { InfoItem } from "../../../Info/Info";
import WaterIcon from "@mui/icons-material/Water";
import StorageIcon from "@mui/icons-material/Storage";
const PoolInfo = () => {
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        padding: "1.2rem",
      }}
    >
      <Typography variant="body1">
        <InfoItem
          children1={
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  border: "1px solid rgb(31,32,33,0.3)",
                  borderRadius: "50%",
                  width: "2.3rem",
                  height: "2.3rem",
                  fontSize: "1.6rem",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "1rem",
                }}
              >
                <WaterIcon fontSize="inherit" />
              </Box>
              Total Liquidity
            </Box>
          }
          children2={"$653,757,616"}
        />
        <InfoItem
          children1={
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  border: "1px solid rgb(31,32,33,0.3)",
                  borderRadius: "50%",
                  width: "2.3rem",
                  height: "2.3rem",
                  fontSize: "1.6rem",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "1rem",
                }}
              >
                <StorageIcon fontSize="inherit" />
              </Box>
              Fees Rewards
            </Box>
          }
          children2={"$653,757,616"}
        />
        <InfoItem
          children1={
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  border: "1px solid rgb(31,32,33,0.3)",
                  borderRadius: "50%",
                  width: "2.3rem",
                  height: "2.3rem",
                  fontSize: "1.6rem",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "1rem",
                }}
              >
                <img
                  src={
                    "https://media.elrond.com/tokens/asset/USDC-c76f1f/logo.svg"
                  }
                  alt=""
                  style={{
                    width: "2.3rem",
                    height: "2.3rem",
                  }}
                />
              </Box>
              EGLD
            </Box>
          }
          children2={"1,741,535"}
        />
        <InfoItem
          children1={
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  border: "1px solid rgb(31,32,33,0.3)",
                  borderRadius: "50%",
                  width: "2.3rem",
                  height: "2.3rem",
                  fontSize: "1.6rem",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "1rem",
                }}
              >
                <img
                  src={
                    "https://media.elrond.com/tokens/asset/MEX-455c57/logo.svg"
                  }
                  alt=""
                  style={{
                    width: "2.3rem",
                    height: "2.3rem",
                  }}
                />
              </Box>
              MEX
            </Box>
          }
          children2={"921,646,832,101"}
        />
      </Typography>
    </Box>
  );
};

export default PoolInfo;
