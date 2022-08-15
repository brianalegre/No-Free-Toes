const mongoose = require('mongoose');
const { Schema } = mongoose;

const serviceTypeSchema = new Schema({
    serviceName: {
        type: String,
        required: true,
        trim: true
    },
    serviceCategory: {
            type: Schema.Types.ObjectId,
            ref: 'ServiceCategory',
            required: true
        }
    
});

const ServiceType = mongoose.model('ServiceType', serviceTypeSchema);

module.exports = ServiceType