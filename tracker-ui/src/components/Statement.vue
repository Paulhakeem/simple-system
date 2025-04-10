<template>
  <div class="w-full px-4 mx-auto">
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <!-- filter -->
        <font-awesome-icon :icon="['fas', 'ellipsis-vertical']" class="text-[#1796d5]"/>
        <!--  -->
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
          <addTrans
            v-if="showInput"
            :class="{ 'opacity-100': showInput, 'opacity-0': !showInput }"
            @blur="hideInput"
          />
        </div>
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

        <tbody v-if="transaction.statments.length === 0">
          <tr>
            <th
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
            >
              <Relorder />
            </th>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
              <Relorder />
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
              <Relorder />
            </td>
          </tr>
        </tbody>
        <!-- TABLE BODY -->
        <tbody v-else>
          <tr
            v-for="data in transaction.statments"
            :key="data._id"
            class="border-b-1 border-gray-500"
          >
            <th
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
            >
              <font-awesome-icon
                v-if="data.amount > 0"
                :icon="['fas', 'arrow-up']"
                class="text-green-400"
              />
              <font-awesome-icon
                v-else
                :icon="['fas', 'arrow-down']"
                class="text-red-500"
              />
              {{ data.name }}
            </th>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-[#1796d5] font-bold"
            >
              {{ data.amount }}
            </td>

            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
              <div class="items-center text-center">
                <p>{{ data.date }}</p>
              </div>
            </td>
            <td>
              <span
                @click="deleteTrans(data._id)"
                class="flex items-center text-red-500 cursor-pointer"
              >
                <font-awesome-icon :icon="['fas', 'circle-xmark']" />
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useTransStore } from "../../store/transaction";
import { useUserStore } from "../../store/user";
import { useDeleteStore } from "../../store/delete";
import addTrans from "./addTrans.vue";
import Relorder from "./Relorder.vue";

const showInput = ref(false);
const transaction = useTransStore();
const { getUser } = useUserStore();
const { deleteTrans } = useDeleteStore();

const toggleInput = () => {
  showInput.value = !showInput.value;
};

const hideInput = () => {
  showInput.value = false;
};
// get user
onMounted(async () => {
  await getUser();
});
// delete trans
</script>
