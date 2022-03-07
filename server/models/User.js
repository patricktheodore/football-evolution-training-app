const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const statsSchema = require("./Stats");
const feedbackSchema = require('./Feedback');

const userSchema = new mongoose.Schema({
    first_name: { 
        type: String, 
        required: true,
        trim: true
    },
    last_name: { 
        type: String,
        required: true,
        trim: true 
    },
    date_of_birth: { 
        type: String,
    },
    is_coach: { 
        type: Boolean, 
        default: false 
    },
    email: { 
        type: String,
        required: true, 
        unique: true 
    },
    password: { 
        type: String,
        required: true,
        minlength: 8 
    },
    created_at: { 
        type: String, 
        default: Date.now 
    },
    preffered_position: {
        type: String,
        required: false,
        trim: true
    },
    preffered_foot: {
        type: String,
        required: true,
        trim: true
    },
    sessions: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Session'
        }
    ],
    stats: [statsSchema],
    feedback: [feedbackSchema]
});

// getter function to formate date. 

// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;