<template>
    <div id="app">
        <Header />
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header/header.vue';

@Component({
  components: {Header},
})
export default class App extends Vue {

  created(): void {}
}
</script>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css?family=Roboto+bold');

    #app {
        font-family: 'Roboto bold', sans-serif;
    }
</style>
