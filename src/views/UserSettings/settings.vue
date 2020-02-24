<template>
    <div class="container">
        <div class="content">
            <p class="text"><strong>ID</strong>: {{ currentUser.id}}</p>
            <p class="text"><strong>Name</strong>: {{ currentUser.name }}</p>
            <img class="profile-img" src="https://picsum.photos/200" alt="profile-pic"/>
        </div>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import {namespace} from 'vuex-class';
  import {User} from '@/@types/user';

  const user = namespace('user');

  @Component
  export default class Settings extends Vue {

    @user.Getter
    currentUser?: User;
  }
</script>

<style lang="scss" scoped>
    .container {
        display: flex;
        flex-direction: row;
        padding: 1rem;

        div:not(:first-child) {
            margin-left: 1rem;
        }
    }
    .content {
        border-radius: 0.25rem;
        -webkit-box-shadow: 6px 4px 20px -5px rgba(0,0,0,0.25);
        -moz-box-shadow: 6px 4px 20px -5px rgba(0,0,0,0.25);
        box-shadow: 6px 4px 20px -5px rgba(0,0,0,0.25);
        display: flex;
        flex-direction: column;
        padding: 2rem;
    }
    .profile-img {
        border-radius: 0.25rem;
        margin-top: 1rem;
    }
</style>
