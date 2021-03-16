const { models } = require('mongoose')

module.exports = {
    Query: {
        users (_, { input }, { models }) {
            return models.User.find(input)
        },
        bills (_, { input }, { models }) {
            return models.Bill.find(input)
        },
        budgets (_, { input }, { models }) {
            return models.Budget.find(input)
        }
    },
    // Mutation: {

    // }
}