const mongoose = require('mongoose')
const Schema = mongoose.Schema

const budgetSchema = new Schema(
    {
        type: { type: String, required: true },
        payFrequency: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
    },
    {
        timestamps: true
    }
)

const Budget = mongoose.model('User', budgetSchema)

module.exports = Budget