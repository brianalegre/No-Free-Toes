const mongoose = require('mongoose');
const { Schema } = mongoose;

const serviceCategorySchema = new Schema({
    categoryName: {
        type: String,
        required: true,
        trim: true
    },
    categoryIcon: {
        type: String
    }
});

const ServiceCategory = mongoose.model('ServiceCategory', serviceCategorySchema);

module.exports = ServiceCategory
