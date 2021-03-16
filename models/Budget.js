const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { pay_enum } = require('../config')

const budgetSchema = new Schema(
    {
        name: { type: String, required: true },
        type: { type: String, enum: pay_enum, required: true, default: 'weekly' },
        salary: { type: Number, required: true },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',

        },
    },
    {
        timestamps: true
    }
)

const Budget = mongoose.model('Budget', budgetSchema)

module.exports = Budget