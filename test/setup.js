import mongoose from 'mongoose';

before(function () {
  const conn = process.env.MONGODB_TEST_URL || 'mongodb://localhost/pcci-test';
  mongoose.connect(conn, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

  mongoose.connection
    .once('open', () => {
      console.log('Connected!');
    })
    .on('error', (error) => {
      console.warn('Error : ', error);
    });
});

after(async function () {
  await mongoose.connection.dropDatabase();
  mongoose.connection.close();
});
