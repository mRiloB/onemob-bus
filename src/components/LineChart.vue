<script lang="ts" setup>
import { getCssVar } from 'quasar';

const props = defineProps<{
  title: string;
  categories: string[];
  values: number[];
}>();

const options = {
  chart: {
    height: 500,
    type: 'line',
    id: 'apex-line',
  },
  colors: [getCssVar('primary')],
  dataLabels: {
    enabled: true,
  },
  stroke: {
    curve: 'smooth',
  },
  title: {
    text: props.title,
    align: 'left',
  },
  grid: {
    borderColor: '#e7e7e7',
    row: {
      colors: ['#f3f3f3'],
      opacity: 1,
    },
  },
  markers: {
    size: 1,
    colors: [getCssVar('secondary')],
    strokeColors: [getCssVar('secondary')],
  },
  xaxis: {
    categories: props.categories,
  },
};
const series = [
  {
    name: 'Qtd. Vendas',
    data: props.values,
  },
];
</script>

<template>
  <q-card>
    <q-card-section>
      <apexchart id="apex-line" :options="options" :series="series" />
    </q-card-section>
  </q-card>
</template>

<style lang="scss" scoped></style>
