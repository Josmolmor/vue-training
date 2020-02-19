<template>
<div>
  <div v-if="!isLoadingMissions">
    <p class="mission-count">{{ missionCount }} missions</p>
    <mission-list></mission-list>
  </div>
  <span v-else>Loading...</span>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { namespace } from 'vuex-class';

import MissionList from '@/apps/mission/components/mission-list.vue'

const mission = namespace('mission')

@Component({
  components: {
    MissionList,
  }
})
export default class ListView extends Vue {
  @mission.Getter
  missionCount!: number

  @mission.Getter
  isLoadingMissions!: boolean

}
</script>

<style lang="scss" scoped>
.mission-count {
  margin-right: 1rem;
  margin-top: 1rem;
  text-align: right;
}
</style>
