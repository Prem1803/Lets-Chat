import React from "react";
import { useDispatch } from "react-redux";
import { IconButton } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { logoutUser } from "../../../actions/authActions";
import { useAppSelector } from "../../../store";
import Avatar from "../../../components/Avatar";

export default function BasicMenu() {
    const dispatch = useDispatch();
    const userDetails = useAppSelector(state => state.auth.userDetails)

    const handleClick = () => {
        dispatch<any>(logoutUser());
    }


    return (
        <>
        <IconButton
                onClick={handleClick}
                style={{ color: "white", marginLeft: "20px" }}
            >
                <LogoutIcon />
            </IconButton>
            <Avatar username={"token" in userDetails && userDetails.username?userDetails.username:"" }/>
            
        </>
    );
}
