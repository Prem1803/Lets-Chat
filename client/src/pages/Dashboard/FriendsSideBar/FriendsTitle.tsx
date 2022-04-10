import React from "react";
import { Typography } from "@mui/material";

const FriendsTitle = ({ title }: {title: string}) => {
  return (
    <Typography
      sx={{
        textTransform: "uppercase",
        color: "white",
        fontSize: "16px",
        fontWeight:"600",
        marginTop: "60px",
        textDecoration:"underline"
      }}
    >
      {title}
    </Typography>
  );
};

export default FriendsTitle;
