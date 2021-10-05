import Vue from 'vue';
import App from './App.vue';
import '@/library/fontawesome';
import '@/index.css';
import apolloProvider from '@/graphql';

Vue.config.productionTip = false;

new Vue({
  apolloProvider,
  render: (h) => h(App),
}).$mount('#app');
