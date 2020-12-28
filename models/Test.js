const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TestSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    uploader: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
    }, {
    timestamps: true
});

module.exports = Test = mongoose.model('tests', TestSchema);