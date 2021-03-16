
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
    Mutation: {
        async createUser (_, { input }, { models }) {
            // will need to hash passwords before creation
            return await models.User.create(input)
        },
        async createBill (_, { input }, { models }) {
            return await models.Bill.create(input)
        },
        async createBudget (_, { input }, { models }) {
            return await models.Budget.create(input)
        },
        async deleteBudget (_, { input }, { models }) {
            return await models.Budget.findByIdAndRemove({ _id: input.id })
        }
    },
    User: {

    },
    Budget: {

    }

}