<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, toRefs } from 'vue';
import { col, colDate } from 'src/helpers/table';
import { Voucher } from 'src/models/voucher';
import { useVouchers } from 'src/composables/voucher';

const props = defineProps<{
  all?: boolean;
}>();
const { all } = toRefs(props);

const sbVou = useVouchers();
const interval = ref<NodeJS.Timeout>();
const rows = ref<Voucher[]>([]);
const isLoading = ref<boolean>(false);
const columns = [
  col({
    label: 'ID',
    field: 'id',
  }),
  col({
    label: 'PdV',
    field: 'point_name',
  }),
  col({
    label: 'Voucher',
    field: 'voucher',
  }),
  colDate({
    label: 'Emitida em',
    field: 'created_at',
  }),
];

async function loadRows () {
  interval.value = setInterval(async () => {
    loadVouchers();
  }, 15 * 1000);
}

async function loadVouchers () {
  isLoading.value = true;
  const data = await sbVou.getVouchers();
  rows.value = data.reverse();
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
  <q-table :rows="rows" :columns="columns" row-key="id" :hide-bottom="!all" :loading="isLoading" dense>
    <template v-slot:top>
      <div class="text-h6">Últimas vendas</div>
      <q-space></q-space>
      <!-- <q-btn color="primary" :to="{ name: 'bus' }" v-show="!all">Mostrar todos</q-btn> -->
    </template>
  </q-table>
</template>

<style lang="scss" scoped></style>
