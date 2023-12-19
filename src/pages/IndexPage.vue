<script lang="ts" setup>
import LastVouchers from 'src/components/LastVouchers.vue';
import TotalCard from 'src/components/TotalCard.vue';
</script>

<template>
  <q-page padding>
    <div class="row">
      <div class="col-12 col-sm-4 q-pa-xs">
        <total-card title="Total Ônibus" flag="onibus" />
      </div>
      <div class="col-12 col-sm-4 q-pa-xs">
        <total-card title="Total Rodoviárias" flag="rodoviaria" />
      </div>
      <div class="col-12 col-sm-4 q-pa-xs">
        <total-card title="Total" flag="total" />
      </div>
    </div>
    <div class="q-mb-xs"></div>
    <last-vouchers></last-vouchers>
  </q-page>
</template>
