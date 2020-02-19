<template>
<div class="named-list-element">
  <div class="named-list-element__name">{{ name }}</div>
  <slot name="action"></slot>
</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class NamedListElement extends Vue {
  @Prop()
  name!: string
}
</script>

<style lang="scss" scoped>
.named-list-element {
  align-items: center;
  display: flex;
  justify-content: space-between;
}
</style>
