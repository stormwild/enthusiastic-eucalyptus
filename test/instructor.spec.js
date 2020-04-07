import { expect, assert } from 'chai';
import { initInstructors, initCourses } from '../server/db/scipts/seeder';
import {
  addInstructor,
  updateInstructor,
} from '../server/graphql/resolvers/mutations/intructorMutations';
import { Instructor, Course } from '../server/db/models/index';

describe('Seeder initInstructors', function () {
  it('can initialize instructor data', async function () {
    const count = await initInstructors();
    expect(count).to.equal(7);
    const { deletedCount } = await Instructor.deleteMany().exec();
    expect(7).to.equal(deletedCount);
  });
});

describe('Instructor Model', function () {
  it('can create a test instructor', async function () {
    // Arrange
    await Instructor.deleteOne({ name: 'Test' }).exec();
    // Act
    const testInstructor = await Instructor.create({ name: 'Test' });
    // Assert
    assert.isNotNull(testInstructor);
    expect(testInstructor.name).to.equal('Test');

    // Cleanup
    await Instructor.deleteOne({ name: 'Test' }).exec();
  });
});

describe('Instructor mutations', function (params) {
  let instructorInput = {
    name: 'Test Instructor',
    photo: '',
    excerpt: '',
    bio: '',
  };

  let input = {
    instructorInput,
    courseIds: [],
  };
  let instructor = null;
  let course = null;

  before(async function () {
    // Retrieve an existing course and populate courseIds
    const count = await initCourses();
    if (count > 0) {
      course = await Course.findOne().exec();
      input.courseIds.push(course._id);
    }

    const instructorCount = await initInstructors();
    if (instructorCount > 0) {
      instructor = await Instructor.findOne().exec();
      input._id = instructor._id;
    }
  });

  it('addInstructor saves and returns instructor with populated courses ', async function () {
    const sut = await addInstructor(null, { input });
    expect(course.title).to.be.equal(sut.courses[0].title);
  });

  it('updateInstructor saves and returns instructor with populated courses ', async function () {
    input.instructorInput.name = instructor.name;
    const sut = await updateInstructor(null, { input });
    expect(course.title).to.be.equal(sut.courses[0].title);
  });

  // it('when given instructor input with courseIds returns populated Intructor', async function () {
  //   const { _id, updates } = {
  //     _id: '5e7c17aa23e50878a481bec9',
  //     updates: {
  //       name: 'Glenn B. Ala, PhD',
  //       courses: ['5e8483c2a6eee6b7669cf07c'],
  //     },
  //   };

  //   const instructor = await Instructor.findByIdAndUpdate({ _id }, updates, {
  //     useFindAndModify: false,
  //   });

  //   Cleanup
  //   await Instructor.deleteOne({ name: 'Test' }).exec();
  // });

  after(async function () {
    input.courseIds = [];
    await Course.deleteMany().exec();
    await Instructor.deleteMany().exec();
  });
});
