import VueRouter from 'vue-router'

import MissionList from '@/apps/missions/components/MissionList/missionList.vue';
import SettingsView from '@/views/UserSettings/settings.vue'
import MissionDetail from '@/apps/missions/views/MissionDetail/missionDetail.vue';

const routes = [
  {
    path: '/',
    name: 'main',
    component: MissionList
  },
  {
    path: '/settings',
    name: 'settings',
    component: SettingsView
  },
  {
    path: '/mission/:id',
    name: 'mission',
    component: MissionDetail
  }];

export const router = new VueRouter({
  mode: 'history',
  routes
});
