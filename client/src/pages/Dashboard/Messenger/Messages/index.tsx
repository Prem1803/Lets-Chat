import React, { useState, useEffect, useRef }  from "react";
import { styled } from "@mui/system";
import MessagesHeader from "./Header";
import Message from "./Message";
import { useAppSelector } from "../../../../store";
import { fetchDirectChatHistory } from "../../../../socket/socketConnection";
import { Message as MessageType } from "../../../../actions/types";
import DateSeparator from "./DateSeparator";
import { Typography } from "@mui/material";


const MainContainer = styled("div")({
    height: "calc(100% - 142px)",
    overflow: "auto",
    overflowX: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
});


const Messages = () => {
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const {chat, auth: {userDetails}} = useAppSelector((state) => state);

    const { chosenChatDetails: chatDetails, messages } = chat;

    const sameAuthor = (message: MessageType, index: number) => {

        if (index === 0) {
            return false;
        }
        return message.author._id === messages[index - 1].author._id;
    }

    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef?.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        setScrollPosition(e.currentTarget.scrollTop);
    };
    
    useEffect(() => {

        if (chatDetails) {
            fetchDirectChatHistory({receiverUserId: chatDetails.userId});
        }

    }, [chatDetails]);


    useEffect(() => {
        scrollToBottom();
    }, [messages]);


    return (
        <MainContainer onScroll={handleScroll}>
            <MessagesHeader scrollPosition={scrollPosition}/>

            <Typography
                sx={{
                    color: "#b9bbbe",
                    marginTop: "15px",
                    fontSize: "13px",
                }}
            >
                This is the beginning of your conversation with {chat.chosenChatDetails?.username.toUpperCase()}
            </Typography>

            {messages.map((message, index) => {
                const thisMessageDate = new Date(
                    message.createdAt
                ).toDateString();
                const prevMessageDate =
                    index > 0 &&
                    new Date(messages[index - 1]?.createdAt).toDateString();

                const isSameDay =
                    index > 0 ? thisMessageDate === prevMessageDate : true;

                const incomingMessage =
                    message.author._id === chatDetails?.userId;

                return (
                    <div key={message._id} style={{ width: "97%" }}>
                        {(!isSameDay || index === 0) && (
                            <DateSeparator date={message.createdAt} />
                        )}

                        <Message
                            content={message.content}
                            username={message.author.username}
                            sameAuthor={sameAuthor(message, index)}
                            date={message.createdAt}
                            incomingMessage={incomingMessage}
                        />
                    </div>
                );
            })}
            <div ref={messagesEndRef} />
        </MainContainer>
    );
};

export default Messages;
