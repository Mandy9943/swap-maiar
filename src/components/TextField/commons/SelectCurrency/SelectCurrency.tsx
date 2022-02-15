import { Box, Paper, styled, Typography } from "@mui/material";
import React, { useState } from "react";
import { Colors } from "../../../../lib/colors";
import { ICurrency } from "../../../../lib/types";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { currencies } from "../../../../lib/currencyData";
import CurrencyItem from "../CurrencyItem/CurrencyItem";
import useOnclickOutside from "react-cool-onclickoutside";

interface IProps {
  selectedCurrency: ICurrency;
}

const SelectCurrency = ({ selectedCurrency }: IProps) => {
  const [openMenu, setOpenMenu] = useState(false);
  const ref = useOnclickOutside(() => {
    setOpenMenu(false);
  });

  const handleClickBtn = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <Box
      sx={{
        borderRadius: "1.5rem 0.45rem 0.45rem 1.5rem",
        border: "1px solid " + Colors.primary,
        padding: "2px 10px 2px 2px",
        display: "flex",
        cursor: "pointer",
        position: "relative",
        backgroundColor: "background.default",
      }}
      ref={ref}
      onClick={handleClickBtn}
    >
      <Box
        sx={{
          borderRadius: "1.5rem",
          width: "3.25rem",
          height: "3.25rem",
          border: "1px solid #cccccc",
          display: {
            xs: "none",
            md: "block",
          },
        }}
      >
        <CurrencyImg
          src={selectedCurrency.img}
          alt={selectedCurrency.acronym}
        />
      </Box>
      <Box
        sx={{
          flex: "1",
          marginLeft: "15px",
          display: "flex",
          minWidth: "100px",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography variant="body1">{selectedCurrency.acronym}</Typography>
          <Typography variant="body2">$ {selectedCurrency.price}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <KeyboardArrowDownIcon color="primary" />
        </Box>
      </Box>
      {openMenu && (
        <Paper
          ref={ref}
          elevation={3}
          sx={{
            position: "absolute",
            top: "60px",
            right: "0",
            borderRadius: "0.45rem",
            zIndex: "99",
          }}
        >
          {currencies.map((c, i) => {
            return <CurrencyItem currency={c} key={i} />;
          })}
        </Paper>
      )}
    </Box>
  );
};

export default SelectCurrency;

export const CurrencyImg = styled("img")(() => ({
  width: "100%",
  height: "100%",
}));
