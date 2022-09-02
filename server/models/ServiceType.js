const mongoose = require("mongoose");
const { Schema } = mongoose;

const serviceTypeSchema = new Schema({
  serviceName: {
    type: String,
    required: true,
    trim: true,
  },
  servicePrice: {
    type: String,
    required: true,
  },
  // service duration in minutes
  serviceDuration: {
    type: Number,
    min: 0,
    default: 30,
  },
  serviceDescription: {
    type: String,
    trim: true,
  },
  serviceCategory: [
    {
      type: Schema.Types.ObjectId,
      ref: "ServiceCategory",
      required: true,
    },
  ],
});

const ServiceType = mongoose.model("ServiceType", serviceTypeSchema);

module.exports = ServiceType;
