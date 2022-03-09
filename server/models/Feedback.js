const { Schema } = require('mongoose');

const feedbackSchema = new Schema ({
    body: {
        type: String,
        trim: true
    }, 
    coach: {
        type: String,
        trim: true
    },
    sessionDate: {
        type: String,
        trim: true
    },
    session: {
        type: String,
        trim: true
    },
    feedbackDate: {
        type: Number,
        default: Date.now
    }
});



module.exports = feedbackSchema;