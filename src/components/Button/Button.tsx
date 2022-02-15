import { Button, SxProps, Theme } from "@mui/material";
import React, { ReactChild } from "react";
interface IProps {
  children: ReactChild;
  type: "primary" | "secondary";
  sx?: SxProps<Theme> | undefined;
  onClick?: () => void;
}
const MyButton = ({ children, type, sx, onClick, ...props }: IProps) => {
  const isPrimary = type === "primary";
  return (
    <Button
      {...props}
      onClick={onClick}
      variant="contained"
      sx={{
        ...sx,
        backgroundColor: isPrimary ? "primary.main" : "secondary.main",
        color: isPrimary ? "#fff" : "primary.main",
        padding: "0 0.8rem",

        "&:hover": {
          backgroundColor: "#0042fc",
          color: "#fff",
        },
      }}
    >
      {" "}
      {children}
    </Button>
  );
};

export default MyButton;
