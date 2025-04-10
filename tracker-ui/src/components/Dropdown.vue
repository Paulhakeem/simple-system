<template>
  <transition
    enter-active-class="transition ease-out duration-100"
    enter-from-class="transform opacity-0 scale-95"
    enter-to-class="transform opacity-100 scale-100"
    leave-active-class="transition ease-in duration-75"
    leave-from-class="transform opacity-100 scale-100"
    leave-to-class="transform opacity-0 scale-95"
  >
    <div class="bg-[#1796d5] mt-[10em] rounded-md top-0 bottom-5">
      <slot/>
      <form class="relative">
        <input
          v-model="name"
          type="text"
          placeholder="Add Category.."
          class="mx-2 mt-5 pl-2 p-1.5 outline-none border border-gray-200 text-gray-200 text-sm font-light"
        />
        <font-awesome-icon
          @click="add"
          :icon="['fas', 'square-plus']"
          class="absolute end-2.5 bottom-2.5 text-gray-200 cursor-pointer text-2xl items-center"
        />
      </form>
      <div v-if="shops.length == 0">
        <div class="flex items-center justify-center mt-4 mx-auto">
          <div
            class="border-2 border-gray-200 border-dotted rounded-full size-8 animate-spin"
          ></div>
          <p class="text-gray-200 p-4 text-center italic">Fetching Data...</p>
        </div>
      </div>
      <div v-for="shop in shops" :key="shop._id">
        <ul class="py-1">
          <li
            class="px-3 py-2 cursor-pointer border-b border-b-gray-200 hover:bg-gray-200 w-full text-gray-800 first-letter:uppercase"
          >
            {{ shop.name }}
          </li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { useShopStore } from "../../store/shops";
import { useUserStore } from "../../store/user";
import { ref } from "vue";

const { shops, addShop } = useShopStore();
const { user } = useUserStore();
const name = ref("");

const add = async () => {
  await addShop(name.value, user._id);

  name.value = "";
};
</script>
