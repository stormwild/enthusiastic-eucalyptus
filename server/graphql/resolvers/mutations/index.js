import { setRootValueHolder } from '../rootValueHolder';

const addInstructor = (_, { instructor }) => {
  instructors.push(instructor);
  return instructor;
};

const mutations = {
  addInstructor,
  addRoot: (_, { value }) => {
    return setRootValueHolder(value);
  },
};

export default mutations;
