import { Box, Typography } from "@mui/material";
import React from "react";
import { ICurrency } from "../../../../lib/types";
import { CurrencyImg } from "../SelectCurrency/SelectCurrency";
interface IProps {
  currency: ICurrency;
}
const CurrencyItem = ({ currency }: IProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        padding: "10px",
        display: "flex",

        "&:hover": {
          bgcolor: "secondary.main",
        },
      }}
    >
      <Box
        sx={{
          borderRadius: "1.5rem",
          width: "3.25rem",
          height: "3.25rem",
          border: "1px solid #cccccc",
        }}
      >
        <CurrencyImg src={currency.img} alt={currency.acronym} />
      </Box>
      <Box
        sx={{
          flex: "1",
          marginLeft: "10px",
          minWidth: "120px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="body1">{currency.acronym}</Typography>
          <Typography variant="body1">{currency.count}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "13px",
          }}
        >
          <Typography variant="body2" fontSize="inherit">
            $ {currency.price}
          </Typography>
          <Typography variant="body2" fontSize="inherit">
            {currency.countPrice}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CurrencyItem;
