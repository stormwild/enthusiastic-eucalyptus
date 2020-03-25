import fs from 'fs';
import { GraphQLScalarType } from 'graphql';
import Kind from 'graphql/language';
import { ApolloServer } from 'apollo-server-express';
import instructors from './data/instructors.json';

const GraphQLDate = new GraphQLScalarType({
  name: 'GraphQLDate',
  description: 'A Date() type in GraphQL as a scalar',
  serialize(value) {
    return value.toISOString();
  },
  parseValue(value) {
    const dateValue = new Date(value);
    return isNaN(dateValue) ? undefined : dateValue;
  },
  parseLiteral(ast) {
    if (ast.kind == Kind.STRING) {
      const value = new Date(ast.value);
      return isNaN(value) ? undefined : value;
    }
  },
});

const addInstructor = (_, { instructor }) => {
  instructors.push(instructor);
  return instructor;
};

const resolvers = {
  Query: {
    instructors: () => instructors,
  },
  Mutation: {
    addInstructor,
  },
  GraphQLDate,
};

const server = new ApolloServer({
  typeDefs: fs.readFileSync('./server/schema/schema.gql', 'utf-8'),
  resolvers,
  formatError: error => {
    console.log(JSON.stringify(error));
    return error;
  },
});

export default server;
