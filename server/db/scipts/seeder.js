import { CourseCategory, Instructor, Course, Role, User } from '../models';
import courseCategoriesData from '../data/course-categories.json';
import instructorsData from '../data/instructors.json';
import coursesData from '../data/courses.json';
import roleData from '../data/roles.json';

export const initCourseCategories = async () => {
  const count = await CourseCategory.countDocuments().exec();
  if (count == 0) {
    const inserted = await CourseCategory.insertMany(courseCategoriesData);
    console.log(`CourseCategoriess seeded. Inserted: ${inserted.length}`);
    return inserted.length;
  }
};

export const initInstructors = async () => {
  const count = await Instructor.countDocuments().exec();
  if (count === 0) {
    const inserted = await Instructor.insertMany(instructorsData);
    console.log(`Instructors seeded. Inserted: ${inserted.length}`);
    return inserted.length;
  }
};

export const initCourses = async () => {
  const categories = await CourseCategory.find().exec();
  const courses = coursesData.map((course) => {
    let category = categories.find((c) => c.name === course.category.name);
    course.category = category ? category._id : null;
    return course;
  });

  const count = await Course.countDocuments().exec();
  if (count === 0) {
    const inserted = await Course.insertMany(courses);
    console.log(`Courses seeded. Inserted: ${inserted.length}`);
    return inserted.length;
  }
};

export const initRoles = async () => {
  const count = await Role.countDocuments().exec();
  if (count == 0) {
    const inserted = await Role.collection.insertMany(roleData);
    console.log(`Roles seeded. Inserted: ${inserted.length}`);
    return inserted.length;
  }
};

export default {
  initInstructors,
  initCourseCategories,
  initCourses,
  initRoles,
};
