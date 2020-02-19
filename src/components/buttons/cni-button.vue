<template>
<button class="button" @click="(ev) => $emit('click', ev)">
  <slot></slot>
</button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Button extends Vue {

}
</script>

<style lang="scss" scoped>
.button {
  align-items: center;
  background-color: $primary-color;
  color: white;
  display: flex;
  justify-content: center;
  font-weight: bold;
  padding: 0.5rem 1rem;
}
</style>
