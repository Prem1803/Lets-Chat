const express = require("express");
const router = express.Router();

const { inviteFriend, acceptInvitation, rejectInvitation } = require("../controllers/friendInvitation.controller");

const Joi = require("joi");
const validator = require("express-joi-validation").createValidator({});
const requireAuth = require("../middlewares/requireAuth");

const invitationSchema = Joi.object({
    email: Joi.string().email().required(),
});


const approveInvitationSchema = Joi.object({
    invitationId: Joi.string().required(),
});


// invite a friend
router.post("/invite", requireAuth, validator.body(invitationSchema), inviteFriend);

// accept a friend invitation
router.post("/accept", requireAuth, validator.body(approveInvitationSchema) ,acceptInvitation);

// reject a friend invitation
router.post("/reject", requireAuth, validator.body(approveInvitationSchema) , rejectInvitation);

module.exports = router;
