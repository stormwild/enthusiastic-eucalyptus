import mongoose, { Schema } from 'mongoose';
import instructors from '../../data/instructors.json';

const initInstructors = () => {
  let instructorsSchema = Schema({
    name: String,
    photo: String,
    excerpt: String,
    bio: String,
  });

  const Instructor = mongoose.model('Instructor', instructorsSchema, 'Instructors');
  Instructor.countDocuments((err, count) => {
    if (count == 0) {
      Instructor.collection.insertMany(instructors, () => console.log('Instructors initialized'));
    }
  });
};

export default initInstructors;
