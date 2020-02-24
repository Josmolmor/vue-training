<template>
    <header class="header">
        <img class="header-logo" alt="Ce Ene I" src="/assets/logo.png"/>
        <nav class="nav-items">
            <ul>
                <li><router-link to="/">Main</router-link></li>
                <li><router-link to="settings">Settings</router-link></li>
                <li v-if="userName">{{ userName | formatUserName }}</li>
            </ul>
        </nav>
    </header>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import {namespace} from 'vuex-class';
  import { formatUserName } from '@/utils/formatUserName';

  const user = namespace('user');

  @Component({
    filters: {
      formatUserName
    }
  })

  export default class Header extends Vue {
    @user.Getter
    userName?: string;

    @user.Action
    retrieveUser!: () => Promise<void>;

    created(): void {
      if (!this.userName) {
        this.retrieveUser()
      }
    }
  }
</script>

<style lang="scss" scoped>
    .header {
        align-items: center;
        background: url('~@/assets/bg.png') repeat;
        display: flex;
        justify-content: space-between;
    }
    .header-logo {
        width: 200px;
        height: 50px;
    }
    .nav-items {
        display: flex;
        flex-grow: 1;
        justify-content: flex-end;
        ul {
            align-items: center;
            display: flex;
            text-decoration: none;

            li {
                background-color: #E6CADC;
                border-radius: 0.25rem;

                &:last-child {
                    color: #99518F;
                    padding: 0.75rem 1rem;
                }

                a {
                    color: #99518f;
                    padding: 0.75rem 1rem;
                }
                :hover {
                    background-color: #99518F;
                    color: white;
                }
            }
        }
    }
</style>
