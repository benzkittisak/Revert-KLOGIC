const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema(
  {
    name: {
        type:Object
    },
    gender: {
      type: String,
    },

    background: {
      dateOfBirth: {
        type: Date,
      },
      personID: {
        type: String,
      },
    },
    accountType: {
      type: String,
    },
    username: {
      type: String,
    },
    password: {
      type: String,
    },
    email: {
      type: String,
    },
  },
  {
    collection: "students",
  }
);

module.exports = mongoose.model("Student", studentSchema);
