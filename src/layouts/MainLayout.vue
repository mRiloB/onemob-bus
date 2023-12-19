<script lang="ts" setup>
import { version } from '../../package.json';
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title class="flex align-items">
          <img src="../assets/logo-horizontal.png" height="60" />
        </q-toolbar-title>

        <!-- <q-btn dense flat icon="dashboard" @click="toggleMenu" /> -->
        <span>v{{ version }}</span>
      </q-toolbar>
    </q-header>

    <q-page-container class="app-content">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style lang="scss" scoped>
.app-content {
  background-color: $grey;
}
</style>
