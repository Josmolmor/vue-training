import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators';
import { Mission } from '@/@types/mission';
import { listMission, updateMission } from './api'

@Module({ namespaced: true })
export default class UserVuexModule extends VuexModule {
  indexedMissions: { [id: string]: Mission } = {};
  loadingMissions = false;

  get isLoadingMissions(): boolean {
    return this.loadingMissions;
  }

  get missionList(): Mission[] {
    return Object.values(this.indexedMissions);
  }

  get missionById(): (id: string) => Mission | undefined {
    return (id: string) => this.indexedMissions[id];
  }

  get missionCount(): number {
    return Object.keys(this.indexedMissions).length
  }

  @Mutation
  setLoadingMissions(value: boolean): void {
    this.loadingMissions = value;
  }

  @Mutation
  setMission(mission: Mission): void {
    this.indexedMissions = {
      ...this.indexedMissions,
      [mission.id]: {...mission}
    }
  }

  @Action
  async listMissions(): Promise<void> {
    this.context.commit('setLoadingMissions', true);
    try {
      const missions = await listMission();
      missions.forEach((mission: Mission) => {
        this.context.commit('setMission', mission)
      })
    } catch (e) {
      console.error(e)
    }
    this.context.commit('setLoadingMissions', false)
  }

  @Action
  async updateMission(mission: Mission): Promise<void> {
    try {
      const updated = await updateMission(mission.id, mission);
      this.context.commit('setMission', updated)
    } catch (e) {
      console.error(e)
    }
  }
}
