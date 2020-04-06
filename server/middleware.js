import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';

import cors from 'cors';
import compress from 'compression';
import helmet from 'helmet';

import passport from 'passport';

import server from './graphql/apollo';
import auth from './auth';
import { User, Role } from './db/models';

const middleware = (app) => {
  const { SESSION_SECRET = 'For the gentle wind does move Silently invisibly' } = process.env;

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(
    session({
      secret: SESSION_SECRET,
      resave: false,
      saveUninitialized: true,
      cookie: { secure: true },
    })
  );

  auth(app);

  app.use(cors());

  app.use(compress());

  app.use(helmet());
  app.use(
    helmet.contentSecurityPolicy({
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: [
          "'self'",
          "'unsafe-inline'",
          'cdn.jsdelivr.net',
          "'unsafe-eval'",
          'identity.netlify.com',
          'unpkg.com',
        ],
        styleSrc: ["'self'", "'unsafe-inline'", 'fonts.googleapis.com', 'cdn.jsdelivr.net'],
        imgSrc: ["'self'", 'data:', '*.amazonaws.com', 'cdn.jsdelivr.net'],
        fontSrc: ["'self'", 'fonts.gstatic.com'],
      },
    })
  );
  app.use(helmet.referrerPolicy({ policy: 'same-origin' }));

  // serve static files before gatsbyExpress
  app.use(express.static('public/'));

  // Apollo
  server.applyMiddleware({ app, path: '/graphql' });

  app.use('/app/:path', (err, req, res, next) => {
    res.status(200).sendFile(path.resolve('public/', 'app/index.html'));
  });

  // Login
  app.post('/login', passport.authenticate('local'), (_req, res) => {
    res.redirect('/app');
  });

  app.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    const role = Role.collection.findOne({ name: 'Guest' }, (err, role) => {
      if (err) throw err;

      User.register({ username, email, role: role._id }, password, (err, user) => {
        if (err) {
          throw err;
        }

        passport.authenticate('local')(req, res, () => {
          res.redirect(302, '/app');
        });
      });
    });
  });

  app.use((req, res, _next) => {
    console.log('req' + req.path);
    res.status(404).sendFile(path.resolve('public/', '404/index.html'));
  });

  app.use((err, _req, res, _next) => {
    console.log('Error occurred: ', err);
    res.status(500).sendFile(path.resolve('public/', '500/index.html'));
  });
};

export default middleware;
