import typeDefsArray from './schema/index';
import resolvers from './resolvers/index';

const config = {
  typeDefs: typeDefsArray,
  resolvers,
  formatError: (error) => {
    console.log(JSON.stringify(error));
    return error;
  },
};

const configProvider = () => {
  return config;
};

export default configProvider;
