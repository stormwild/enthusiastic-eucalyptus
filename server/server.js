import express from 'express';
import middleware from './middleware';

const app = express();

middleware(app);

app.listen(3000, function() {
  console.log('App started on port 3000');
});
