import express from 'express';
import middleware from './middleware';
import './db/mongodb';

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const { PORT } = process.env;

const app = express();

middleware(app);

app.listen(PORT, () => {
  console.log(`App started on http://localhost:${PORT}`);
});
