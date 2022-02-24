import { gql } from "apollo-server-express";

export default gql`
  type Rules {
    id: Int
    name: String
    description: String
    status: String
    author: User
  }

  input RulesInput {
    name: String!
    description: String!
    authorId: Int!
  }

  extend type Query {
    findAllRules: [Rules] @auth
  }

  extend type Mutation {
    createRule(rule: RulesInput): Rules @auth
  }
`;
