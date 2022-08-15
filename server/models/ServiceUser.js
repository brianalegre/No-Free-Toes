const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Appointment = require('./Appointment')
const ServiceCategory = require('./ServiceCategory')
const ServiceType = require('./ServiceType')
const ServiceListing = require('./ServiceListing')
const { Schema } = mongoose;

const serviceUserSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    photo: {
        type: String,
    },
    bio: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    },
    location: {
        type: String,
        trim: true
    },
    serviceCategory: [ServiceCategory.schema],
    serviceType: [ServiceType.schema],
    serviceListing: [ServiceListing.schema],
    appointments: [Appointment.schema],
});

// set up pre-save middleware to create password
serviceUserSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// compare the incoming password with the hashed password
serviceUserSchema.methods.isCorrectPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

const ServiceUser = mongoose.model('ServiceUser', serviceUserSchema);

module.exports = ServiceUser;
