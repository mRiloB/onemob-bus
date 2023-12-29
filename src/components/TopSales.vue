<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useSales } from 'src/composables';
import { getCssVar } from 'quasar';

const us = useSales();
const interval = ref<NodeJS.Timeout>();
const rows = ref<{
  name: string;
  count: number;
}[]>([]);
const isLoading = ref<boolean>(false);
// chart data
const series = ref<number[]>([]);
// chart config
const categories = ref<string[]>([]);

async function loadRows () {
  interval.value = setInterval(async () => {
    loadVouchers();
  }, 15 * 1000);
}

async function loadVouchers () {
  isLoading.value = true;
  const data = await us.top5Sales();
  rows.value = data.reverse();
  categories.value = rows.value.map(row => row.name).slice(0, 5);
  series.value = rows.value.map(row => row.count).slice(0, 5);
  isLoading.value = false;
}

onMounted(async () => {
  clearInterval(interval.value);
  await loadVouchers();
  await loadRows();
});
onBeforeUnmount(() => clearInterval(interval.value));
</script>

<template>
  <q-card>
    <q-linear-progress indeterminate v-if="isLoading" />
    <q-card-section>
      <apexchart type="bar" :options="{
        chart: {
          type: 'bar',
          height: 240
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
          }
        },
        colors: [getCssVar('primary')],
        dataLabels: {
          enabled: true,
          formatter: function (val: string) {
            return val;
          },
          dropShadow: {
            enabled: true,
          },
        },
        xaxis: {
          categories,
        }
      }" :series="[{
  name: 'Qtd',
  data: series,
}]"></apexchart>
    </q-card-section>
  </q-card>
</template>

<style lang="scss" scoped></style>
