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
    errors: {
        type: Number,
        required: true
    }
    }, {
    timestamps: true
});

module.exports = Test = mongoose.model('tests', TestSchema);