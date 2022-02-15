import { Box, Divider, Paper, Typography } from "@mui/material";
import React, { ReactChild, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import MyTooltip from "../../../Tooltip/Tooltip";
interface IInfoItem {
  children1: ReactChild;
  children2: ReactChild;
  pools?: boolean;
}
export const InfoItem = ({ children1, children2, pools }: IInfoItem) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "7px 0",
        flexDirection: pools ? { xs: "column", md: "row" } : "row",
      }}
    >
      <Typography
        variant="body1"
        component={"div"}
        sx={{
          color: "text.secondary",
        }}
      >
        {children1}
      </Typography>
      <Typography
        variant="body1"
        component={"div"}
        sx={{
          color: "text.secondary",
          marginLeft: { xs: "3rem", md: "0" },
        }}
      >
        {children2}
      </Typography>
    </Box>
  );
};

const Info = () => {
  const [showInfo, setShowInfo] = useState(false);
  const handleShowMoreInfo = () => {
    setShowInfo(!showInfo);
  };
  return (
    <Paper
      elevation={3}
      sx={{
        borderRadius: "0.75rem",
        padding: "1.5rem",
        margin: "20px 0 40px 0",
      }}
    >
      <Box sx={{ marginBottom: "20px" }}>
        <InfoItem
          children1={" Exchange Rate"}
          children2={" 1 EGLD ≃ 191.3088 USDC($191.30)"}
        />
        <InfoItem
          children1={
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              Slippage
              <MyTooltip
                text={
                  "Your transaction will revert if the price moves unfavorably by more than this percentage."
                }
              />
            </Box>
          }
          children2={" 1%"}
        />
        {showInfo && (
          <>
            <InfoItem
              children1={
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Minimum received
                  <MyTooltip
                    text={
                      "Your transaction will revert if the price moves unfavorably by more than this percentage."
                    }
                  />
                </Box>
              }
              children2={"..."}
            />
            <InfoItem
              children1={
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Liquidity provider fee
                  <MyTooltip
                    text={
                      "Your transaction will revert if the price moves unfavorably by more than this percentage."
                    }
                  />
                </Box>
              }
              children2={"..."}
            />
            <InfoItem
              children1={
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Price impact
                  <MyTooltip
                    text={
                      "Your transaction will revert if the price moves unfavorably by more than this percentage."
                    }
                  />
                </Box>
              }
              children2={"..."}
            />
          </>
        )}
      </Box>
      <Divider sx={{ marginBottom: "15px" }} />
      <Box sx={{ cursor: "pointer" }} onClick={handleShowMoreInfo}>
        <Typography
          variant="body1"
          component={"p"}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "&:hover": {
              color: "primary.main",
            },
          }}
        >
          {showInfo ? (
            <>
              Less details
              <KeyboardArrowDownIcon color="primary" />
            </>
          ) : (
            <>
              More details
              <ArrowDropUpIcon color="primary" />
            </>
          )}
        </Typography>
      </Box>
    </Paper>
  );
};

export default Info;
