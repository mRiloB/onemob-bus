<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useQuasar } from 'quasar';
import { useFilter } from 'src/composables';
import DateRange from 'src/components/DateRange.vue';
import FilterRadio from 'src/components/FilterRadio.vue';
import { FilterType } from 'src/models';

const $q = useQuasar();
const uFilter = useFilter();
const isLoading = ref(false);
const dateModel = ref({ from: '', to: '' });
const pointType = ref<'all' | 'onibus' | 'rodoviaria'>('all');
const items = ref<FilterType[]>([]);

const onFilter = async () => {
  if (!dateModel.value.from) return;
  isLoading.value = true;
  try {
    const data = await uFilter.filterAllVouchersByPoint(dateModel.value);
    items.value = data;
  } catch (err) {
    console.log(err);
  } finally {
    isLoading.value = false;
  }
};
const _filteredItems = computed(() => pointType.value == 'all' ? items.value : items.value.filter(item => item.type == pointType.value));
const _auxBtn = computed(() => $q.screen.sm || $q.screen.md || $q.screen.lg || $q.screen.xl ? 'q-mt-lg' : '');
</script>

<template>
  <q-page padding>
    <span class="text-h5">Vouchers vendidos</span>
    <q-card class="q-mt-sm">
      <q-card-section>
        <div class="row">
          <div class="col-12 col-sm-10 q-pa-xs">
            <date-range label="Período da venda:" v-model="dateModel" />
          </div>
          <div class="col-12 col-sm-2 q-pa-xs align-center justify-center">
            <q-btn :class="['full-width', _auxBtn]" size="md" color="primary" @click="onFilter">Filtrar</q-btn>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="row">
              <filter-radio v-model="pointType" label="Todos" val="all" />
              <filter-radio v-model="pointType" label="Ônibus" val="onibus" />
              <filter-radio v-model="pointType" label="Rodoviária" val="rodoviaria" />
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>

    <q-card class="q-mt-sm">
      <q-card-section>
        <div class="row justify-center align-center" v-if="isLoading">
          <q-spinner-radio color="primary" size="2em" />
        </div>
        <q-list bordered separator v-else>
          <q-item clickable v-ripple v-for="(item, k) in _filteredItems" :key="k">
            <q-item-section>
              <q-item-label>{{ item.point }}</q-item-label>
              <q-item-label caption>Qtd: {{ item.qtd }}</q-item-label>
            </q-item-section>
            <q-item-section side>
              {{ item.total }}
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<style lang="scss" scoped></style>
