const mongoose = require('mongoose');
const { Schema } = mongoose;
const ServiceType = require('./ServiceType')

const serviceCategorySchema = new Schema ({
    categoryName: {
        type: String,
        required: true,
        trim: true
    },
    serviceType: [ServiceType.schema]
});

const ServiceCategory = mongoose.model('ServiceCategory', serviceCategorySchema);

module.exports = ServiceCategory
