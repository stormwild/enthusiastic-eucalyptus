import { gql } from 'apollo-server-express';

const root = gql`
  type Query {
    root: String
  }

  type Mutation {
    addRoot(value: String!): String
  }
`;

export default root;
