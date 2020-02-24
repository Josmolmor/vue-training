<template>
    <header class="header">
        <img class="header-logo" alt="Ce Ene I" src="/assets/logo.png"/>
        <nav class="nav-items">
            <ul>
                <li>Main</li>
                <li>Settings</li>
                <li>Username</li>
            </ul>
        </nav>
    </header>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'

  @Component
  export default class Header extends Vue {}
</script>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css?family=Roboto+bold');
    .header {
        align-items: center;
        background: url('~@/assets/bg.png') repeat;
        display: flex;
        font-family: 'Roboto bold', sans-serif;
        justify-content: space-between;
    }
    .header-logo {
        width: 200px;
        height: 50px;
    }
    .nav-items {
        display: flex;
        ul {
            align-items: center;
            color: #99518F;
            display: flex;
            font-weight: bold;
            margin-right: 1rem;
            padding: 0.25rem;
            text-transform: uppercase;

            li {
                background-color: white;
                border-radius: 0.25rem;
                cursor: pointer;
                padding: 0.25rem 0.75rem;

            }
            * + * {
                margin-left: 1rem;
            }
        }
    }
</style>
