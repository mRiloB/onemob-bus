<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title class="flex align-items">
          <img src="src/assets/logo-horizontal.png" height="60" />
        </q-toolbar-title>

        <!-- <q-btn dense flat icon="dashboard" @click="toggleMenu" /> -->
        <span>v1.0.0</span>
      </q-toolbar>
    </q-header>

    <q-dialog v-model="dMenu" persistent>
      <LayoutMenu />
    </q-dialog>

    <q-page-container class="app-content">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import LayoutMenu from 'src/components/LayoutMenu.vue';

const dMenu = ref(false);

function toggleMenu () {
  dMenu.value = !dMenu.value;
}
</script>

<style lang="scss" scoped>
.app-content {
  background-color: $grey;
}
</style>
