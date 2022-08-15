const mongoose = require('mongoose');

const { Schema } = mongoose;

const serviceCommentSchema = new Schema({
    commentText: {
        type: String,
        required: true
    },
    commentCreated: {
        type: Date,
        required: true,
        default: Date.now
    },
    serviceRating: {
        type: Number,
        min: 0,
        max: 5,
        default: 0
    },
    normalUser: {
        type: Schema.Types.ObjectId,
        ref: 'NormalUser',
        required: true
    },
    serviceUser: {
        type: Schema.Types.ObjectId,
        ref: 'ServiceUser',
        required: true
    }
})

const ServiceComment = mongoose.model('ServiceComment', serviceCommentSchema);

module.exports = ServiceComment