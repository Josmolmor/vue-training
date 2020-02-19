import VueRouter from 'vue-router'

import ListView from '@/views/list.vue'
import DetailView from '@/views/detail.vue'

export enum RouteName {
  LIST = 'list',
  DETAIL = 'detail'
}

const routes = [
  { path: '/detail/:id/', component: DetailView, name: RouteName.DETAIL, props: true },
  { path: '/', component: ListView, name: RouteName.LIST }
]

export const router = new VueRouter({
  mode: 'history',
  routes
})