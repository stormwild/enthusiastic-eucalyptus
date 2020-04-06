import { gql } from 'apollo-server-express';

const role = gql`
  type Role {
    _id: ID!
    name: String!
  }

  extend type Query {
    roles: [Role]
  }

  extend type Mutation {
    addRole(name: String): Role!
    updateRole(_id: ID!, name: String): Role
  }
`;

export default role;
