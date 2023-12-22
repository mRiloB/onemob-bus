<script lang='ts' setup>
import { onMounted, ref, toRefs } from 'vue';
import { useSales, useSwal } from 'src/composables';
import DateRange from './DateRange.vue';

const props = defineProps<{
  type: 'onibus' | 'rodoviaria',
  title: string,
  icon: string,
}>();
const { type, title, icon } = toRefs(props);
const us = useSales();
const swal = useSwal();
const isLoading = ref<boolean>(false);
const options = ref<{
  name: string;
  count: number;
}[]>([]);
const dateRange = ref<{ from: string, to: string } | string>('');
const issued = ref<boolean>(false);

async function loadOptions () {
  isLoading.value = true;
  try {
    let aux;
    const dtRange = typeof dateRange.value == 'string' ? { from: dateRange.value, to: dateRange.value } : dateRange.value;
    const { from } = dtRange;
    if (from.length == 0) {
      aux = await us.totalSalesByPoint(type.value);
    } else {
      aux = await us.totalSalesByDateRange(type.value, dtRange);
    }
    if (issued.value) {
      aux = aux.filter(opt => opt.count > 0);
    }
    options.value = aux;
  } catch (err) {
    console.log(err);
    await swal.error('Ops...', JSON.stringify(err));
  } finally {
    isLoading.value = false;
  }
}

onMounted(async () => await loadOptions());
</script>

<template>
  <div>
    <div class="text-h5">{{ title }}</div>
    <q-card class="q-my-sm">
      <q-card-section>
        <DateRange label="Período (De - Até)" v-model="dateRange" />
        <div class="q-mt-sm row">
          <q-checkbox v-model="issued" label="Essconder não emitidos" />
          <q-space></q-space>
          <q-btn icon="search" color="primary" @click="loadOptions" />
        </div>
      </q-card-section>
    </q-card>

    <q-list bordered separator class="rounded-borders bg-accent">
      <q-linear-progress indeterminate v-if="isLoading" />
      <q-item clickable v-ripple v-for="(point, k) in options" :key="k">
        <q-item-section avatar>
          <q-avatar color="primary" rounded>
            <q-icon :name="icon" color="white" />
          </q-avatar>
        </q-item-section>
        <q-item-section>{{ point.name }}</q-item-section>
        <q-item-section side>{{ point.count }}</q-item-section>
      </q-item>
    </q-list>
  </div>
</template>
