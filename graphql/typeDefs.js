const { gql } = require("apollo-server");

const typeDefs = gql`
  input PaymentInput {
    amount: Float!
    id: ID!
  }
  type Query {
    queryRoot: String
  }
  type Mutation {
    processPayment(input: PaymentInput): String!
  }
`;

module.exports = typeDefs;
