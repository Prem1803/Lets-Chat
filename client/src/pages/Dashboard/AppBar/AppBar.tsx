import React from "react";
import { styled } from "@mui/system";
import MenuItems from "./MenuItems";

const MainContainer = styled("div")({
  position: "absolute",
  right: "0",
  top: "0",
  height: "48px",
  borderBottom: "5px solid white",
  backgroundColor: "#3b7584",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: "0 15px",
});


const AppBar = () => {
  return (
      <MainContainer >
        <MenuItems />
      </MainContainer>
  );
};

export default AppBar;
