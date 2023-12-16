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
    <!-- <q-card class="q-mb-sm">
      <q-card-section>
        <div class="text-h6">Relatórios</div>
        <div class="row">
          <div class="col-6 col-sm-3 q-pa-xs">
            <q-btn outline icon="date_range" label="Dia" stack color="primary" class="full-width" />
          </div>
          <div class="col-6 col-sm-3 q-pa-xs">
            <q-btn outline icon="event" label="Mês" stack color="primary" class="full-width" />
          </div>
          <div class="col-6 col-sm-3 q-pa-xs">
            <q-btn outline icon="directions_bus" label="Ônibus" stack color="primary" class="full-width"
              :to="{ name: 'bus' }" />
          </div>
          <div class="col-6 col-sm-3 q-pa-xs">
            <q-btn outline icon="storefront" label="Rodoviaria" stack color="primary" class="full-width" />
          </div>
        </div>
      </q-card-section>
    </q-card> -->
    <last-vouchers></last-vouchers>
  </q-page>
</template>
