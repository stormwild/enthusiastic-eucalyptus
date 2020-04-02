import https from 'https';
import http from 'http';
import fs from 'fs';
import express from 'express';
import middleware from './middleware';
import './db/mongodb';

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const { HOST, PORT, SSL_KEY, SSL_CRT } = process.env;
const config = { key: '', cert: '' };

console.log(`${SSL_KEY}`);
console.log(`${SSL_CRT}`);

try {
  if (SSL_KEY && SSL_CRT) {
    //file exists
    if (fs.existsSync(SSL_KEY) && fs.existsSync(SSL_CRT)) {
      config.key = fs.readFileSync(SSL_KEY);
      config.cert = fs.readFileSync(SSL_CRT);

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
    }
  }
} catch (err) {
  console.error(err);
  throw err;
}
