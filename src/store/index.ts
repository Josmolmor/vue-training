import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import MissionModule from './mission'
import UserModule from './user';

export const store = new Vuex.Store({
  strict: true,
  state: {},
  modules: {
    'mission': MissionModule,
    'user': UserModule,
  },
});
