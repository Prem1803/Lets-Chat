const mongoose = require("mongoose");
const { decrypt } = require("../utils/crypto");

const messageSchema = new mongoose.Schema(
  {
    // sender of the message
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    content: {
      type: String,
      required: [true, "can't be blank"],
    },
    contentiv: {
      type: String,
    },

    type: {
      type: String,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  }
);
messageSchema.methods.toJSON = function () {
  const message = this;
  const messageObject = message.toObject();
  messageObject.content = decrypt(
    messageObject.content,
    messageObject.contentiv
  );
  return messageObject;
};
module.exports = mongoose.model("Message", messageSchema);
