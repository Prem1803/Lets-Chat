import React from "react";
import { styled } from "@mui/system";

const AvatarPreview = styled("div")({
    height: "42px",
    width: "42px",
    backgroundColor: "white",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
    fontWeight: "700",
    fontFamily:"sans-serif",
    marginLeft: "5px",
    color: "black",
});

const Avatar = ({ username, large }: {
    username: string,
    large?: boolean,
}) => {
    return (
        <AvatarPreview style={large ? { height: "80px", width: "80px" } : {}}>
            {username?.substring(0, 2).toUpperCase()}
        </AvatarPreview>
    );
};

export default Avatar;
