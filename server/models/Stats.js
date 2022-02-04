const { Schema } = require('mongoose');

const statsSchema = new Schema({
    pace: {
        type: Number,
        min: 0,
        max: 99,
        default: 0
    },
    shooting: {
        type: Number,
        min: 0,
        max: 99,
        default: 0
    },
    passing: {
        type: Number,
        min: 0,
        max: 99,
        default: 0
    },
    dribbling: {
        type: Number,
        min: 0,
        max: 99,
        default: 0
    },
    defending: {
        type: Number,
        min: 0,
        max: 99,
        default: 0
    },
    physicality: {
        type: Number,
        min: 0,
        max: 99,
        default: 0
    },
    skills: {
        type: Number,
        min: 0,
        max: 99,
        default: 0
    },
    weak_foot_ability: {
        type: Number,
        min: 0,
        max: 99,
        default: 0
    },
    tactical: {
        type: Number,
        min: 0,
        max: 99,
        default: 0
    },
    psychological: {
        type: Number,
        min: 0,
        max: 99,
        default: 0
    },
});

module.exports = statsSchema;