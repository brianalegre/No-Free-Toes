const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Appointment = require("./Appointment");
const ServiceType = require("./ServiceType");
const { Schema } = mongoose;

const serviceUserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
  photo: {
    type: String,
    default:
      ".././assets/images/man.png",
  },
  bio: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    trim: true,
  },
  userType: {
    type: String,
    default: "serviceUser",
  },
  serviceCategory: {
    type: Schema.Types.ObjectId,
    ref: "ServiceCategory",
    required: true,
  },
  serviceType: [
    {
      type: Schema.Types.ObjectId,
      ref: "ServiceType",
    },
  ],
  timeSlots: [
    {
      type: Schema.Types.ObjectId,
      ref: "TimeSlot",
      unique: true,
    },
  ],
  appointments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Appointment",
    },
  ],
});

// set up pre-save middleware to create password
serviceUserSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
serviceUserSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const ServiceUser = mongoose.model("ServiceUser", serviceUserSchema);

module.exports = ServiceUser;
