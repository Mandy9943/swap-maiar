import {
  Box,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";

const LogoWrapper = styled("svg")(({ theme }) => ({
  height: "2.2rem",
  width: "auto",
  marginRight: " 0.8rem",
  fill: theme.palette.text.primary,
  color: theme.palette.text.primary,
}));
const Image = styled("linearGradient")(({ theme, mode }) => ({
  fill:
    mode === "light" ? theme.palette.primary.main : theme.palette.text.primary,
  color:
    mode === "light" ? theme.palette.primary.main : theme.palette.text.primary,
}));

const Logo = () => {
  const theme = useTheme();
  const matchesXl = useMediaQuery(theme.breakpoints.up("xl"));
  const matchesMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <LogoWrapper
        xmlns="http://www.w3.org/2000/svg"
        width={matchesXl ? "131.114" : "44.981"}
        height="44.981"
        viewBox={matchesXl ? "0 0 131.114 44.981" : "0 0 44.981 44.981"}
      >
        <defs>
          <Image
            mode={theme.palette.mode}
            id="linear-gradient-logo"
            x1="0.5"
            x2="0.5"
            y2="1"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stopColor="currentColor"></stop>
            <stop offset="1" stopColor="currentColor"></stop>
          </Image>
        </defs>

        <g
          id="Group_1331"
          data-name="Group 1331"
          transform="translate(-47.168 -21.519)"
        >
          {matchesXl && (
            <g
              id="Group_419"
              data-name="Group 419"
              transform="translate(-208.583 -346.787)"
            >
              <path
                id="Path_126"
                data-name="Path 126"
                d="M454.338,426.547v9.92h-2.562v-9.92a4.347,4.347,0,0,0-4.527-4.654,4.453,4.453,0,0,0-4.557,4.749v9.825h-2.565v-9.825a4.544,4.544,0,1,0-9.081,0v9.825h-2.565V419.745h2.461l.021,1.567a6.2,6.2,0,0,1,4.639-1.886,6.352,6.352,0,0,1,5.847,3.175,6.65,6.65,0,0,1,5.8-3.175A6.8,6.8,0,0,1,454.338,426.547Z"
                transform="translate(-131.579 -34.004)"
                fill="currentColor"
              ></path>
              <path
                id="Path_127"
                data-name="Path 127"
                d="M539.16,420.028v2.337a7.782,7.782,0,0,0-5.926-2.529,8.585,8.585,0,0,0,0,17.168,7.769,7.769,0,0,0,5.926-2.594v2.34h2.562V420.028Zm-5.926,14.447A6.069,6.069,0,1,1,539.3,428.4,5.813,5.813,0,0,1,533.234,434.475Z"
                transform="translate(-198.28 -34.288)"
                fill="currentColor"
              ></path>
              <rect
                id="Rectangle_75"
                data-name="Rectangle 75"
                width="2.562"
                height="16.787"
                transform="translate(347.851 385.549)"
                fill="currentColor"
              ></rect>
              <path
                id="Path_128"
                data-name="Path 128"
                d="M596.448,401.065a1.759,1.759,0,1,1-1.759-1.744A1.7,1.7,0,0,1,596.448,401.065Z"
                transform="translate(-245.524 -20.073)"
                fill="currentColor"
              ></path>
              <path
                id="Path_129"
                data-name="Path 129"
                d="M629.421,420.028v2.337a7.791,7.791,0,0,0-5.926-2.529,8.584,8.584,0,0,0,0,17.168,7.768,7.768,0,0,0,5.926-2.594v2.34h2.562V420.028Zm-5.926,14.447a6.069,6.069,0,1,1,6.059-6.071A5.811,5.811,0,0,1,623.495,434.475Z"
                transform="translate(-260.819 -34.288)"
                fill="currentColor"
              ></path>
              <path
                id="Path_130"
                data-name="Path 130"
                d="M695.934,420.926l-1.186,2.157-.449-.277a4.546,4.546,0,0,0-2.411-.655A4.7,4.7,0,0,0,687.2,426.9v9.666h-2.565V419.842H687.1l.038,1.718a6.381,6.381,0,0,1,4.752-1.877c.044,0,.1,0,.162,0a6.63,6.63,0,0,1,3.471,1Z"
                transform="translate(-309.069 -34.18)"
                fill="currentColor"
              ></path>
            </g>
          )}
          <g
            id="Group_1321"
            data-name="Group 1321"
            transform="translate(-247.872 -130.693)"
          >
            <path
              id="Path_1838"
              data-name="Path 1838"
              d="M355.676,152.213l-3.832,17.8h-9.661Z"
              transform="translate(-40.089 0)"
              fillRule="evenodd"
              fill="url(#linear-gradient-logo)"
            ></path>
            <path
              id="Path_1839"
              data-name="Path 1839"
              d="M326.45,271.184l-7.053,9.379H295.04l7.054-9.379Z"
              transform="translate(0 -101.17)"
              fillRule="evenodd"
              fill="url(#linear-gradient-logo)"
            ></path>
            <path
              id="Path_1840"
              data-name="Path 1840"
              d="M381.139,333.864l-13.493,17.8,3.832-17.8Z"
              transform="translate(-61.742 -154.472)"
              fillRule="evenodd"
              fill="url(#linear-gradient-logo)"
            ></path>
          </g>
        </g>
      </LogoWrapper>
      {matchesMd && (
        <Typography
          sx={{
            color: "#667183",
            fontSize: "1.2rem",
            borderLeft: "1px solid #667183",
            paddingLeft: "0.6rem",
          }}
          component="div"
        >
          exchange
        </Typography>
      )}
    </Box>
  );
};

export default Logo;
