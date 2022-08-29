const mongoose = require("mongoose");
const { Schema } = mongoose;
const moment = require("moment");

const timeSlotSchema = new Schema({
  timeSlot: {
    type: Date,
    required: true,
    unique: true,
  },
});

const TimeSlot = mongoose.model("TimeSlot", timeSlotSchema);

module.exports = TimeSlot;
