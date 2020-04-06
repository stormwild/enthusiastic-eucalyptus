import { User } from '../db/models/index';

const localStrategy = passport => {
  // Creates a user based on the posted form
  passport.use(User.createStrategy());
};

export default localStrategy;
