import { courseCategories, courseCategory } from './courseCategoryQueries';
import { courses } from './courseQueries';
import { instructors } from './instructorQueries';
import { root } from './rootQueries';

const queries = {
  root,
  courseCategories,
  courseCategory,
  instructors,
  courses,
};

export default queries;
