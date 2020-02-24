import VueRouter from 'vue-router'

import MissionList from '@/apps/missions/components/MissionList/missionList.vue';
import SettingsView from '@/views/UserSettings/settings.vue'

const routes = [
  {
    path: '/',
    component: MissionList
  },
  {
    path: '/settings',
    component: SettingsView
  }];

export const router = new VueRouter({
  mode: 'history',
  routes
});
