import mongoose, { Schema } from 'mongoose';
import readline from 'readline';
import initInstructors from './models/instructors';
import initCourseCategories from './models/course-categories';

if (process.platform === 'win32') {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.on('SIGINT', () => {
    process.emit('SIGINT');
  });
}

const gracefulShutdown = (msg, callback) => {
  mongoose.connection.close(() => {
    console.log(`Mongoose disconnected through ${msg}`);
    callback();
  });
};

process.once('SIGUSR2', () => {
  gracefulShutdown('nodemon restart', () => {
    process.kill(process.pid, 'SIGUSR2');
  });
});

process.on('SIGINT', () => {
  gracefulShutdown('app termination', () => {
    process.exit(0);
  });
});

process.on('SIGTERM', () => {
  gracefulShutdown('Heroku app shutdown', () => {
    process.exit(0);
  });
});

const conn = process.env.MONGODB_URL || 'mongodb://localhost/pcci';

mongoose.connect(conn, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', () => console.log(`Mongoose connected to ${conn}`));

mongoose.connection.on('error', err => console.log('Mongoose connection error:', err));

mongoose.connection.on('disconnected', () => console.log('Mongoose disconnected'));

mongoose.connection.once('open', () => {
  console.log('Connection Successful!');

  initInstructors();
  initCourseCategories();
});
