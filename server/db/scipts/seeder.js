import { CourseCategory, Instructor, Course } from '../models';
import courseCategoriesData from '../data/course-categories.json';
import instructorsData from '../data/instructors.json';
import coursesData from '../data/courses.json';

export const initCourseCategories = () => {
  CourseCategory.countDocuments((err, count) => {
    if (count == 0) {
      CourseCategory.collection.insertMany(courseCategoriesData, (err, docs) =>
        console.log(`CourseCategoriess seeded. Inserted: ${docs.insertedCount}`)
      );
    }
  });
};

export const initInstructors = () => {
  Instructor.countDocuments((err, count) => {
    if (count == 0) {
      Instructor.collection.insertMany(instructorsData, (err, docs) =>
        console.log(`Instructors seeded. Inserted: ${docs.insertedCount}`)
      );
    }
  });
};

export const initCourses = () => {
  CourseCategory.countDocuments((err, count) => {
    if (count > 0) {
      CourseCategory.find((err, categories) => {
        const courses = coursesData.map(course => {
          let category = categories.find(c => c.name == course.category.name);
          course.category = category ? category._id : null;
          return course;
        });

        Course.countDocuments((err, count) => {
          if (count == 0) {
            Course.collection.insertMany(courses, (err, docs) => {
              console.log(`Courses seeded. Inserted: ${docs.insertedCount}`);
            });
          }
        });
      });
    }
  });
};

export default {
  initInstructors,
  initCourseCategories,
  initCourses,
};