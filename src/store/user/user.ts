import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators';

import { User } from '@/@types/user';

import { retrieveCurrentUser } from './api'

@Module
export default class UserVuexModule extends VuexModule {
  user: User | undefined;

  get userName(): string {
    return !!this.user ? this.user.name : ''
  }

  @Mutation
  setUser(payload: User): void {
    this.user = {
      ...payload
    }
  }

  @Action
  async retrieveUser(): Promise<void> {
    try {
      const response = await retrieveCurrentUser()
      this.context.commit('setUser', response)
    } catch (e) {
      console.error(e)
    }
  }
}
