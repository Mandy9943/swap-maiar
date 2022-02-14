import { Box } from "@mui/material";
import React from "react";
import { Colors } from "../../lib/colors";
interface IProps {
  text: string;
  color: "primary" | "success" | "warning";
}
const Block = ({ text, color }: IProps) => {
  return (
    <Box
      sx={{
        padding: "10px",
        border: "1px solid" + Colors[color],
        borderLeft: "0.4rem solid " + Colors[color],
        display: "inline",
        borderRadius: "0.45rem",
        marginLeft: "1rem",
        fontSize: "12.8px",
        color: Colors[color],
      }}
    >
      {text}
    </Box>
  );
};

export default Block;
