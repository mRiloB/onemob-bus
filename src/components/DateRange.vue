<script lang='ts' setup>
import { ref, toRefs, onMounted } from 'vue';
import { QDate, QPopupProxy } from 'quasar';

type DateRange = { from: string; to: string; } | string;
type EvtRange = {
  from: {
    year: number;
    month: number;
    day: number;
  };
  to: {
    year: number;
    month: number;
    day: number;
  };
};

const emit = defineEmits(['update:model-value']);
const props = defineProps<{
  modelValue: DateRange;
  label: string;
}>();
const { modelValue } = toRefs(props);
const inputModel = ref('Selecione o período');
const qdref = ref<QDate | null>(null);
const ppref = ref<QPopupProxy | null>(null);

const onDateRangeChange = ({ from, to }: EvtRange) => {
  const fmt = (n: number) => n < 10 ? `0${n}` : n;
  const start = `${fmt(from.day)}/${fmt(from.month)}/${from.year}`;
  const end = `${fmt(to.day)}/${fmt(to.month)}/${to.year}`;
  console.log(`${start} - ${end}`);
  inputModel.value = `${start} - ${end}`;
}

onMounted(() => {
  const today = new Date();
  const aux = {
    year: today.getFullYear(),
    month: today.getMonth(),
    day: today.getDate(),
  };
  qdref.value?.setEditingRange(aux, aux);
})
</script>

<template>
  <div class="date-range">
    <label for="date-range">{{ label }}</label>
    <q-input class="date-range__input" outlined :model-value="inputModel" id="date-range" readonly dense
      @click="ppref?.show()">
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy ref="ppref" cover transition-show="scale" transition-hide="scale">
            <q-date ref="qdref" :model-value="modelValue" mask="YYYY-MM-DD"
              @update:model-value="emit('update:model-value', $event)" @range-end="onDateRangeChange" range>
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="OK" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

<style lang='scss' scoped>
.date-range__input {
  margin-top: 2px;
  cursor: pointer;

  input {
    cursor: pointer;
  }
}
</style>
