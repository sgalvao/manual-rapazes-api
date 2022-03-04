import { gql } from "apollo-server-express";

export default gql`
  type Vote {
    id: ID!
    value: Boolean!
    rule: Rules!
    user: User!
  }

  input VoteInput {
    value: Boolean!
    ruleId: Int!
  }

  extend type Query {
    votes: [Vote]
  }

  extend type Mutation {
    createVote(input: VoteInput): Vote @auth
  }
`;
