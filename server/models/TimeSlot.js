const mongoose = require("mongoose");
const { Schema } = mongoose;
const moment = require("moment");

const timeSlotSchema = new Schema({
  timeSlot: {
    type: Date,
  },
  serviceType: [
    {
      type: Schema.Types.ObjectId,
      ref: "NormalUser",
      required: true,
    },
  ],
  serviceUser: {
    type: Schema.Types.ObjectId,
    ref: "ServiceUser",
    required: true,
  },
});

const ServiceComment = mongoose.model("TimeSlot", timeSlotSchema);

module.exports = ServiceComment;
