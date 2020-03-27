import express from 'express';
import middleware from './middleware';
import './db/mongodb';

// require('dotenv').config({
//   path: `.env.${process.env.NODE_ENV}`,
// });

const app = express();

middleware(app);

app.listen(3000, function() {
  console.log('App started on port 3000');
});
