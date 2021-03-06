import Vue from 'vue';
import VueApollo from 'vue-apollo';
import apolloClient from '@/graphql/apolloClient';

Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

export default apolloProvider;
