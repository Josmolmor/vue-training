<template>
    <label>
        <input :id="id" :type="type" :name="name" :placeholder="placeholder" :required="required" :minlength="minlength"
            :maxlength="maxlength" :value="value" :readonly="readonly" :disabled="disabled" @input="input" />
    </label>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component
  export default class CniInput extends Vue {
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
    value!: string | number;

    emitValid(event: { target: HTMLInputElement }): void {
      this.$emit('valid', event.target.checkValidity())
    }
    input(event: { target: HTMLInputElement; }): void {
      this.$emit('input', event.target.value);
      this.emitValid(event);
    }
    /*
    mounted(): void {
      this.emitValid({ target: this.$el as HTMLInputElement });
    }*/
  }
</script>

<style lang="scss" scoped>
    input {
        border: 1px solid grey;
        border-radius: 0.25rem;
        outline: none;
        padding: 0.25rem 0.5rem;
    }
</style>
