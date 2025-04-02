<template>
  <div>
    <div class="flex h-screen text-gray-400 bg-gray-900">
      <!-- SIDEBAR -->
      <div
        class="flex flex-col items-center w-16 pb-4 overflow-auto border-r border-gray-800 text-gray-500"
      >
        <div class="relative z-2">
          <a
            class="flex items-center justify-center flex-shrink-0 w-full h-16"
            href="#"
          >
            <font-awesome-icon
              :icon="['fas', 'business-time']"
              class="text-xl text-gray-300"
            />
          </a>
        </div>
        <a
          class="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-800"
          href="#"
        >
          <font-awesome-icon
            :icon="['fas', 'house']"
            class="text-xl text-[#1796d5]"
          />
        </a>
        <!-- add category -->
        <a
          class="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-800"
          href="#"
        >
          <font-awesome-icon
            :icon="['fas', 'circle-plus']"
            class="text-xl text-[#1796d5]"
          />
        </a>
        <a
          class="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-800 relative"
          href="#"
        >
          <font-awesome-icon
            :icon="['fas', 'square-poll-vertical']"
            class="text-xl text-[#1796d5]"
          />
        </a>
        <!-- user profile -->
        <a
          class="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-auto rounded hover:bg-gray-800"
          href="#"
        >
          <font-awesome-icon
            :icon="['fas', 'user']"
            class="text-xl text-[#1796d5]"
          />
        </a>
        <p class="font-medium text-gray-300">{{ user.name }}</p>
      </div>

      <!-- HEADER -->
      <div class="flex flex-col flex-grow">
        <div class="flex items-center justify-between flex-shrink-0 h-16 px-8">
          <h1 class="text-lg font-medium text-[#1796d5]">
            Manage Your Business
          </h1>

          <div class="relative top-0 right-4">
            <span
              class="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
            >
              <font-awesome-icon
                :icon="['fas', 'caret-down']"
                class="text-xl text-[#1796d5] cursor-pointer active:text-green-500"
              />
            </span>

            <div tabindex="0" class="bg-[#1796d5] mt-[10em] rounded-md">
              <input type="text" placeholder="Add Category.." class="mx-2 mt-5 pl-2 p-1.5 outline-none border border-gray-200 text-gray-200 text-sm font-light"/>
              <ul class="py-1">
                <li
                  class="px-3 py-2 cursor-pointer border-b border-b-gray-200 hover:bg-gray-200 w-full text-gray-800"
                >
                  shop 1
                </li>
                <li
                  class="px-3 py-2 cursor-pointer border-b border-b-gray-200 hover:bg-gray-200 w-full text-gray-800"
                >
                  shop 2
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- darshboard Info-->
        <DarshbordInfo />
      </div>
    </div>
  </div>
</template>

<script setup>
import DarshbordInfo from "@/components/DarshbordInfo.vue";
import { useUserStore } from "../../store/user";

const { user } = useUserStore();
</script>
