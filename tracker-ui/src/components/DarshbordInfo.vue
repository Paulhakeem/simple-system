<template>
  <div class="flex-grow p-6 overflow-auto bg-gray-800">
    <div class="grid grid-cols-3 gap-6">
      <!-- TOTAL MONEY -->
      <div class="h-auto col-span-1 bg-gray-700">
        <div class="text-center my-4">
          <h5>Total(Ksh)</h5>
          <div class="py-2">
            <h1 class="text-4xl font-bold text-green-400">{{ trans.totalMount }}</h1>
          </div>
          <div class="flex gap-2 justify-center items-center">
            <span class="text-sm">Balance:</span>
            <h6 class="text-lg font-semibold">Ksh40,000</h6>
          </div>
        </div>
      </div>

      <!-- ITRACKING -->
      <div class="h-auto col-span-1 bg-gray-700 flex items-center justify-center">
        <div class="text-center my-4 flex space-x-10">
         <div>
            <p class="py-1">Money In</p>
            <div class="flex gap-2">
            <span class="text-green-400 text-md">50%</span>
            <font-awesome-icon :icon="['fas', 'arrow-up']" class="text-green-400 text-xl"/>
          </div>
         </div>
         <div>
            <p class="py-1">Money Out</p>
            <div class="flex gap-2">
            <font-awesome-icon :icon="['fas', 'arrow-down']" class="text-red-500 text-xl"/>
            <span class="text-md text-red-500">20%</span>
          </div>
         </div>
        </div>
      </div>

      <!-- EXPENSES -->
      <div class="h-auto col-span-1 bg-gray-700">
        <div class="text-center my-4">
          <h5>Epenses(Ksh)</h5>
          <div class="py-2">
            <h1 class="text-4xl font-bold text-red-500">-60,000</h1>
          </div>
          <h6 class="text-sm">Money used to pay bills</h6>
        </div>
      </div>

      <!-- BUSINESS STATEMENTS -->
      <div class="h-auto col-span-2 bg-gray-700 py-1">
        <Statement />
      </div>

      <!-- insights -->
      <div class="h-auto col-span-1 bg-gray-700">
        <div class="text-center pt-2">
          <h1 class="text-[#1796d5] text-lg font-regular">Insights</h1>
        </div>
        <div class="flex items-center my-4 mx-2">
          <span class="mr-2">60%</span>
          <div class="relative w-full">
            <div class="overflow-hidden h-2 text-xs flex rounded bg-red-200">
              <div
                style="width: 60%"
                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-400"
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
import { useTransStore } from "../../store/transaction";

const trans = useTransStore()
</script>