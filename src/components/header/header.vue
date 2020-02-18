<template>
<header class="header">
  <img src="./assets/logo.png" width="200" height="200" alt="Ce Ene I" />
  <nav class="header__nav">
    <ul>
      <li>App</li>
      <li>Settings</li>
      <li>Dander Perro</li>
    </ul>
  </nav>
</header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {

  created(): void {
    console.log(process.env.VUE_APP_HELLO_DEV)
  }
}
</script>

<style lang="scss" scoped>
</style>
