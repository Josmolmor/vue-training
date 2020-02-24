<template>
    <Header />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header/header.vue';
@Component({
  components: {Header},
})
export default class App extends Vue {

  created(): void {
    console.log(process.env.VUE_APP_HELLO_DEV)
  }
}
</script>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css?family=Roboto+bold');

    html, body {
        font-family: 'Roboto bold', sans-serif;
    }
</style>
