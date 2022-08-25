const mongoose = require("mongoose");

const { Schema } = mongoose;

const appointmentSchema = new Schema({
  appointmentDate: {
    type: Date,
    required: true,
  },
  appointmentTime: {
    type: Date,
    required: true,
  },
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
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;
