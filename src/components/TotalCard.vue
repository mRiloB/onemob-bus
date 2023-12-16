<script lang='ts' setup>
import { computed, onBeforeUnmount, onMounted, ref, toRefs } from 'vue';
import { useVouchers } from 'src/composables';
import { Voucher } from 'src/models';

const props = defineProps<{
  title: string;
  flag: 'total' | 'onibus' | 'rodoviaria';
}>();
const { title, flag } = toRefs(props);
const interval = ref<NodeJS.Timeout>();
const sb = useVouchers();
const vouchers = ref<Voucher[]>([]);
const totalCurrency = computed(() => {
  const value = vouchers.value.length * 6;
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
});
const isLoading = ref<boolean>(false);

async function loadVouchers () {
  isLoading.value = true;
  let data: Voucher[] = [];
  switch (flag.value) {
    case 'total':
      data = await sb.getVouchers();
      break;
    case 'onibus':
      data = await sb.getAllByPointType('BU');
      break;
    case 'rodoviaria':
      data = await sb.getAllByPointType('RD');
      break;
    default:
      break;
  }
  isLoading.value = false;
  vouchers.value = data;
}

async function loadTotal () {
  clearInterval(interval.value);
  interval.value = setInterval(async () => {
    await loadVouchers();
  }, 15 * 1000);
}

onMounted(async () => {
  await loadVouchers();
  await loadTotal();
});
onBeforeUnmount(() => clearInterval(interval.value));
</script>

<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">{{ title }}</div>
      <q-spinner color="primary" size="3em" v-if="isLoading" />
      <div v-else>
        <div class="text-h4 text-center">{{ vouchers.length }}</div>
        <div class="text-h6">Total: {{ totalCurrency }}</div>
      </div>
    </q-card-section>
  </q-card>
</template>

<style lang='scss' scoped></style>
