<template>
  <div class="pt-14 m-auto">
    <h1 class="text-gray-200 font-semibold font-sans text-xl">{{ text }}</h1>
  </div>
</template>

<script setup>
const props = defineProps({
  text: String,
});
</script>
