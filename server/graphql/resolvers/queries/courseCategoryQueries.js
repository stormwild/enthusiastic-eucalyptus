import { CourseCategory } from '../../../db/models/index';

export const courseCategories = async (parent, args, context, info) => {
  return await CourseCategory.find();
};

export const courseCategory = async (parent, args, context, info) => {
  const { id } = args;
  return await CourseCategory.findById(id);
};

export default { courseCategories, courseCategory };
