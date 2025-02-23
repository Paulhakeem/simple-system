<template>
  <div class="pt-14 m-auto">
    <h1  class="w-full text-4xl font-medium text-center text-[#1796d5] uppercase sm:text-4xl">{{ text }}</h1>
  </div>
</template>

<script setup>
const props = defineProps({
  text: String,
});
</script>
