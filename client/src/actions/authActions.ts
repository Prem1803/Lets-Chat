import { Dispatch,  } from "redux";
import {login, register} from "../api/api";
import { LoginArgs, RegisterArgs } from "../api/types";
import { showAlert } from "./alertActions";
import {actionTypes} from "./types";


export const loginUser = (credentials: LoginArgs) => {
    return async (dispatch: Dispatch) => {
        const response = await login(credentials);

        if ("error" in response) {
            dispatch<any>({
                type: actionTypes.authError,
                payload: response.message
            })

            dispatch<any>(showAlert(response.message));
        } else {
            localStorage.setItem("currentUser", JSON.stringify(response.userDetails));
            dispatch<any>({
                type: actionTypes.authenticate,
                payload: response.userDetails
            })

            dispatch<any>(showAlert(`Hi, ${response.userDetails.username}`));
        }
    }
} 



export const registerUser = (credentials: RegisterArgs) => {
    return async (dispatch: Dispatch) => {
        const response = await register(credentials);

        if ("error" in response) {
            dispatch<any>({
                type: actionTypes.authError,
                payload: response.message,
            });

            dispatch<any>(showAlert(response.message));
        } else {
            localStorage.setItem(
                "currentUser",
                JSON.stringify(response.userDetails)
            );
            dispatch<any>({
                type: actionTypes.authenticate,
                payload: response.userDetails,
            });

            dispatch<any>(showAlert("Welcome to the Let's Chat!"));
        }
    };
}; 


export const autoLogin = () => {
    return async (dispatch: Dispatch) => {
        const currentUser = JSON.parse(
            localStorage.getItem("currentUser") || "{}"
        );

        if (currentUser.token) {
            dispatch<any>({
                type: actionTypes.authenticate,
                payload: currentUser,
            });
        }

    }
}


export const logoutUser = () => {
    return async (dispatch: Dispatch) => {
        localStorage.removeItem("currentUser");
        dispatch<any>({
            type: actionTypes.logout,
        });

        dispatch<any>({
            type: actionTypes.resetChat
        })
    }
}