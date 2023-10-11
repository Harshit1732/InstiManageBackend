const mongoose = require("mongoose");

const Exchange = mongoose.Schema(
  {
    Exchangenumber: {
      type: Number,
    },
    Name: {
      type: String,
    },
    openDate: {
      type: Date,
      default: new Date()
    },
    closeDate: {
      type: Date,
      default:null
    },
    modifiedDate: {
      type: Date,
      default:null
    },
    Balance: {
      type: String,
    },
    Status: {
      type: String,
      default:'New'
    },
  },
  {
    timestamp: true,
  }
);

const Exchangemodel= mongoose.model("Exchange", Exchange);

module.exports = {Exchangemodel};
