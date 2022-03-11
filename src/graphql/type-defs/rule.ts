import { gql } from "apollo-server-express";

export default gql`
  type Rules {
    id: Int
    name: String
    description: String
    status: String
    author: User
    createdAt: String
  }

  input RulesInput {
    name: String!
    description: String!
  }

  extend type Query {
    findAllRules: [Rules] @auth
  }

  extend type Mutation {
    createRule(rule: RulesInput): Rules @auth
  }
`;
