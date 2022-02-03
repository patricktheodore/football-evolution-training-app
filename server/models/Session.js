const mongoose = require("mongoose");
const { Schema } = mongoose;

const sessionSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true
    },
    short_desc: {
        type: String,
        trim: true
    },
    long_desc: {
        type: String,
        trim: true
    },
    min_age: {
        type: Number,
        trim: true
    },
    max_age: {
        type: Number,
        trim: true
    },
    date: {
        type: Date,
        trim: true
    },
    time: {
        type: String,
        trim: true
    },
    location: {
        type: String,
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