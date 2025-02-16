<template>
  <div class="flex-grow p-6 overflow-auto bg-gray-800">
    <div class="grid grid-cols-3 gap-6">
      <div class="h-24 col-span-1 bg-gray-700"></div>
      <div class="h-24 col-span-1 bg-gray-700"></div>
      <div class="h-24 col-span-1 bg-gray-700"></div>

      <div class="h-auto col-span-2 bg-gray-700 py-1">
        <Statement />
      </div>

      <!-- insights -->
      <div class="h-auto col-span-1 bg-gray-700">
        <div class="text-center pt-2">
            <h1 class="text-[#1796d5] text-lg font-medium">Insights</h1>
        </div>
        <div class="flex items-center my-4 mx-2">
          <span class="mr-2">60%</span>
          <div class="relative w-full">
            <div class="overflow-hidden h-2 text-xs flex rounded bg-red-200">
              <div
                style="width: 60%"
                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Statement from "./Statement.vue";
</script>
