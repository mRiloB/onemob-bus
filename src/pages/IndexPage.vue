<script lang="ts" setup>
// import LastVouchers from 'src/components/LastVouchers.vue';
// import TotalCard from 'src/components/TotalCard.vue';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const urouter = useRouter();
onMounted(() => urouter.replace({ name: 'bus' }));
</script>

<template>
  <q-page padding>
    <div class="text-h6">dashboard maneira aqui</div>
  </q-page>
</template>
