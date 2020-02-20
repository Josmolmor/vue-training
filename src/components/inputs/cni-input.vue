<template>
  <input
    :id="id"
    :type="type"
    :name="name"
    :placeholder="placeholder"
    :required="required"
    :minlength="minlength"
    :maxlength="maxlength"
    :value="value"
    :readonly="readonly"
    :disabled="disabled"
    @input="input" />
</template>

<script lang="ts">
import { VueConstructor } from 'vue';

import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class BasicInput extends Vue {

  @Prop()
  placeholder?: string;

  @Prop()
  id?: string;

  @Prop({ default: false })
  disabled?: boolean;

  @Prop({ default: false })
  required?: boolean;

  @Prop({ default: false })
  readonly?: boolean;

  @Prop()
  name!: string;

  @Prop({ default: 'text' })
  type?: string;

  @Prop()
  minlength?: number;

  @Prop()
  maxlength?: number;

  @Prop()
  value!: string | number

  emitValid(event: { target: HTMLInputElement }): void {
    this.$emit('valid', event.target.checkValidity())
  }

  input(event: { target: HTMLInputElement; }): void {
    this.$emit('input', event.target.value);
    this.emitValid(event);
  }

  mounted(): void {
    this.emitValid({ target: this.$el as HTMLInputElement });
  }
}
</script>

<style lang="scss" scoped>
input {
  background-color: $secondary-color;
  border: 1px solid $primary-color;
  padding: 0.25rem 0.5rem;
}
</style>