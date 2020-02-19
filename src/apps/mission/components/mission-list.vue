<template>
<ul class="mission-list">
  <li v-for="mission in missionList" :key="mission.id">
    <named-list-element :name="mission.name"><cni-button v-if="mission.editable" slot="action">Edit</cni-button></named-list-element>
  </li>
</ul>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { namespace } from 'vuex-class';

import CniButton from '@/components/buttons/cni-button.vue'
import NamedListElement from '@/components/lists/named-list-element/named-list-element.vue'

import { Mission } from '@/@types/mission';

const mission = namespace('mission')

@Component({
  components: {
    CniButton, NamedListElement,
  }
})
export default class MissionList extends Vue {
  @mission.Getter
  missionList!: Mission[]

  @mission.Action
  listMissions!: () => Promise<void>

  mounted(): void {
    if (!this.missionList.length) {
      this.listMissions();
    }
  }
}
</script>

<style lang="scss" scoped>
.mission-list {
  border: 1px solid $primary-color;
  margin: 1rem;
  padding: 1rem;

  li {
    &:not(:last-child) {
      margin-bottom: 0.5rem;
    }
  }

  .named-list-element {
    border: 1px solid $primary-color;
    background-color: $secondary-color;
    padding: 1rem;

    &::v-deep .named-list-element__name {
      font-weight: 700;
    }
  }
}
</style>
