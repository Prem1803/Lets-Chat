import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddFriendDialog from "./AddFriendDialog";

const AddFriendButton = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenAddFriendDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseAddFriendDialog = () => {
    setIsDialogOpen(false);
  };

  return (
      <>
          <Button
              variant="contained"
              sx={{
                  color: "white",
                  textTransform: "uppercase",
                  fontSize: "16px",
                  fontFamily:"sans-serif",
                  fontWeight: "600",
                  margin: "20px 0px",
                  marginTop: "10px",
                  marginLeft: "10px",
                  width: "150px",
                  height: "30px",
                  zIndex: 100,
                  position: "absolute",
                  top: "0",
                  left: "0",
              }}
              onClick={handleOpenAddFriendDialog}
          >
              Add friend
          </Button>
          <AddFriendDialog
              isDialogOpen={isDialogOpen}
              closeDialogHandler={handleCloseAddFriendDialog}
          />
      </>
  );
};

export default AddFriendButton;
