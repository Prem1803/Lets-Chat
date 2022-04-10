import React from "react";
import { useDispatch } from "react-redux";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { rejectInvitation, acceptInvitation } from "../../../../actions/friendActions";



const InvitationDecisionButtons = ({color, invitationId} : {color? : string, invitationId: string}) => {
  const dispatch = useDispatch();
  
  return (
      <Box sx={{ display: "flex" }}>
          <IconButton
              style={{ color: color ? color : "#00ff00" ,fontSize:"16px"}}
              onClick={() => {
                  dispatch<any>(acceptInvitation(invitationId));
              }}
          >
              <CheckIcon />
          </IconButton>
          <IconButton
              style={{ color: color ? color : "#f44646",fontSize:"16px" }}
              onClick={() => {
                  dispatch<any>(rejectInvitation(invitationId));
              }}
          >
              <ClearIcon />
          </IconButton>
      </Box>
  );
};

export default InvitationDecisionButtons;
