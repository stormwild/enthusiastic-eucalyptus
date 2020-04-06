import queries from './queries/index';
import mutations from './mutations/index';
import graphQLDate from './graphQLDate';

const resolvers = {
  Query: queries,
  Mutation: mutations,
  GraphQLDate: graphQLDate,
};

export default resolvers;
