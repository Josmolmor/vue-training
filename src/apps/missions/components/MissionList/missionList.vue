<template>
    <div class="container">
        <div class="spinner" v-if="!missionCount"><Spinner /></div>
        <div v-else>
            <div class="counter-container">
                <p v-if="missionCount">{{ missionCount }} missions</p>
            </div>
            <div class="mission-list">
                <div v-for="mission in missionList" :key="mission.id" class="mission-element">
                    {{ mission.name }}
                    <CniButton v-if="mission.editable" class="button" @click="edit(mission.id)">Edit</CniButton>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import { namespace} from 'vuex-class';
  import {Mission} from '@/@types/mission';
  import CniButton from '@/components/Button/cniButton.vue'
  import Spinner from '@/components/Spinner/spinner.vue'

  const mission = namespace('mission');

  @Component({
    components: {
      CniButton,
      Spinner,
    }
  })
  export default class MissionList extends Vue {

    @mission.Getter
    missionList!: Mission[];

    @mission.Getter
    missionCount!: number;

    @mission.Action
    listMissions!: () => Promise<void>;

    edit(id: number): void {
      this.$router.push({ name: 'mission', params: { id: id.toString() }});
    }

    mounted(): void {
      if (!this.missionList.length) {
        this.listMissions();
      }
    }
  }
</script>

<style lang="scss" scoped>
    .container {}
    .mission-list {
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
        align-items: center;
        border-radius: 0.25rem;
        display: flex;
        padding: 2rem;
        justify-content: space-between;
        min-height: 95px;
        transition: transform 0.25s ease;
        -webkit-box-shadow: 6px 4px 20px -5px rgba(0,0,0,0.25);
        -moz-box-shadow: 6px 4px 20px -5px rgba(0,0,0,0.25);
        box-shadow: 6px 4px 20px -5px rgba(0,0,0,0.25);

        .button {
            display: none;
        }

        &:hover {
            transform: translateY(-5%);

            .button {
                display: block;
            }
        }
    }
    .spinner {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>
