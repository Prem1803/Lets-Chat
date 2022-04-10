import React from "react";
import { Box } from "@mui/material";
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
const OnlineIndicator = () => {
  return (
    <Box
      sx={{
        color: "#00ff00",
        display: "flex",
        alignItems: "center",
        position: "absolute",
        right: "5px",
      }}
    >
      <RadioButtonCheckedIcon />
    </Box>
  );
};

export default OnlineIndicator;
