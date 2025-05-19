<template>
  <div
    class="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 focus:outline-none"
  >
    <div class="relative inline-block text-left">
      <div class="divide-y divide-gray-200 w-full">
        <div class="px-1 py-2">
          <button
            class="group flex w-full items-center rounded-md px-2 py-2 text-sm cursor-pointer hover:text-[#1796d5]"
          >
            <font-awesome-icon
              :icon="['fas', 'house']"
              class="mr-2 h-5 w-5 text-[#1796d5]"
            />
            Home
          </button>
          <button
            class="group flex w-full items-center rounded-md px-2 py-2 text-sm hover:text-[#1796d5] cursor-pointer"
          >
            <font-awesome-icon
              :icon="['fas', 'cart-shopping']"
              class="mr-2 h-5 w-5 text-[#1796d5]"
            />
            Manage Shops
            <font-awesome-icon
            @click="toggleDropdown"
              :icon="['fas', 'chevron-down']"
              class="ml-2 h-5 w-5 text-[#1796d5]"
            />
          </button>
          <!--  -->

       
          <div
            v-if="dropdown"
            class="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 focus:outline-none"
          >
            <div class="relative inline-block text-left">
              <div class="divide-y divide-gray-200 w-full">
                <div class="px-1 py-2">
                  <button
                    v-for="shop in shops"
                    :key="shop.id"
                    class="group flex w-full items-center rounded-md px-2 py-2 text-sm hover:text-[#1796d5] cursor-pointer"
                  >
                    {{ shop.name }}
                  </button>
                </div>
              </div>
            </div>
          </div>
          
<!--  -->
          <button
            class="group flex w-full items-center rounded-md px-2 py-2 text-sm hover:text-[#1796d5] cursor-pointer"
          >
            <font-awesome-icon
              :icon="['fas', 'chart-simple']"
              class="mr-2 h-5 w-5 text-[#1796d5]"
            />
            Statics
          </button>
          <button
            class="group flex w-full items-center rounded-md px-2 py-2 text-sm hover:text-[#1796d5] cursor-pointer"
          >
            <font-awesome-icon
              :icon="['fas', 'user']"
              class="mr-2 h-5 w-5 text-[#1796d5]"
            />
            Profile
          </button>
          <button
            class="group flex w-full items-center rounded-md px-2 py-2 text-sm hover:text-[#1796d5] cursor-pointer"
          >
            <font-awesome-icon
              :icon="['fas', 'right-from-bracket']"
              class="mr-2 h-5 w-5 text-[#1796d5]"
            />
            Logout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useShopStore } from "../../store/shops";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
const { shops } = useShopStore();

const dropdown= ref(false);

const toggleDropdown = () => {
  dropdown.value = !dropdown.value;
};
</script>
