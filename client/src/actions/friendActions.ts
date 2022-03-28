import { Dispatch } from "redux";
import { acceptFriendRequest, inviteFriendRequest, rejectFriendRequest } from "../api/api";
import { showAlert } from "./alertActions";
import { actionTypes, PendingInvitation, Friend, OnlineUser } from "./types";


export const inviteFriend = (email: string, closeDialogHandler: () => void) => {
    return async (dispatch: Dispatch) => {
        const response = await inviteFriendRequest({ email });

        if (response === "Invitation has been sent successfully") {
            closeDialogHandler();
            dispatch<any>(showAlert(response));
        } else {
            dispatch<any>(showAlert(response.message));
        }
    };
};


export const setPendingInvitations = (pendingInvitations: PendingInvitation[]) => {
    return {
        type: actionTypes.setPendingInvitations,
        payload: pendingInvitations,
    };
}



export const setFriends = (
    friends: Friend[]
) => {
    return {
        type: actionTypes.setFriends,
        payload: friends,
    };
};


export const setOnlineUsers = (
    onlineUsers: OnlineUser[]
) => {
    return {
        type: actionTypes.setOnlineUsers,
        payload: onlineUsers,
    };
};


export const rejectInvitation = (invitationId: string) => {
    return async (dispatch: Dispatch) => {
        const response = await rejectFriendRequest(invitationId);

        if (response === "Invitation rejected successfully!") {;
            dispatch<any>(showAlert(response));
        } else {
            dispatch<any>(showAlert(response.message));
        }
    };
};


export const acceptInvitation = (invitationId: string) => {
    return async (dispatch: Dispatch) => {
        const response = await acceptFriendRequest(invitationId);

        if (response === "Invitation accepted successfully!") {
            dispatch<any>(showAlert(response));
        } else {
            dispatch<any>(showAlert(response.message));
        }
    };
};