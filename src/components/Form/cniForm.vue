<template>
    <form class="name-form" @submit.stop.prevent="onSubmit">
        <div class="form-data">
            <label class="label-text">{{ labelText }}</label>
            <cniInput name="name" v-model="form.name.value" minlength=8 @valid="(val) => form.name.valid = val" :required="true" @input="inputChange"></cniInput>
        </div>
        <div class="form-button">
            <slot name="action">
                <cniButton :disabled="disabledButton">{{ buttonText }}</cniButton>
            </slot>
        </div>
    </form>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';
  import CniButton from '@/components/Button/cniButton.vue';
  import CniInput from '@/components/Input/cniInput.vue';

  @Component({
    components: {
      CniButton, CniInput,
    }
  })
  export default class NameForm extends Vue {
    @Prop({ default: 'Name' })
    labelText!: string;

    @Prop({ default: 'Submit' })
    buttonText!: string;

    disabledButton = true;

    form = {
      name: {
        value: '',
        valid: false
      }
    };

    get formValid(): boolean {
      return Object.values(this.form).every(x => x.valid)
    }

    isDisabled(): boolean {
      return this.form.name.value === '';
    }

    inputChange(): any {
      console.log(this.form.name.value);
      return this.form.name.value.length >= 8 ? this.disabledButton = false : this.disabledButton = true;
    }

    onSubmit(): void {
      if (this.formValid) {
        this.$emit('submit', this.form)
      }
    }
  }
</script>

<style lang="scss" scoped>
    .form-data {
        > label {
            margin-right: 1rem;
        }
    }
    .label-text {
        font-size: 0.75rem;
        font-weight: bold;
        text-transform: uppercase;
    }
    .name-form {
        align-items: center;
        display: flex;
        padding: 2rem;
    }
    .form-button {
        margin-left: auto;
    }
</style>
