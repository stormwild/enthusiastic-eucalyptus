import mongoose, { Schema } from 'mongoose';

export const instructorSchema = Schema({
  name: { type: String, required: true, unique: true },
  photo: String,
  excerpt: String,
  bio: String,
});

const Instructor = mongoose.model('Instructor', instructorSchema, 'Instructors');

export default Instructor;
