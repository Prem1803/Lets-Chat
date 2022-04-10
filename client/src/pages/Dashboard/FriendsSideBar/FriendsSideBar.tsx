import React from "react";
import { styled } from "@mui/system";
import AddFriendButton from "./AddFriendButton";
import FriendsTitle from "./FriendsTitle";
import FriendsList from "./FriendsList/FriendsList";
import PendingInvitationsList from "./PendingInvitationsList/PendingInvitationsList";

const MainContainer = styled("div")({
  width: "224px",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#3b7584",
  borderRight: "5px solid white",
});

const FriendsSideBar = () => {
  return (
      <MainContainer sx={{ width: { xs: "30%", sm: "224px" } }}>
          <AddFriendButton />
          <FriendsTitle title="Private Messages" />
          <FriendsList />
          <FriendsTitle title="Invitations" />
          <PendingInvitationsList />
      </MainContainer>
  );
};

export default FriendsSideBar;
