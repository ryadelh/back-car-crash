const mongoose = require('mongoose');

const peopleSchema = new mongoose.Schema(
  {
    name: {
        type: String,
        required: true,
      },
    phone: {
        type: String,
        unique: true,
    },
    address: {
        type: String,
    },
    relatives: {
        type: [String],
        default: []
    },
    picture: {
      type: String,
    },
    email: {
        type: String,
    },
  },
  {
    timestamps: true,
  }
);

const peopleModel = mongoose.model("people", peopleSchema);

module.exports = peopleModel;