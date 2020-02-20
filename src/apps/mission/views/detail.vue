<template>
<div class="mission-detail" v-if="!!mission">
  <p class="mission-detail__title">{{ mission.name }}</p>
  <name-form @submit="submit" label-text="New Name">
    <cni-button slot="action" :disabled="sending">Save</cni-button>
  </name-form>
  <span v-if="error">There was an error</span>
</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { Route } from 'vue-router';
import { Mission } from '@/@types/mission';
import { MissionRouteName } from '@/router';

import CniButton from '@/components/buttons/cni-button.vue'
import NameForm from '@/components/forms/name-form.vue'

const mission = namespace('mission')

@Component({
  components: {
    CniButton, NameForm,
  }
})
export default class DetailView extends Vue {
  
  @Prop()
  id!: number

  @mission.Getter
  missionById!: (id: number) => Mission | undefined

  @mission.Action
  updateMission!: (mission: Mission) => Promise<void>

  error = false
  sending = false;

  get mission(): Mission | undefined {
    return this.missionById(this.id);
  }

  async submit(form: { name: { value: string, valid: boolean } }): Promise<void> {
    const name = form.name.value;
    this.sending = true;
    await this.updateMission({
      ...this.mission!,
      name
    })
    if (this.mission!.name !== name) {
      this.error = true;
    } else {
      this.$router.push({ name: MissionRouteName.LIST })
    }
    this.sending = false;
  }

  beforeRouteEnter(to: Route, from: Route, next: any): void {
    next((vm: DetailView) => {
      if (!vm.mission || !vm.mission.editable) {
        vm.$router.push({ name: MissionRouteName.LIST })
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.mission-detail {
  border: 1px solid $primary-color;
  margin-top: 1rem;
  max-width: 30rem;

  .mission-detail__title {
    border-bottom: 1px solid $primary-color;
    padding: 0.5rem;
  }
}

.name-form {
  align-items: flex-end;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 0.5rem;


  &::v-deep {
    label span {
      display: block;
      margin-bottom: 0.25rem;
    }
  }
}
</style>
