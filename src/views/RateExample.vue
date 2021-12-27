<template>
  <Rate v-model="score">评分</Rate>
</template>

<script setup lang="ts">
import Rate from "../components/Rate.vue";
import { ref } from 'vue';

let score = ref(3.5);
function onRateChange(num: number) {
  score.value = num;
}
</script>

<style scoped>

</style>