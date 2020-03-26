import mongoose, { Schema } from 'mongoose';
import courseCategories from '../../data/course-categories.json';

const initCourseCategories = () => {
  let courseCategorySchema = Schema({
    name: String,
  });

  const CourseCategory = mongoose.model('CourseCategory', courseCategorySchema, 'CourseCategories');
  CourseCategory.countDocuments((err, count) => {
    if (count == 0) {
      CourseCategory.collection.insertMany(courseCategories, (err, docs) =>
        console.log(`CourseCategoriess initialized. Inserted: ${docs.insertedCount}`)
      );
    }
  });
};

export default initCourseCategories;
