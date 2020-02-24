<template>
    <div id="app">
        <Header />
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header/header.vue';
import Button from '@/components/Button/cniButton.vue';

@Component({
  components: {Header, Button},
})
export default class App extends Vue {

  created(): void {
    console.log(process.env.VUE_APP_HELLO_DEV)
  }
}
</script>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css?family=Roboto+bold');

    #app {
        font-family: 'Roboto bold', sans-serif;
    }
</style>
