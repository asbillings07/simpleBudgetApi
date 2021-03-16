
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { pay_enum } = require('../config')

const billSchema = new Schema(
    {
        name: { type: String, required: true },
        amount: { type: Number, required: true },
        frequency: { type: String, enum: pay_enum, required: true, default: 'weekly' },
        dueDate: { type: Date, required: true },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
    },
    {
        timestamps: true
    }
)

const Bill = mongoose.model('Bill', billSchema)

module.exports = Bill