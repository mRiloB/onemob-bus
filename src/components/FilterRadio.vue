<script lang='ts' setup>
import { toRefs } from 'vue';
const emit = defineEmits(['update:model-value']);
const props = defineProps<{
  modelValue: string;
  label: string;
  val: string;
}>();
const { modelValue, label, val } = toRefs(props);
</script>

<template>
  <q-radio :model-value="modelValue" :val="val" :label="label" @update:model-value="emit('update:model-value', $event)"
    checked-icon="task_alt" unchecked-icon="panorama_fish_eye" />
</template>

<style lang='scss' scoped></style>
