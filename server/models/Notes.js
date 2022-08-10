
const { Schema } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const notesSchema = new Schema(
  {
    notesBody: {
      type: String,
      required: true,
    },

    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    toJSON: {
      getters: true,
    },
  }
);


module.exports = notesSchema;
