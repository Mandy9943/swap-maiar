import { styled, tooltipClasses, TooltipProps, Tooltip } from "@mui/material";
import React, { ReactChild, ReactElement } from "react";
import InfoIcon from "@mui/icons-material/Info";
interface IProps {
  children?: ReactElement;
  text: ReactChild;
}

const MyTooltip = ({ children, text }: IProps) => {
  return (
    <Tooltip arrow title={text} placement="top">
      {children || (
        <InfoIcon
          fontSize="small"
          sx={{
            marginLeft: "5px",
          }}
        />
      )}
    </Tooltip>
  );
};

export default MyTooltip;
