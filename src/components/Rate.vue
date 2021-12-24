<template>
  <div :style="fontStyle">
    <slot></slot>
    <div class="rate" @mouseout="mouseOut">
      <span @mouseover="mouseOver(num)" v-for="num in 5" :key="num">☆</span>
      <span class="hollow" :style="fontWidth">
        <span @click="onClickRate(num)" @mouseover="mouseOver(num)" v-for="num in 5" :key="num">★</span>
      </span>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed, ref, defineEmits } from 'vue';

let props = defineProps({
  modelValue: Number,
  theme: {
    type: String,
    default: 'orange'
  }
});

// themes
const themeObj = { 'black': '#00', 'white': '#fff', 'red': '#f5222d', 'orange': '#fa541c', 'yellow': '#fadb14', 'green': '#73d13d', 'blue': '#40a9ff',}
const fontStyle = computed(()=> { return `color:${themeObj[props.theme]};`})

// width
let width = ref(props.modelValue)

function mouseOut() {
  width.value = props.modelValue;
}

function mouseOver(i) {
  width.value = i;
}

let fontWidth = computed(() => {
  return `width:${width.value}em`;
})

// emit rate
let emits = defineEmits(['update:modelValue']);

function onClickRate(i) {
  emits('update:modelValue', i);
}
</script>

<style scoped>
.rate {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.rate > span.hollow {
  position: absolute;
  left: 0;
  top: 0;
  display: inline-block;
  width: 0;
  overflow: hidden;
}
</style>