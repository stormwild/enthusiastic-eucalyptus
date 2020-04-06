import { gql } from 'apollo-server-express';

const user = gql`
  input UserInput {
    username: String
    password: String
    email: String
  }

  type User {
    _id: ID!
    username: String!
    password: String!
    email: String!
    roles: [Role!]!
  }

  extend type Query {
    users: [User]
  }

  extend type Mutation {
    addUser(user: UserInput!): User!
    updateUser(_id: ID!, user: UserInput!): User!
  }
`;

export default user;
