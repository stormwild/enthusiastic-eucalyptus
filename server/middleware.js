import express from 'express';
import cors from 'cors';
import compress from 'compression';
import helmet from 'helmet';
import redirect from './gatsby-plugin-express';
import server from './apollo';

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
    }),
  );
  app.use(helmet.referrerPolicy({ policy: 'same-origin' }));

  // serve static files before gatsbyExpress
  app.use(express.static('public/'));

  server.applyMiddleware({ app, path: '/graphql' });

  app.use(
    redirect(`config/gatsby-express.json`, {
      publicDir: 'public/',
      template: '404/index.html',

      // redirects all /path/ to /path
      // should be used with gatsby-plugin-remove-trailing-slashes
      redirectSlashes: true,
    }),
  );
};

export default middleware;
