const mongoose = require('mongoose');
const { Schema } = mongoose;

const serviceTypeSchema = new Schema({
    serviceName: {
        type: String,
        required: true,
        trim: true
    },
    servicePrice: {
        type: Number,
        required: true,
        min: 0.99
    },
    // service duration in minutes
    serviceDuration: {
        type: Number,
        required: true,
        min: 0
    },
    serviceDescription: {
        type: String,
        trim: true
    },
    serviceCategory: {
        type: Schema.Types.ObjectId,
        ref: 'ServiceCategory',
        required: true
    },
    serviceUser: {
        type: Schema.Types.ObjectId,
        ref: 'ServiceUser',
        required: true
    }

});

const ServiceType = mongoose.model('ServiceType', serviceTypeSchema);

module.exports = ServiceType