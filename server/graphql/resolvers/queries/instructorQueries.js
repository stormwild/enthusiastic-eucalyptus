import { Instructor } from '../../../db/models/index';

export const instructors = async (parent, args, context, info) => {
  return await Instructor.find();
};

export default { instructors };
