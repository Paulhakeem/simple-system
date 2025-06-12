<template>
  <div>
    <!-- component -->
    <div class="font-sans bg-gray-900 flex flex-col min-h-screen w-full">
      <div>
        <div class="bg-[#1796d5]">
          <div class="container mx-auto px-4">
            <div class="flex items-center md:justify-between py-4">
              <div class="w-1/2 md:w-auto text-center text-white text-xl">
                Admin Dashboard
              </div>
              <div class="w-1/4 md:w-auto md:flex text-right">
                <div>
                  <img
                    class="rounded-full size-8 ring-4 ring-opacity-20 ring-gray-200"
                    src="../assets/images/profile.png"
                    :alt="user.name"
                  />
                </div>
                <div class="hidden md:block md:flex md:items-center ml-2">
                  <span class="text-white text-sm mr-1">{{ user.name }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hidden bg-blue-dark md:block">
          <div class="container mx-auto px-4">
            <div class="md:flex">
              <div v-for="(menu, index) in tab" :key="index" class="flex -mb-px mr-8">
                <RouterLink
                  :to="`/${menu.name.toLowerCase()}`"
                  class="no-underline text-white md:text-blue-dark flex items-center py-4 hover:border-b transition duration-300 ease-in-out active:border-b active:border-blue-500"
                >
                  <font-awesome-icon
                    :icon="menu.icon"
                    class="h-6 w-6 fill-current mr-2"
                  />
                  {{ menu.name }}
              </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-grow container mx-auto sm:px-4 pt-6 pb-8">
        <div
          class="bg-gray-300 border-t border-b sm:border-l sm:border-r sm:rounded shadow mb-6"
        >
          <!-- MOBILE VIEW -->
          <MobileView />
          <!-- END OF MOBILE VIEW MENU -->
          <div class="hidden lg:flex">
            <div class="w-1/3 text-center py-8">
              <div class="border-r">
                <div
                  class="text-sm uppercase text-gray-600 font-semibold tracking-wide"
                >
                  Total Income
                </div>
                <span class="font-bold text-2xl text-green-500">
                  Ksh{{ totalAmout }}
                </span>
              </div>
            </div>
            <div class="w-1/3 text-center py-8">
              <div class="border-r">
                <div
                  class="text-sm uppercase text-gray-600 font-semibold tracking-wide"
                >
                  Total Expenses
                </div>
                <span class="font-bold text-2xl text-red-500">
                  Ksh{{ totalExpenses }}</span
                >
              </div>
            </div>
            <div class="w-1/3 text-center py-8">
              <div>
                <div
                  class="text-sm uppercase text-gray-600 font-semibold tracking-wide"
                >
                  TOTAL PERCENTAGE(%)
                </div>
                <span class="font-bold text-2xl text-green-500"> 70% </span>
              </div>
            </div>
          </div>
        </div>
        <!-- END OF VIEW -->
        <div class="flex flex-wrap -mx-4">
          <!-- ADMIN DATA -->
          <AdminData />
          <!--  -->

          <div class="w-full lg:w-1/2 px-4">
            <div
              class="bg-gray-200 border-t border-b sm:rounded sm:border shadow"
            >
              <div class="border-b">
                <div class="flex justify-between px-6 -mb-px">
                  <h3 class="text-gray-600 py-4 font-normal text-lg">
                    Imported transactions
                  </h3>
                </div>
              </div>
              <div>
                <div class="text-center px-6 py-4">
                  <div class="py-8">
                    <div class="mb-4">
                      <font-awesome-icon
                        :icon="['fas', 'rocket']"
                        class="text-6xl text-[#1796d5]"
                      />
                    </div>
                    <p class="text-2xl text-gray-600 font-medium mb-4">
                      No imported transaction!
                    </p>
                    <p class="text-grey max-w-xs mx-auto mb-6">
                      Import all of your transactions before 24hrs to avaoid
                      ovaloading of data.
                      <br />
                      <span class="text-red-500 font-semibold">
                        Note: You can only import 1000 transactions at a time.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--  -->
      </div>
      <div class="bg-[#1796d5] border-t">
        <div class="container mx-auto px-4">
          <div class="md:flex justify-between items-center text-sm">
            <div
              class="text-center md:text-left py-3 md:py-4 border-b md:border-b-0"
            >
              <RouterLink
                to="/darshboard1"
                class="no-underline text-gray-200 mr-4"
                >Home</RouterLink
              >
              <a href="#" class="no-underline text-gray-200"
                >Legal &amp; Privacy</a
              >
            </div>
            <div class="md:flex md:flex-row-reverse items-center py-4">
              <div class="text-gray-200 text-center md:mr-4">
                &copy; 2025 Dev Paul
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "../../store/user";
import MobileView from "../components/MobileView.vue";
import AdminData from "../components/adminData.vue";
import { useTransStore } from "../../store/transaction";
const { totalAmout, totalExpenses } = useTransStore();

const { user } = useUserStore();

const tab = ref([
  { name: "Home", icon: "fa-solid fa-house" },
  { name: "Income", icon: "fa-solid fa-chart-simple" },
  { name: "Expenses", icon: "fa-solid fa-square-poll-horizontal" },
  { name: "Settings", icon: "fa-solid fa-gear" },
]);
</script>
