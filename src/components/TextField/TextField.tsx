import {
  Box,
  FormHelperText,
  InputLabel,
  styled,
  Typography,
} from "@mui/material";
import { bgcolor } from "@mui/system";
import React, { ChangeEvent, useState } from "react";
import { currencies } from "../../lib/currencyData";
import { ICurrency } from "../../lib/types";
import SelectCurrency from "./commons/SelectCurrency/SelectCurrency";
interface IProps {
  label: string;
  id?: string;
  //   ListCripto?: string;
  selectedCripto: ICurrency;
}
const TextField = ({ label, id, selectedCripto }: IProps) => {
  const [value, setValue] = useState<string>();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <Box
      sx={{
        marginBottom: "10px",
      }}
    >
      <InputLabel shrink htmlFor={id}>
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
          }}
        >
          {label}
        </Typography>
      </InputLabel>
      <Box
        sx={{
          borderRadius: "0.45rem",
          border: "1px solid #cccccc",
          backgroundColor: "#f7f7f7",
          height: "4.25rem",
          fontSize: "1.4rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0.5rem 0.25rem 0.5rem 0rem",
        }}
      >
        <InputS
          type="number"
          placeholder="Amount"
          id={id}
          sx={{
            padding: value ? "0.35rem 0 1.5rem 1rem " : "1rem",
          }}
          onChange={handleChange}
        />
        <SelectCurrency selectedCurrency={selectedCripto} />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <FormHelperText error={true}>Required</FormHelperText>
        <Typography
          variant="body2"
          sx={{ color: "text.secondary", textAlign: "right" }}
        >
          Balance 0
        </Typography>
      </Box>
    </Box>
  );
};

export default TextField;

const InputS = styled("input")(({ theme }) => ({
  backgroundColor: "transparent",
  border: "none",
  outline: "none",
  width: "100%",
}));
