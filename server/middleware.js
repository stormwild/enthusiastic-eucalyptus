import path from 'path';
import fs from 'fs';
import express from 'express';
import cors from 'cors';
import compress from 'compression';
import helmet from 'helmet';
import server from './graphql/apollo';

const middleware = app => {
  app.use(cors());

  app.use(compress());

  // app.use(helmet());
  // app.use(
  //   helmet.contentSecurityPolicy({
  //     directives: {
  //       defaultSrc: ["'self'"],
  //       scriptSrc: [
  //         "'self'",
  //         "'unsafe-inline'",
  //         'cdn.jsdelivr.net',
  //         "'unsafe-eval'",
  //         'identity.netlify.com',
  //         'unpkg.com',
  //       ],
  //       styleSrc: ["'self'", "'unsafe-inline'", 'fonts.googleapis.com', 'cdn.jsdelivr.net'],
  //       imgSrc: ["'self'", 'data:', '*.amazonaws.com', 'cdn.jsdelivr.net'],
  //       fontSrc: ["'self'", 'fonts.gstatic.com'],
  //     },
  //   })
  // );
  // app.use(helmet.referrerPolicy({ policy: 'same-origin' }));

  // serve static files before gatsbyExpress
  app.use(express.static('public/'));

  server.applyMiddleware({ app, path: '/graphql' });

  app.use('/app/:path', (err, req, res, next) => {
    const appPath = path.resolve('public/', 'app/index.html');
    if (fs.existsSync(appPath)) {
      res.status(200).sendFile(appPath);
    }
    res.status(200).send('ok');
  });

  app.use((_req, res, _next) => {
    const notFoundPath = path.resolve('public/', '404/index.html');
    if (fs.existsSync(notFoundPath)) {
      res.status(404).sendFile(notFoundPath);
    }
    res.status(200).send('ok');
  });

  app.use((err, _req, res, _next) => {
    console.log('Error occurred: ', err);
    const serverErrorPath = path.resolve('public/', '500/index.html');
    if (fs.existsSync(serverErrorPath)) {
      res.status(500).sendFile(serverErrorPath);
    }
    res.status(200).send('ok');
  });
};

export default middleware;
