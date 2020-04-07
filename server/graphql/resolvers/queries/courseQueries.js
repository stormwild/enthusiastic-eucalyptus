import { Course } from '../../../db/models/index';

export const courses = async (parent, args, context, info) => {
  return await Course.find().populate('category');
};

export default { courses };
