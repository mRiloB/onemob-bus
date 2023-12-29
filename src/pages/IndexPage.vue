<script lang="ts" setup>
import LastVouchers from 'src/components/LastVouchers.vue';
import TopSales from 'src/components/TopSales.vue';
</script>

<template>
  <q-page padding>
    <div class="text-h6">
      <div class="row">
        <div class="col">
          <top-sales />
        </div>
      </div>
      <div class="row q-mt-sm">
        <div class="col">
          <last-vouchers />
        </div>
      </div>
    </div>
  </q-page>
</template>
