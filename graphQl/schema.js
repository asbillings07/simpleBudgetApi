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
    userId: ID!
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
    userId: ID!
    name: String!
    type: FrequencyType!
    salary: Int!
}

input BudgetInput {
    type: FrequencyType
    name: String
    salary: Int
}

input NewUserInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
}

input UserInput {
    firstName: String
    lastName: String
    email: String
}

# Types

type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    budgets: [Budget]!
}

type Bill {
    id: ID!
    userId: ID!
    name: String!
    amount: Int!
    frequency: FrequencyType!
    dueDate: String!
}

type Budget {
    id: ID!
    name: String
    userId: ID
    type: FrequencyType!
    salary: Int!
    bills: [Bill]!
}

type Query {
    users(input: UserInput!): [User]!
    bills(input: BillInput!): [Bill]!
    budgets(input: BudgetInput!): [Budget]!
}


type Mutation {
    createBill(input: NewBillInput!): Bill!
    createBudget(input: NewBudgetInput!): Budget!
    createUser(input: NewUserInput!): User!
    updateBill(input: BillInput!): Bill
    updateBudget(input: BudgetInput!): Budget!
    updateUser(input: UserInput!): User
    deleteBill(input: DeleteInput!): Bill
    deleteBudget(input: DeleteInput!): Budget
    deleteUser(input: DeleteInput!): User
}

`

module.exports = typeDefs