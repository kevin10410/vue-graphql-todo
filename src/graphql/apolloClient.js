import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://blue-surf-400060.us-east-1.aws.cloud.dgraph.io/graphql',
});

export default client;
