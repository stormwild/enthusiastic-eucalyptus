import { setRootValueHolder } from '../rootValueHolder';

export const updateRoot = (_, { input }) => {
  return setRootValueHolder(input);
};

export default { updateRoot };
