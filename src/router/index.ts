import VueRouter from 'vue-router'

import MissionListView from '@/apps/mission/views/list.vue'
import MissionDetailView from '@/apps/mission/views/detail.vue'

import SettingsView from '@/views/settings.vue'

export enum MissionRouteName {
  LIST = 'missionList',
  DETAIL = 'missionDetail'
}

export enum RouteName {
  SETTINGS = 'settings',
}

/*
* Note: You can create another file called mission.ts, that contains the mission route names and the routes.
*/

const routes = [
  { path: '/settings/', component: SettingsView, name: RouteName.SETTINGS },
  { path: '/detail/:id/', component: MissionDetailView, name: MissionRouteName.DETAIL, props: true },
  { path: '/', component: MissionListView, name: MissionRouteName.LIST }
]

export const router = new VueRouter({
  mode: 'history',
  routes
})
