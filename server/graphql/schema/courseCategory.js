import { gql } from 'apollo-server-express';

const courseCategory = gql`
  type CourseCategory {
    _id: ID!
    name: String!
  }

  extend type Query {
    courseCategories: [CourseCategory]
    courseCategory(id: ID!): CourseCategory
  }

  extend type Mutation {
    addCourseCategory(name: String!): CourseCategory!
    updateCoureCategory(_id: ID!, name: String!): CourseCategory!
  }
`;

export default courseCategory;
