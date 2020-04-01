import mongoose, { Schema } from 'mongoose';
import { ObjectId } from 'mongodb';

export const instructorSchema = Schema({
  name: { type: String, required: true, unique: true, index: true },
  photo: String,
  excerpt: String,
  bio: String,
  courses: [{ type: ObjectId, ref: 'Course' }],
});

const Instructor = mongoose.model('Instructor', instructorSchema, 'Instructors');

export default Instructor;
