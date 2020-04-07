import { gql } from 'apollo-server-express';

const courseSchedule = gql`
  input AddCourseScheduleInput {
    courseId: ID!
    dates: [GraphQLDate]
  }

  input UpdateCourseScheduleInput {
    _id: ID!
    courseId: ID!
    dates: [GraphQLDate]
  }

  type CourseSchedule {
    _id: ID!
    course: Course!
    dates: [GraphQLDate]
  }

  extend type Query {
    courseSchedules: [CourseSchedule!]!
  }

  extend type Mutation {
    addCourseSchedule(input: AddCourseScheduleInput): CourseSchedule!
    updteCourseSchedule(input: UpdateCourseScheduleInput): CourseSchedule!
  }
`;

export default courseSchedule;
