import { gql } from 'apollo-server-express';

const instructor = gql`
  input InstructorInput {
    name: String!
    photo: String
    excerpt: String
    bio: String
  }

  input InstructorCourseIdsInput {
    instructorInput: InstructorInput
    courseIds: [ID!]!
  }

  input UpdateInstructorInput {
    _id: ID!
    instructorInput: InstructorInput
    courseIds: [ID!]!
  }

  type Instructor {
    _id: ID!
    name: String!
    photo: String
    excerpt: String
    bio: String
    courses: [Course!]!
  }

  extend type Query {
    instructors: [Instructor]
  }

  extend type Mutation {
    addInstructor(input: InstructorCourseIdsInput!): Instructor!
    updateInstructor(input: UpdateInstructorInput!): Instructor!
  }
`;

export default instructor;
