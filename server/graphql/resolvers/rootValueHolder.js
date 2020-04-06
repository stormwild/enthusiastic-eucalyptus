let rootValueHolder = `Hello`;

export const setRootValueHolder = (value) => {
  rootValueHolder = value;
  return rootValueHolder;
};

export const getRootValueHolder = () => {
  return rootValueHolder;
};

export default { setRootValueHolder, getRootValueHolder };
