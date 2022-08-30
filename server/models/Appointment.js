const mongoose = require("mongoose");

const { Schema } = mongoose;

const appointmentSchema = new Schema({
  normalUser: {
    type: Schema.Types.ObjectId,
    ref: "NormalUser",
    required: true,
  },
  serviceUser: {
    type: Schema.Types.ObjectId,
    ref: "ServiceUser",
    required: true,
  },
  timeSlots: {
    type: Schema.Types.ObjectId,
    ref: "TimeSlot",
    required: true,
  },
  serviceType: {
    type: Schema.Types.ObjectId,
    ref: "ServiceType",
    required: true,
  }
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;
