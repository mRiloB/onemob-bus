<script lang='ts' setup>
import { ref, onMounted } from 'vue';
import { useBusDetailsStore } from 'src/stores/bus-details';

const bd = useBusDetailsStore();
const busName = ref<string>('');

onMounted(() => {
  const bdName = bd.name;
  busName.value = bdName;
});
</script>

<template>
  <pre>{
    bus: {{ busName }},
  }</pre>
</template>

<style lang='scss' scoped></style>
