<template>
<Header />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Header from '@/components/header/header.vue'

@Component({
  components: {
    Header,
  }
})
export default class App extends Vue {

  created(): void {
    console.log(process.env.VUE_APP_HELLO_DEV)
  }
}
</script>

<style lang="scss" scoped>
</style>
