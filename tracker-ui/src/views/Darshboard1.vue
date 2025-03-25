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
          <button class="relative ml-2 text-sm focus:outline-none group">
            <div class="flex items-center justify-between">
              <font-awesome-icon
                :icon="['fas', 'caret-down']"
                class="text-xl text-[#1796d5] cursor-pointer hover:text-gray-800"
              />
            </div>

            <div
              class="absolute right-0 flex-col items-start hidden w-40 mt-1 pb-1 bg-gray-800 border border-gray-800 shadow-lg group-focus:flex"
            >
              <div class="p-3">
                <h6>Add Shops</h6>
                <label for="Email" class="relative">
                  <input
                    type="text"
                    placeholder="Add shop"
                    class="peer mt-0.5 w-full rounded border boder-1 border-gray-500 p-1.5 sm:text-sm"
                  />
                </label>
              </div>
              <a class="w-full px-4 py-2 text-left hover:bg-gray-900" href="#"
                >shop 1</a
              >
              <a class="w-full px-4 py-2 text-left hover:bg-gray-900" href="#"
                >shop 2</a
              >
            </div>
          </button>
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
