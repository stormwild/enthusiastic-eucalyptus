import { GraphQLScalarType } from 'graphql';
import Kind from 'graphql/language';
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
    courseCategories: async (parent, args, context, info) => {
      const CourseCategories = mongoose.model('CourseCategory');
      return await CourseCategories.find();
    },
    instructors: async (parent, args, context, info) => {
      const Instructor = mongoose.model('Instructor');
      return await Instructor.find();
    },
    courses: async (parent, args, context, info) => {
      const Course = mongoose.model('Course');
      return await Course.find().populate('category');
    },
  },
  Mutation: {
    addInstructor,
  },
  GraphQLDate,
};

const config = {
  typeDefs: schema,
  resolvers,
  formatError: error => {
    console.log(JSON.stringify(error));
    return error;
  },
};

export const configProvider = () => {
  return config;
};
