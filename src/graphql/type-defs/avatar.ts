import { gql } from "apollo-server-express";

export default gql`
  type Avatar {
    id: Int
    url: String
  }

  extend type Query {
    loadAvatar(id: Int!): Avatar
    getAvatarList: [Avatar]
  }
`;
