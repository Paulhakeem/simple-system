<template>
  <div class="w-full mb-6 lg:mb-0 lg:w-1/2 px-4 flex flex-col">
    <div
      class="flex-grow flex flex-col bg-gray-200 border-t border-b sm:rounded sm:border shadow overflow-hidden"
    >
      <div class="flex justify-between px-6 mb-px pt-3">
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
          <p class="text-xl text-gray-500 mt-2">Percentage(%)</p>
        </div>
      </div>
      <div v-for="shop in shops" :key="shop.id">
        <p class="text-gray-400">{{ shop.name }}</p>
        <!-- <div v-if="user._id === shop.userId"
          class="flex-grow flex px-6 py-2 text-grey-darker items-center border-b mx-4"
        >
          <div class="w-2/5 xl:w-1/4 px-4 flex items-center">
            <div class="rounded-full bg-orange-400 inline-flex mr-3">
              <font-awesome-icon
                icon="fa-solid fa-circle"
                class="text-orange-400 text-lg"
              />
            </div>
            <span class="text-lg">{{ shop.name }}</span>
          </div>
        </div> -->
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
