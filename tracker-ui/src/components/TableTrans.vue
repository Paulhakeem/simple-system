<template>
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
    <!-- Loader -->
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
    <!-- End of loader -->
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
            @click="eraiseTrans(data._id)"
            class="flex items-center text-red-500 cursor-pointer"
          >
            <font-awesome-icon :icon="['fas', 'circle-xmark']" />
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { onMounted } from "vue";
import { useTransStore } from "../../store/transaction";
import { useUserStore } from "../../store/user";
import { useDeleteStore } from "../../store/delete";
import Relorder from "./Relorder.vue";

const transaction = useTransStore();
const { getUser } = useUserStore();
const { deleteTrans } = useDeleteStore();

const eraiseTrans = async (transId) => {
  if (confirm("Are you sure you want to delete this transaction?")) {
    await deleteTrans(transId)
  }
};
onMounted(async () => {
  await getUser();
});
</script>
