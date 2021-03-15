
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const billSchema = new Schema(
    {
        name: { type: String, required: true },
        amount: { type: Number, required: true },
        frequency: { type: String, required: true, unique: true },
        dueDate: { type: Date, required: true },
    },
    {
        timestamps: true
    }
)

const Bill = mongoose.model('User', billSchema)

module.exports = Bill