const mongoose = require("mongoose");
const { Schema } = mongoose;
const moment = require("moment");

const timeSlotSchema = new Schema({
  timeSlot: {
    type: Date,
    required: true,
    unique: true,
  },
  // serviceUser: {
  //   type: Schema.Types.ObjectId,
  //   ref: "ServiceUser",
  //   required: true,
  // },
  // serviceType: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "ServiceType",
  //     required: true,
  //   },
  // ],
});

const TimeSlot = mongoose.model("TimeSlot", timeSlotSchema);

module.exports = TimeSlot;
