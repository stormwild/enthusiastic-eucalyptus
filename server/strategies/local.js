import { Strategy } from 'passport-local';

const localStrategy = passport => {
  // Creates a user based on the posted form
  passport.use(
    new Strategy(
      {
        usernameField: 'username',
        passwordField: 'password',
      },
      (username, password, done) => {
        // just create a user
        const user = {
          username,
          password,
        };

        done(null, user);
      }
    )
  );
};

export default localStrategy;
