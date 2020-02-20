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
  cursor: pointer;
  display: flex;
  justify-content: center;
  font-weight: bold;
  padding: 0.5rem 1rem;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
}
</style>
