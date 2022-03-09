import { gql } from "apollo-server-express";

export default gql`
  type User {
    id: Int
    name: String
    email: String
    avatar: Avatar
  }

  input UserInput {
    name: String!
    email: String!
    password: String!
    avatarId: Int!
  }

  type UserResult {
    id: Int
    name: String
    avatar: Avatar
    avatarId: Int
    email: String
    token: String
  }

  extend type Query {
    login(email: String!, password: String!): UserResult
    loadUser: UserResult @auth
  }

  extend type Mutation {
    createUser(user: UserInput): User
  }
`;
