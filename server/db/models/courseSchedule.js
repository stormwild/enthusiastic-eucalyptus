import mongoose, { Schema, mongo } from 'mongoose';
import { ObjectId } from 'mongodb';

export const courseScheduleSchema = Schema({
  course: { type: ObjectId, ref: 'Course', required: true },
  dates: [{ type: Date, default: Date.now }],
});

const CourseSchedule = mongoose.model('CourseSchedule', courseScheduleSchema, 'CourseSchedules');

export default CourseSchedule;
