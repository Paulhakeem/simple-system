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
      <!-- SHOP LIST -->

      <div v-if="shops.length === 0">
        <div
          class="text-center text-red-700 animate-pulse px-6 justify-center my-10"
        >
          <font-awesome-icon
            :icon="['fas', 'circle-exclamation']"
            class="mr-2 h-5 w-5 text-red-700 text-6xl"
          />
          <p class="text-red-700 text-xl">No Shops Added!</p>
        </div>
      </div>
      <div>
        <div
          v-for="shop in shops"
          :key="shop.id"
          class="flex justify-between px-6 mt-6 bg-gray-100 p-1.5 px-1.4"
        >
          <div class="flex gap-2 items-center">
            <font-awesome-icon
              :icon="['fas', 'xmark']"
              class="text-red-500 cursor-pointer"
              @click="eraiseShop(shop._id)"
            />
            <p class="text-gray-600">{{ shop.name }}</p>
          </div>
          <div class="flex justify-between gap-2 w-64 items-center">
            <div class="w-full bg-gray-200 rounded-full h-4">
              <div
                class="bg-green-500 h-4 text-xs rounded-full p-0.5 transition-all duration-500 font-medium text-center leading-none"
                style="width: 20%"
              >
                10%
              </div>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-4">
              <div
                class="bg-red-500 h-4 text-xs rounded-full p-0.5 transition-all duration-500 font-medium text-center leading-none"
                style="width: 40%"
              >20%</div>
            </div>
          </div>
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

const eraiseShop = async (shopId) => {
  if (confirm("Are you sure you want to delete this shop?")) {
    await deleteShop(shopId);
  }
};

const createShop = async () => {
  if (shopName.value === "") {
    return;
  }
  await addShop(shopName.value, user._id);
  shopName.value = "";
};
</script>
