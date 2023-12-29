<script lang="ts" setup>
import LastVouchers from 'src/components/LastVouchers.vue';
import TopSales from 'src/components/TopSales.vue';
import TotalCard from 'src/components/TotalCard.vue';
</script>

<template>
  <q-page padding>
    <div class="text-h6">
      <div class="row">
        <div class="col-12 col-md-3">
          <total-card title="Total Emitidas" flag="total" />
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-6 q-pa-xs">
          <top-sales />
        </div>
        <div class="col-12 col-md-6 q-pa-xs">
          <last-vouchers />
        </div>
      </div>

    </div>
  </q-page>
</template>
