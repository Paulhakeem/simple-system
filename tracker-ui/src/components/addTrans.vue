<template>
  <div
    class="absolute p-4 bg-gray-500 duration-300 transition-opacity w-64 rounded-md"
  >
    <label class="text-gray-200 text-sm">Item Name</label>
    <div class="relative space-y-4">
      <input
        v-model="name"
        type="text"
        placeholder="Enter item name..."
        class="border rounded p-2 focus:outline-none text-gray-300"
        required
      />
      <label class="text-gray-200 text-sm"
        >(Negative(-)-Expenses, Positive(+)-Income)</label
      >
      <input
        v-model="amount"
        type="number"
        placeholder="Enter amount..."
        class="border rounded p-2 focus:outline-none text-gray-300"
        required
      />
    </div>
    <button
      @click="addTrans"
      class="border-2 border-gray-300 rounded-lg px-2 py-2 text-gray-300 cursor-pointer mt-3"
    >
      Create
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useTransStore } from "../../store/transaction";
import { useUserStore } from "../../store/user";
const transaction = useTransStore();
const { user } = useUserStore();

const name = ref("");
const amount = ref(0);
const date = new Date().toISOString().split("T")[0];

const addTrans = async () => {
  await transaction.createTransaction(name.value, amount.value, date, user._id);
  name.value = "";
  amount.value = "";
};
</script>
