<template>
<header class="header">
  <img src="/assets/logo.png" width="200" height="50" alt="Ce Ene I" />
  <nav class="header__nav">
    <ul>
      <router-link :to="listRouteName">App</router-link>
      <li>Settings</li>
      <li v-if="userName">{{ userName | dotName }}</li>
    </ul>
  </nav>
</header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { Getter, Action } from 'vuex-class'

import { RouteName } from '@/router'

import { dotName } from '@/utils/text'

@Component({
  filters: {
    dotName,
  }
})
export default class Header extends Vue {

  @Getter
  userName?: string

  @Action
  retrieveUser!: () => Promise<void>

  get listRouteName(): { name: string } {
    return { name: RouteName.LIST }
  }

  created(): void {
    if (!this.userName) {
      this.retrieveUser()
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  align-items: center;
  background: url('~@/assets/bg.png') repeat;
  display: flex;
  justify-content: space-between;

  .header__nav {
    ul {
      align-items: center;
      background-color: white;
      display: flex;
      justify-content: flex-end;
      margin-right: 1rem;
      padding: 0.25rem;

      li {
        &:not(:last-child) {
          margin-right: 1rem;
        }
      }
    }
  }
}
</style>
