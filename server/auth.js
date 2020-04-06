import passport from 'passport';
import localStrategy from './strategies/local';

const auth = (app) => {
  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser((user, done) => {
    // null, user.id
    done(null, user);
  });
  passport.deserializeUser((user, done) => {
    done(null, user);
  });

  localStrategy(passport);
};

export default auth;
