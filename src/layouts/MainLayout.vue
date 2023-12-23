<script lang="ts" setup>
import { ref } from 'vue';

const drawer = ref<boolean>(false);

function toggleDrawer () {
  drawer.value = !drawer.value;
}
</script>

<template>
  <q-layout view="hHh LpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn flat @click="toggleDrawer" icon="menu" />
        <q-toolbar-title class="flex align-items">
          <img src="../assets/logo-horizontal.png" height="60" />
        </q-toolbar-title>

        <!-- <q-btn flat :to="{ name: 'home' }" icon="home" /> -->
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawer" :width="200" :breakpoint="700" side="left" overlay class="bg-primary text-white">
      <q-list bordered separator>
        <q-item-label class="text-white" header>Pontos de Emissão</q-item-label>
        <q-item clickable v-ripple :to="{ name: 'bus' }" active-class="text-secondary">
          <q-item-section avatar>
            <q-icon name="directions_bus" />
          </q-item-section>
          <q-item-section>Ônibus</q-item-section>
        </q-item>
        <q-item clickable v-ripple :to="{ name: 'station' }" active-class="text-secondary">
          <q-item-section avatar>
            <q-icon name="other_houses" />
          </q-item-section>
          <q-item-section>Rodoviária</q-item-section>
        </q-item>

        <q-item-label class="text-white" header>Períodos</q-item-label>
        <q-item clickable v-ripple active-class="text-secondary">
          <q-item-section avatar>
            <q-icon name="event" />
          </q-item-section>
          <q-item-section>Mês</q-item-section>
        </q-item>
        <q-item clickable v-ripple active-class="text-secondary">
          <q-item-section avatar>
            <q-icon name="calendar_month" />
          </q-item-section>
          <q-item-section>Ano</q-item-section>
        </q-item>
        <q-item clickable v-ripple active-class="text-secondary">
          <q-item-section avatar>
            <q-icon name="date_range" />
          </q-item-section>
          <q-item-section>Intervalo</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

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
