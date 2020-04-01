import { ApolloServer } from 'apollo-server-express';
import { configProvider } from './configProvider';

const config = configProvider();
const server = new ApolloServer(config);

export default server;
