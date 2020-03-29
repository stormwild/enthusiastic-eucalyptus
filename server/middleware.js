import path from 'path';
import express from 'express';
import cors from 'cors';
import compress from 'compression';
import helmet from 'helmet';
import server from './graphql/apollo';

const middleware = app => {
  app.use(cors());

  app.use(compress());

  app.use(helmet());
  app.use(
    helmet.contentSecurityPolicy({
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'", 'cdn.jsdelivr.net', "'unsafe-eval'"],
        styleSrc: ["'self'", "'unsafe-inline'", 'fonts.googleapis.com', 'cdn.jsdelivr.net'],
        imgSrc: ["'self'", 'data:', '*.amazonaws.com', 'cdn.jsdelivr.net'],
        fontSrc: ["'self'", 'fonts.gstatic.com'],
      },
    })
  );
  app.use(helmet.referrerPolicy({ policy: 'same-origin' }));

  // serve static files before gatsbyExpress
  app.use(express.static('public/'));

  server.applyMiddleware({ app, path: '/graphql' });

  app.use((_req, res, _next) => {
    res.status(404).sendFile(path.resolve('public/', '404/index.html'));
  });

  app.use((err, _req, res, _next) => {
    console.log('Error occurred: ', err);
    res.status(500).sendFile(path.resolve('public/', '500/index.html'));
  });
};

export default middleware;
