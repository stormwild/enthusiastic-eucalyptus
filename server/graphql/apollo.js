import fs from 'fs';
import { GraphQLScalarType } from 'graphql';
import Kind from 'graphql/language';
import { ApolloServer } from 'apollo-server-express';
import schema from './schema/schema.gql';
import mongoose from 'mongoose';

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
    instructors: () => {
      const Instructor = mongoose.model('Instructor');
      return Instructor.find();
    },
    courseCategories: () => {
      const CourseCategories = mongoose.model('CourseCategory');
      return CourseCategories.find();
    },
  },
  Mutation: {
    addInstructor,
  },
  GraphQLDate,
};

// fs.readFileSync('./schema/schema.gql', 'utf-8')
const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  formatError: error => {
    console.log(JSON.stringify(error));
    return error;
  },
});

export default server;
