<template>
  <div class="flex-grow p-6 overflow-auto bg-gray-800">
    <div class="grid grid-cols-3 gap-6">
      <!-- TOTAL MONEY -->
      <div class="h-auto bg-gray-700 W-96">
        <div id="flex-box" class="text-center my-4">
          <h5>Income(Ksh)</h5>
          <div class="py-2">
            <h1 class="text-4xl font-bold text-green-400">{{ trans.income }}</h1>
          </div>
          <div id="flex-box-span" class="flex gap-2 justify-center items-center">
            <span class="text-sm">Total Amount:</span>
            <h6 class="text-lg font-semibold"><span class="text-xs">Ksh</span>{{ trans.totalAmout }}</h6>
          </div>
        </div>
      </div>

      <!-- ITRACKING -->
      <div class="h-auto bg-gray-700 flex items-center justify-center">
        <div id="progress" class="text-center my-4 flex space-x-10">
         <div id="col">
            <p class="py-1">Money In</p>
            <div class="flex gap-2">
            <span class="text-green-400 text-md">{{ trans.getIncome }}%</span>
            <font-awesome-icon :icon="['fas', 'arrow-up']" class="text-green-400 text-xl"/>
          </div>
         </div>
         <div>
            <p class="py-1">Money Out</p>
            <div class="flex gap-2">
            <font-awesome-icon :icon="['fas', 'arrow-down']" class="text-red-500 text-xl"/>
            <span class="text-md text-red-500">{{trans.getExp}}%</span>
          </div>
         </div>
        </div>
      </div>

      <!-- EXPENSES -->
      <div class="h-auto col-span-1 bg-gray-700">
        <div id="flex-box" class="text-center my-4">
          <h5>Epenses(Ksh)</h5>
          <div class="py-2">
            <h1 class="text-4xl font-bold text-red-500">{{ trans.totalExpenses }}</h1>
          </div>
          <h6 class="text-sm">Money used to pay bills</h6>
        </div>
      </div>
    </div>

       <!-- BUSINESS STATEMENTS -->
    <div class="h-auto col-span-1 bg-gray-700 py-1 w-full mt-10">
        <Statement />
      </div>
  </div>
</template>

<script setup>
import Statement from "./Statement.vue";
import { useTransStore } from "../../store/transaction";

const trans = useTransStore()
</script>
