// import { Dispatch } from "redux";
import { actionTypes, SetChosenChatDetails, SetMessages, Message, SetTyping } from "./types";

export const setChosenChatDetails = (chatDetails: {
    userId: string;
    username: string;
}): SetChosenChatDetails => {
    return {
        type: actionTypes.setChosenChatDetails,
        payload: chatDetails,
    };
};


export const setMessages = (messages: Array<Message>): SetMessages => {
    return {
        type: actionTypes.setMessages,
        payload: messages,
    };
};


export const setTyping = (typing: {userId: string, typing: boolean}): SetTyping => {
    return {
        type: actionTypes.setTyping,
        payload: typing
    };
};