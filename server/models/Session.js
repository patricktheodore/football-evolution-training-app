const mongoose = require("mongoose");
const { Schema } = mongoose;

const sessionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    short_desc: {
        type: String,
        required: true,
        trim: true
    },
    long_desc: {
        type: String,
        required: true,
        trim: true
    },
    age_group: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: Date,
        required: true,
        trim: true
    },
    time: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
    players: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
});

const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;