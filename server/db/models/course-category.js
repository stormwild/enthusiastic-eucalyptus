import mongoose, { Schema } from 'mongoose';

export const courseCategorySchema = Schema({
  name: { type: String, required: true, unique: true, index: true },
});

const CourseCategory = mongoose.model('CourseCategory', courseCategorySchema, 'CourseCategories');

export default CourseCategory;
