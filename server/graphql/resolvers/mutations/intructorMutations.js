import { Instructor } from '../../../db/models/index';

export const addInstructor = async (_, { input }) => {
  const { instructorInput, courseIds } = input;
  instructorInput.courses = courseIds;
  const instructor = new Instructor(instructorInput);
  await instructor.save();
  return await Instructor.findById(instructor._id).populate('courses').exec();
};

export const updateInstructor = async (_, { input }) => {
  const { _id, instructorInput, courseIds } = input;
  instructorInput.courses = courseIds;
  await Instructor.findByIdAndUpdate({ _id }, instructorInput, {
    useFindAndModify: false,
  }).exec();
  return await Instructor.findById({ _id }).populate('courses').exec();
};

export default { addInstructor, updateInstructor };
