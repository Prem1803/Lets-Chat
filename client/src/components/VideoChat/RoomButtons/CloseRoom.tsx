import React from "react";
import { useDispatch } from "react-redux";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useAppSelector } from "../../../store";
import { clearVideoChat } from "../../../actions/videoChatActions";
import { notifyChatLeft } from "../../../socket/socketConnection";

const CloseRoom = () => {
    const dispatch = useDispatch();
    const {
        videoChat: { otherUserId  },
    } = useAppSelector((state) => state);

    const handleLeaveRoom = () => {

        // notify other user that I left the call
        if (otherUserId) {
            notifyChatLeft(otherUserId);
        }

        dispatch<any>(clearVideoChat("You left the chat"));
    };

    return (
        <IconButton onClick={handleLeaveRoom} style={{ color: "white" }}>
            <CloseIcon />
        </IconButton>
    );
};

export default CloseRoom;
