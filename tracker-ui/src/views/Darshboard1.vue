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
          @click="toggleModal"
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

      <userModal
        :modalActive="modalActive"
        @close-modal="toggleModal"
      ></userModal>
      <!-- end user -->
      <!-- HEADER -->
      <div class="flex flex-col flex-grow">
        <div class="flex items-center justify-between flex-shrink-0 h-16 px-8">
          <h1 class="text-lg font-medium text-[#1796d5]">
            Manage Your Business
          </h1>

          <div class="relative">
            <span
              class="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
            >
              <font-awesome-icon
                @click="openMenu"
                :icon="['fas', 'caret-down']"
                class="text-xl text-[#1796d5] cursor-pointer active:text-green-500"
              />
            </span>
            <Dropdown v-if="isOpen">
              <font-awesome-icon
                :icon="['fas', 'circle-xmark']"
                class="text-gray-200 pl-4 pt-2 cursor-pointer"
                @click="openMenu"
              />
            </Dropdown>
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
import Dropdown from "@/components/Dropdown.vue";
import { useUserStore } from "../../store/user";
import userModal from "@/components/userModal.vue";
import { ref } from "vue";

const { user } = useUserStore();

const isOpen = ref(false);

const openMenu = () => {
  isOpen.value = !isOpen.value;
};

const modalActive = ref(null);
const toggleModal = () => {
  modalActive.value = !modalActive.value;
};
</script>
