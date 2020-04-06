import { gql } from 'apollo-server-express';

const instructor = gql`
  input InstructorInput {
    name: String!
    photo: String
    excerpt: String
    bio: String
    courses: [ID!]!
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
    addInstructor(instructor: InstructorInput!): Instructor!
    updateInstructor(_id: ID!, instructor: InstructorInput!): Instructor!
  }
`;

export default instructor;
