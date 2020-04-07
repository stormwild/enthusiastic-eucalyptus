import { CourseCategory, Instructor, Course } from '../../../db/models/index';
import { getRootValueHolder } from '../rootValueHolder';

const queries = {
  root: () => getRootValueHolder(),
  courseCategories: async (parent, args, context, info) => {
    return await CourseCategory.find();
  },
  instructors: async (parent, args, context, info) => {
    return await Instructor.find();
  },
  courses: async (parent, args, context, info) => {
    return await Course.find().populate('category');
  },
};

export default queries;
