const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AttemptSchema = new Schema({
    test: {
        type: Schema.Types.ObjectId,
        ref: 'tests'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    time: {
        type: Number,
        required: true
    },
    wpm: {
        type: Number,
        required: true
    },
    typos: {
        type: Number,
        required: true
    },
    accuracy: {
        type: Number,
        required: true
    },
    placeholder: {
        type: Number,
    }
    }, {
    timestamps: true
});

module.exports = Attempt = mongoose.model('attempts', AttemptSchema);