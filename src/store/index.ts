import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import UserModule from './user';

export const store = new Vuex.Store({
  strict: true,
  state: {},
  modules: {
    'user': UserModule
  },
});