import typeDefs from './typeDefs.graphql';
import context from './context';
import resolvers from './resolvers';

export default {
  namespace: 'BaseRecipe',
  context,
  typeDefs,
  resolvers,
};
