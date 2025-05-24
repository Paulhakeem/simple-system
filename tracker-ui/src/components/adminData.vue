<template>
  <div class="w-full mb-6 lg:mb-0 lg:w-1/2 px-4 flex flex-col">
    <div
      class="flex-grow flex flex-col bg-gray-200 border-t border-b sm:rounded sm:border shadow overflow-hidden"
    >
      <h3 class="px-6 py-4 font-semibold text-lg text-[#1796d5]">
        Manage Shops
      </h3>
      <div class="flex justify-between px-6 mb-px pb-2">
        <form class="flex gap-2">
          <input
            type="text"
            v-model="shopName"
            @keyup.enter="createShop"
            class="bg-gray-500 mt-2 pl-2 text-sm focus:outline-none text-gray-100"
            placeholder="Add Shop Name.."
          />
          <button
            type="button"
            @click="createShop"
            class="appearance-none px-2 text-gray-100 mt-2 text-blue-dark bg-green-500 border-blue-dark mr-3 cursor-pointer"
          >
            Add
          </button>
        </form>
        <!-- END OF FORM -->
        <div class="flex">
          <p class="text-lg text-gray-500 mt-2 font-normal">Percentage(%)</p>
        </div>
      </div>
      <div class="flex justify-between divide-y divide-gray-200 px-6 mt-6">
        <p class="text-gray-600">Shop One</p>
        <div class="flex gap-4">
          <p class="text-gray-500 text-green-500">Ksh 100,000</p>
          <p class="text-gray-500 text-red-500">Ksh 100,000</p>
          <p class="text-gray-500">Ksh 60,000</p>
        </div>
      </div>

      <!--  -->
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "../../store/user";
import { useShopStore } from "../../store/shops";
import { useDeleteStore } from "../../store/delete";
import { ref } from "vue";

const { user } = useUserStore();
const { shops, addShop } = useShopStore();
const { deleteShop } = useDeleteStore();

const shopName = ref("");

const createShop = async () => {
  if (shopName.value === "") {
    return;
  }
  await addShop(shopName.value, user._id);
  shopName.value = "";
};
</script>
