<script lang='ts' setup>
import { toRefs, onMounted } from 'vue';

const props = defineProps<{
  point: string;
  dtFrom: string;
  dtTo: string;
}>();
const { point, dtFrom, dtTo } = toRefs(props);

onMounted(() => null);
</script>

<template>
  <pre>{
    {{ point }},
    {{ dtFrom }},
    {{ dtTo }},
  }</pre>
</template>

<style lang='scss' scoped></style>
