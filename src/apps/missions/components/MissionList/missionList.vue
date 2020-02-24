<template>
    <div class="container">
        <div class="counter-container">
            <p>{{ missionCount }} missions</p>
        </div>
        <div class="content">
            <div v-for="mission in missionList" :key="mission.id" class="mission-element">
                {{ mission.name }}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import { namespace} from 'vuex-class';
  import {Mission} from '@/@types/mission';

  const mission = namespace('mission');

  @Component
  export default class MissionList extends Vue {

    @mission.Getter
    missionList!: Mission[];

    @mission.Getter
    missionCount!: number;

    @mission.Action
    listMissions!: () => Promise<void>;

    mounted(): void {
      if (!this.missionList.length) {
        this.listMissions();
      }
    }
  }
</script>

<style lang="scss" scoped>
    .container {}
    .content {
        display: flex;
        flex-direction: column;
        padding: 0 2rem;

        * + * {
            margin-top: 1rem;
        }
    }
    .counter-container {
        display: flex;
        justify-content: flex-end;
        padding: 1rem;
    }
    .mission-element {
        border-radius: 0.25rem;
        display: flex;
        padding: 2rem;
        -webkit-box-shadow: 6px 4px 20px -5px rgba(0,0,0,0.25);
        -moz-box-shadow: 6px 4px 20px -5px rgba(0,0,0,0.25);
        box-shadow: 6px 4px 20px -5px rgba(0,0,0,0.25);
        transition: transform 0.25s ease;

        &:hover {
            transform: translateY(-5%);
        }
    }
</style>
