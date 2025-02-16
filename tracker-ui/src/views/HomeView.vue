<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
  <div
    class="bg-[#222327] my-14 p-8 rounded-tl-4xl rounded-tr-4xl"
  >
    <div class="max-w-lg m-auto justify-center text-left">
     <div class="flex items-center justify-between">
        <h1 class="text-lg font-semibold text-[#1796d5]">Catergorise</h1>
        <font-awesome-icon :icon="['fas', 'square-plus']" class="text-2xl text-[#1796d5] cursor-pointer"/>
     </div>

      <!-- catergories -->
      <div class="pt-2">
        <div class="bg-gray-600 my-4 max-w-lg m-auto p-4 flex gap-4 items-center cursor-pointer">
            <font-awesome-icon :icon="['fas', 'car']" class="text-xl text-[#1796d5]"/>
          <p class="text-gray-300">Travel & Tours</p>
        </div>
        <RouterLink to="/darshboard1" class="bg-gray-600 my-4 max-w-lg m-auto p-4 flex gap-4 items-center cursor-pointer">
            <font-awesome-icon :icon="['fab', 'shopify']" class="text-xl text-[#1796d5]"/>
            <p class="text-gray-300">Shopping</p>
        </RouterLink >
      
        <div class="bg-gray-600 my-4 max-w-lg m-auto p-4 flex gap-4 items-center cursor-pointer">
            <font-awesome-icon :icon="['fas', 'cow']" class="text-xl text-[#1796d5]"/>
            <p class="text-gray-300">Agriculture</p>
        </div>
      </div>
    </div>
  </div>
</template>
