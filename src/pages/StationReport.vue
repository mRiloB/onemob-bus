<script lang='ts' setup>
import { onMounted, ref } from 'vue';
import { useStation } from 'src/composables';
import { Point } from 'src/models';

const us = useStation();
const isLoading = ref<boolean>(false);
const stationPoints = ref<Point[]>([]);
const options = ref<{
  name: string;
  count: number;
}[]>([]);

async function loadBus () {
  isLoading.value = true;
  stationPoints.value = await us.getAll();
  let aux = await us.getCountByPoint(stationPoints.value);
  options.value = aux.filter(point => point.count > 0).sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
  });
  isLoading.value = false;
}

onMounted(async () => await loadBus());
</script>

<template>
  <q-page padding>
    <div class="text-h5">Emitidas por Rodoviária</div>

    <q-list padding bordered class="rounded-borders bg-accent q-mt-sm">
      <q-expansion-item dense dense-toggle expand-separator icon="tune" label="Filtros">
        <q-card>
          <q-card-section>
            em breve...
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>

    <q-list bordered separator class="rounded-borders bg-accent q-mt-sm">
      <q-linear-progress indeterminate v-if="isLoading" />
      <q-item clickable v-ripple v-for="(point, k) in options" :key="k">
        <q-item-section avatar>
          <q-icon name="other_houses" />
        </q-item-section>
        <q-item-section>{{ point.name }}</q-item-section>
        <q-item-section side>{{ point.count }}</q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>
