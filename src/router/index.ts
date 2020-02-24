import VueRouter from 'vue-router'

import SettingsView from '@/views/settings.vue'

const routes = [{
  path: '/settings',
  component: SettingsView
}];

export const router = new VueRouter({
  mode: 'history',
  routes
});
