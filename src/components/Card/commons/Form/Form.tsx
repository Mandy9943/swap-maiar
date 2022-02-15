import {
  Box,
  Checkbox,
  Fab,
  FormControlLabel,
  Typography,
} from "@mui/material";
import React from "react";
import { currencies } from "../../../../lib/currencyData";
import TextField from "../../../TextField/TextField";
import Wrapper from "../Wrapper/Wrapper";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import BoltIcon from "@mui/icons-material/Bolt";
import Info from "../InfoItem/InfoItem";
import MyTooltip from "../../../Tooltip/Tooltip";
import MyButton from "../../../Button/Button";
const Form = () => {
  return (
    <Wrapper>
      <Box
        sx={{
          marginTop: "15px",
        }}
      >
        <TextField label="Swap From:" selectedCripto={currencies[0]} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "10px",
          }}
        >
          <Fab
            variant="circular"
            size="small"
            color="primary"
            sx={{
              backgroundColor: "white",
              color: "primary.main",
              "&:hover": {
                bgcolor: "secondary.main",
              },
            }}
          >
            <ArrowDownwardIcon />
          </Fab>
        </Box>
        <TextField label="Swap To (Est.):" selectedCripto={currencies[2]} />
        <FormControlLabel
          control={<Checkbox defaultChecked size="small" />}
          label={
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              Skip unwrap WEGLD{" "}
              <MyTooltip
                text={
                  <ul>
                    <li>
                      Wrapped EGLD (WEGLD) is used for swaps &amp; adding
                      liquidity.
                    </li>
                    <li>Value: 1 WEGLD = 1 EGLD</li>
                    <li>
                      If you choose to skip unwrap WEGLD, you can reduce gas
                      costs &amp; transaction times.
                    </li>
                    <li>You can't pay fees with WEGLD.</li>
                    <li>
                      You can unwrap WEGLD (WEGLD -&gt; EGLD) at any time from
                      the Account Details menu.
                    </li>
                  </ul>
                }
              />
            </Box>
          }
        />
        <Info />
        <Box
          sx={{
            marginBottom: "15px",
          }}
        >
          <MyButton
            type="primary"
            sx={{
              width: "100%",
            }}
          >
            <>
              <BoltIcon
                fontSize="small"
                color="inherit"
                sx={{
                  marginRight: "10px",
                }}
              />

              <Typography
                variant="body1"
                color="inherit"
                sx={{ textTransform: "none" }}
              >
                Connect
              </Typography>
            </>
          </MyButton>
        </Box>
        <Typography
          variant="body1"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          You will be asked to sign <strong>2 transactions</strong>{" "}
          <MyTooltip
            text={
              <ul>
                <li>1st - Swap</li>
                <li>2nd - Unwrap WEGLD</li>
              </ul>
            }
          />
        </Typography>
      </Box>
    </Wrapper>
  );
};

export default Form;
