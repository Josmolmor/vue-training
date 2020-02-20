<template>
  <div class="profile">
    <div v-if="!!currentUser" class="profile__info">
      <div>
        <p><b>Id:</b> {{ currentUser.id }}</p>
        <p><b>Name:</b> {{ currentUser.name }}</p>
      </div>
      <img src="https://compote.slate.com/images/74a6c06e-52c3-4cbe-9d07-686d6d13576e.jpg" alt="platypus" />
    </div>
    <div v-else>
      Loading...
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { Getter } from 'vuex-class';

import { User } from '@/@types/user'


@Component
export default class SettingsView extends Vue {
  @Getter
  currentUser?: User
}
</script>

<style lang="scss" scoped>
.profile {
  padding: 1rem;

  .profile__info {
    align-items: flex-start;
    display: flex;
    justify-content: space-between;

    p {
      margin-bottom: 1rem;
    }
  }
}
</style>
