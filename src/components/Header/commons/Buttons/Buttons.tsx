import {
  Box,
  Button,
  Paper,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import logoBolt from "../../../../assets/images/logoBolt.svg";
import NightlightIcon from "@mui/icons-material/Nightlight";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import BoltIcon from "@mui/icons-material/Bolt";
const Buttons = () => {
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Typography variant="body2" component={"div"}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <BoxS sx={{ display: "flex", alignItems: "center" }}>
          <Paper
            sx={{
              border: "1px solid rgb(31,32,33,0.3)",
              borderRadius: "50%",
              height: "30px",
              width: "30px",
              marginRight: "8px",
              cursor: "pointer",
            }}
            elevation={4}
          >
            <img src={logoBolt} alt="" width={30} height={30} />
          </Paper>
          <Typography variant="body2">0.000524</Typography>
        </BoxS>
        <BoxS>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "secondary.main",
              color: "primary.main",
              "&:hover": {
                color: "#fff",
              },
            }}
          >
            <NightlightIcon fontSize="inherit" color="inherit" />
          </Button>
        </BoxS>
        <BoxS>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "secondary.main",
              color: "primary.main",
              "&:hover": {
                color: "#fff",
              },
            }}
          >
            <MoreHorizIcon fontSize="medium" color="inherit" />
          </Button>
        </BoxS>
        <BoxS>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "primary.main",
              color: "#fff",
              padding: "0 0.8rem",

              "&:hover": {
                backgroundColor: "#0042fc",
              },
            }}
          >
            <BoltIcon
              fontSize="inherit"
              color="inherit"
              sx={{
                marginRight: matchesMd ? "0.5rem" : "0",
              }}
            />
            {matchesMd && (
              <Typography variant="body2" sx={{ textTransform: "none" }}>
                Connect
              </Typography>
            )}
          </Button>
        </BoxS>
      </Box>
    </Typography>
  );
};

export default Buttons;

const BoxS = styled(Box)`
  margin-right: 10px;
`;
