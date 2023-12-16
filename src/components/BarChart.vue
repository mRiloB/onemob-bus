<script lang="ts" setup>
import { getCssVar } from 'quasar';

const props = defineProps<{
  title: string;
  categories: string[];
  values: number[];
}>();

const config = {
  options: {
    title: {
      text: props.title,
      align: 'left',
    },
    chart: {
      id: 'apex-bar',
      height: 500,
      type: 'bar',
    },
    xaxis: {
      categories: props.categories,
    },
    colors: [getCssVar('secondary')],
    plotOptions: {
      bar: {
        columnWidth: '50%',
        endingShape: 'rounded',
        colors: {
          backgroundBarColors: [getCssVar('primary')],
          backgroundBarOpacity: 1,
        },
      },
    },
  },
  series: [
    {
      name: 'Qtd. Vendas',
      data: props.values,
    },
  ],
};
</script>

<template>
  <q-card>
    <q-card-section>
      <apexchart
        id="apex-bar"
        :options="config.options"
        :series="config.series"
      />
    </q-card-section>
  </q-card>
</template>

<style lang="scss" scoped></style>
