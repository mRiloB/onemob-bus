<script lang="ts" setup>
// const emit = defineEmits(['close']);
</script>

<template>
  <q-card style="width: 300px">
    <q-card-section class="row items-center q-pb-none">
      <div class="text-h6">Escolha um</div>
      <q-space />
      <q-btn icon="close" flat round dense v-close-popup />
    </q-card-section>

    <q-card-section>
      <div class="row q-gutter-sm q-mb-sm">
        <div class="col">
          <q-btn
            outline
            icon="date_range"
            label="Dia"
            stack
            color="primary"
            class="full-width"
          />
        </div>
        <div class="col">
          <q-btn
            outline
            icon="event"
            label="Mês"
            stack
            color="primary"
            class="full-width"
          />
        </div>
      </div>
      <div class="row q-gutter-sm q-mb-sm">
        <div class="col">
          <q-btn
            outline
            icon="directions_bus"
            label="Ônibus"
            stack
            color="primary"
            class="full-width"
          />
        </div>
        <div class="col">
          <q-btn
            outline
            icon="storefront"
            label="Rodoviaria"
            stack
            color="primary"
            class="full-width"
          />
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<style lang="scss" scoped></style>
