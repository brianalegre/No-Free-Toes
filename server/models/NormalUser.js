const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Appointment = require('./Appointment')
const ServiceComment = require('./ServiceComment')
const { Schema } = mongoose;

const normalUserSchema = new Schema({
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
    password: {
        type: String,
        required: true,
        minLength: 8
    },
    location: {
        type: String,
        trim: true
    },
    appointments: [Appointment.schema],
    serviceComments: [ServiceComment.schema]

});

// set up pre-save middleware to create password
normalUserSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// compare the incoming password with the hashed password
normalUserSchema.methods.isCorrectPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

const NormalUser = mongoose.model('NormalUser', normalUserSchema);

module.exports = NormalUser;
