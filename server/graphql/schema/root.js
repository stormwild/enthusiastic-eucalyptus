import { gql } from 'apollo-server-express';

const root = gql`
  type Query {
    root: String
  }

  type Mutation {
    updateRoot(input: String!): String
  }
`;

export default root;
