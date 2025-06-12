<template>
  <div>
    <div class="flex h-screen text-gray-400 bg-gray-900">
      <!-- SIDEBAR -->
      <div
        class="flex flex-col items-center w-16 pb-4 overflow-auto border-r border-gray-800 text-gray-500"
      >
        <div  v-for="(icon, index) in icons" :key="index" class="relative z-2">
          <a
            class="flex items-center justify-center flex-shrink-0 w-full h-16"
            href="#"
          >
            <font-awesome-icon
              :icon="icon.icon"
              @click="$router.push(icon.route)"
              class="text-xl text-gray-300"
            />
          </a>
        </div>
        <!-- user profile -->
        <RouterLink to="/user-dashboard"
          class="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-auto rounded hover:bg-gray-800"
          href="#"
        >
          <font-awesome-icon
            :icon="['fas', 'user']"
            class="text-xl text-[#1796d5]"
          />
        </RouterLink>
        <p class="font-medium text-gray-300">{{ user.name }}</p>
      </div>
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
                :icon="isOpen ? 'fa-solid fa-circle-xmark' : 'fa-solid fa-bars'"
                class="text-xl text-[#1796d5] cursor-pointer active:text-green-500"
              />
            </span>
            <transition
              enter-active-class="transition duration-100 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-100 ease-in"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <Dropdown v-if="isOpen"/>
            </transition>
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
import { ref } from "vue";

const { user } = useUserStore();

const isOpen = ref(false);

const openMenu = () => {
  isOpen.value = !isOpen.value;
};

const icons = ref([
  {
    icon: "fa-solid fa-house",
    label: "Home",
    route: "/darshboard1"
  },
  {
    icon: "fa-solid fa-circle-plus",
    label: "Add Category",
    route: "/add-category"
  },
  {
    icon: "fa-solid fa-square-poll-vertical",
    label: "Statistics",
    route: "/statistics"
  },
  {
    icon: "fa-solid fa-user",
    label: "Profile",
    route: "/user-dashboard"
  }
])
</script>
