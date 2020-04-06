import { gql } from 'apollo-server-express';

const course = gql`
  input CourseInput {
    title: String!
    description: String!
    instructors: [ID!]!
    fee: Float
    category: ID
  }

  type Course {
    _id: ID!
    title: String!
    description: String!
    instructors: [Instructor!]!
    fee: Float
    category: CourseCategory!
  }

  extend type Query {
    courses: [Course]
  }

  extend type Mutation {
    addCourse(course: CourseInput!): Course!
    updateCourse(_id: ID!, course: CourseInput!): Course!
  }
`;

export default course;
