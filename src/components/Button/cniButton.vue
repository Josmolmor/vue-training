<template>
    <Button :disabled="disabled" class="button" @click="(ev) => $emit('click', ev)">
        <slot/>
    </Button>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class CniButton extends Vue {
    @Prop()
    disabled?: boolean;
  }
</script>

<style lang="scss" scoped>
    .button {
        background-color: #99518F;
        border-radius: 0.25rem;
        color: white;
        cursor: pointer;
        font-size: 0.75rem;
        font-weight: bold;
        outline: none;
        padding: 0.5rem 1rem;
        text-transform: uppercase;

        &:hover {
            background-color: #7a3f71;
        }

        &:disabled {
            cursor: auto;
            opacity: 0.5;

            &:hover {
                background-color: #99518F;
            }
        }
    }
</style>
