<template>
  <div class="w-full px-4 mx-auto">
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3 class="font-semibold text-base text-blueGray-700">
            Business Name
          </h3>
        </div>

        <!-- adding statement -->
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <div class="text-right">
            <button
              @click="toggleInput"
              class="bg-[#1796d5] text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 cursor-pointer"
            >
              Add
            </button>
          </div>

          <div
            v-if="showInput"
            :class="{ 'opacity-100': showInput, 'opacity-0': !showInput }"
            @blur="hideInput"
            class="absolute p-4 bg-gray-500 duration-300 transition-opacity w-64"
          >
            <label>Item Name</label>
            <div class="relative space-y-4">
              <input
                ref="inputField"
                type="text"
                placeholder="Enter item name..."
                class="border rounded p-2 focus:outline-none text-gray-300"
              />
              <label>Amount</label>
              <input
                ref="inputField"
                type="text"
                placeholder="Enter item amount..."
                class="border rounded p-2 focus:outline-none text-gray-300"
              />
              <input
                ref="inputField"
                type="date"
                class="border rounded p-2 focus:outline-none text-gray-300"
              />
            </div>
            <button
              class="border-2 border-gray-300 rounded-lg px-2 py-2 text-gray-300 cursor-pointer mt-3"
            >
              Create
            </button>
          </div>
        </div>
        <!-- end of statement -->
      </div>
    </div>

    <div class="block w-full overflow-x-auto">
      <table class="items-center w-full border-collapse">
        <!-- TABLE HEAD -->
        <thead class="thead-light bg-gray-800">
          <tr>
            <th
              class="px-6 align-middle py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
            >
             Item Name
            </th>
            <th
              class="px-6 align-middle py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
            >
              Amount(Ksh)
            </th>
            <th
              class="text-center px-6 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold min-w-140-px"
            >
              date
            </th>
          </tr>
        </thead>

        <!-- TABLE BODY -->
        <tbody>
          <tr>
            <th
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
            >
              <font-awesome-icon
                :icon="['fas', 'arrow-up']"
                class="text-green-400"
              />
              Fresh Water
            </th>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-[#1796d5] font-bold"
            >
              1,480
            </td>

            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
              <div class="items-center text-center">
                <p>4th March 2025</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const showInput = ref(false);
const inputField = ref(null);

const toggleInput = () => {
  showInput.value = !showInput.value;
  if (showInput.value) {
    inputField.value.focus();
  }
};

const hideInput = () => {
  showInput.value = false;
};
</script>
