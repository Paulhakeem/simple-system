<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import HomePage from "./components/HomePage.vue";

const header = ref("CONTROL YOUR EXPENSES");
</script>

<template>
  <main>
    <HomePage :text="header" />
    <div class="flex space-x-7 justify-center pt-6">
      <RouterLink to="">
        <button
          class="border-2 border-[#1796d5] rounded-lg px-3 py-2 text-[#1796d5] cursor-pointer hover:bg-[#1796d5] hover:text-gray-200"
        >
          Get Started
        </button>
      </RouterLink>
      <RouterLink to="">
        <button
          class="border-2 border-[#1796d5] rounded-lg px-3 py-2 w-26 text-[#1796d5] cursor-pointer hover:bg-[#1796d5] hover:text-gray-200"
        >
          Explore
        </button>
      </RouterLink>
    </div>
    <RouterView />
  </main>
</template>
