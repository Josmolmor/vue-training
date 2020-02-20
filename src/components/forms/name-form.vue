<template>
<form class="name-form" @submit.stop.prevent="onSubmit">
  <label class="name-form__label"><span class="name-form__label-text">{{ labelText }}:</span>
    <cni-input name="name" v-model="form.name.value" minlength=8 @valid="(val) => form.name.valid = val" :required="true"></cni-input>
  </label>
  
  <div class="name-form__action"><slot name="action"><cni-button>{{ buttonText }}</cni-button></slot></div>
</form>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import CniButton from '@/components/buttons/cni-button.vue'
import CniInput from '@/components/inputs/cni-input.vue'

@Component({
  components: {
    CniButton, CniInput,
  }
})
export default class NameForm extends Vue {

  @Prop({ default: 'Name' })
  labelText!: string

  @Prop({ default: 'Submit' })
  buttonText!: string

  form = {
    name: {
      value: '',
      valid: false
    }
  }

  get formValid(): boolean {
    return Object.values(this.form).every(x => x.valid)
  }

  onSubmit(): void {
    if (this.formValid) {
      this.$emit('submit', this.form)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
