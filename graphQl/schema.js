const { gql } = require('apollo-server')


const typeDefs = gql`

enum FrequencyType {
    Weekly
    BiWeekly
    SemiMonthly
    Monthly
}

# Inputs

input NewBillInput {
    name: String!
    amount: Int!
    frequency: FrequencyType!
    dueDate: String!
}

input DeleteInput {
    id: ID!
}

input BillInput {
    name: String
    amount: Int
    frequency: FrequencyType
    dueDate: String
}

input NewBudgetInput {
    type: String!
    salary: Int!
}

input BudgetInput {
    type: String
    salary: Int
}

input NewUserInput {
    firstName: String!
    lastName: String!
    email: String!
    payFrequency: FrequencyType!
}

input UserInput {
    firstName: String
    lastName: String
    email: String
    payFrequency: FrequencyType
}

# Types

type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    payFrequency: FrequencyType!
}

type Bill {
    id: ID!
    name: String!
    amount: Int!
    frequency: FrequencyType!
    dueDate: String!
}

type Budget {
    id: ID!
    type: String!
    salary: Int!
}

type Query {
    users(input: UserInput): [User]!
    bills(input: BillInput): [Bill]!
    budgets(input: BudgetInput): [Budget]!
}


type Mutation {
    createBill(input: NewBillInput!): Bill!
    createBudget(input: NewBudgetInput!): Budget!
    createUser(input: NewUserInput!): User!
    updateBill(input: BillInput): Bill
    updateBudget(input: BudgetInput): Budget!
    updateUser(input: UserInput): User
    deleteBill(input: DeleteInput): Bill
    deleteBudget(input: DeleteInput): Budget
    deleteUser(input: DeleteInput): User
}

`

module.exports = typeDefs