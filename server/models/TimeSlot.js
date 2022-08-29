const mongoose = require("mongoose");
const { Schema } = mongoose;
<<<<<<< HEAD
// const moment = require("moment");

// ONE service user and an array of service types for each time slot
const timeSlotSchema = new Schema({
  timeSlot: {
    type: Date,
    required: true,
    unique: true,
  },
=======
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
>>>>>>> 0e70b0ed48e532eef0e661188fd5e69905c82308
  serviceUser: {
    type: Schema.Types.ObjectId,
    ref: "ServiceUser",
    required: true,
  },
<<<<<<< HEAD
  serviceType: [
    {
      type: Schema.Types.ObjectId,
      ref: "ServiceType",
      required: true,
    },
  ],
});

const TimeSlot = mongoose.model("TimeSlot", timeSlotSchema);

module.exports = TimeSlot;
=======
});

const ServiceComment = mongoose.model("TimeSlot", timeSlotSchema);

module.exports = ServiceComment;
>>>>>>> 0e70b0ed48e532eef0e661188fd5e69905c82308
