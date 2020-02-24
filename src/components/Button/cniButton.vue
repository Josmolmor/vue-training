<template>
    <Button class="button" @click="(ev) => $emit('click', ev)">
        <slot/>
    </Button>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'

  @Component
  export default class CniButton extends Vue {}
</script>

<style lang="scss" scoped>
    .button {
        cursor: pointer;
        font-size: 0.75rem;
        text-transform: uppercase;
    }
</style>
