import https from 'https';
import http from 'http';
import fs from 'fs';
import express from 'express';
import middleware from './middleware';
import './db/mongodb';

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const { HOST, PORT } = process.env;

const config = {
  key: fs.readFileSync(process.env.SSL_KEY),
  cert: fs.readFileSync(process.env.SSL_CRT),
};

const app = express();

middleware(app);

const server = https.createServer(config, app);

server.listen(PORT, () => {
  console.log(`App started on host: ${HOST} and port:${PORT}`);
});

http
  .createServer((req, res) => {
    res.writeHead(301, { Location: 'https://' + req.headers['host'] + req.url });
    res.end();
  })
  .listen(80);
