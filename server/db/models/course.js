import mongoose, { Schema } from 'mongoose';

const {
  Types: { ObjectId },
} = Schema;

export const courseSchema = Schema({
  title: { type: String, required: true },
  description: String,
  instructors: [{ type: ObjectId, ref: 'Instructor' }],
  fee: Number,
  category: { type: ObjectId, ref: 'CourseCategory' },
});

const Course = mongoose.model('Course', courseSchema, 'Courses');

export default Course;
