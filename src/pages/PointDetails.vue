<script lang='ts' setup>
import { ref, onMounted } from 'vue';
import { useBusDetailsStore } from 'src/stores/bus-details';
import { col, colDate } from 'src/helpers/table';
import { Voucher } from 'src/models/voucher';
import { useVouchers } from 'src/composables/voucher';

const bd = useBusDetailsStore();
const busName = ref<string>('');
const sbVou = useVouchers();
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

async function loadVouchers () {
  isLoading.value = true;
  const data = await sbVou.getAllByPoint(busName.value);
  rows.value = data.reverse();
  isLoading.value = false;
}

onMounted(async () => {
  const bdName = bd.name;
  busName.value = bdName;
  await loadVouchers();
});
</script>

<template>
  <q-page padding>
    <div class="text-h5 q-mb-sm">{{ busName }}</div>
    <q-table :rows="rows" :columns="columns" row-key="id" :loading="isLoading" dense>
      <template v-slot:top>
        <div class="text-h6">Vouchers Emitidos</div>
        <q-space></q-space>
        <!-- <q-btn color="primary" :to="{ name: 'bus' }" v-show="!all">Mostrar todos</q-btn> -->
      </template>
    </q-table>
  </q-page>
</template>

<style lang='scss' scoped></style>
