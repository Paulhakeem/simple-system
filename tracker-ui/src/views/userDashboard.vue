<!-- <template>
  <transition name="modal-outer">
    <div
      class="absolute w-full z-50 h-screen top-0 left-0 flex justify-center px-8"
    >
      <transition name="modal-inner">
        <div class="p-4 self-start">
       \
          <div class="grid min-h-screen place-content-center">
            <div
              class="bg-white p-4 shadow-lg rounded-xl max-w-xl mx-auto relative"
            >
              <header
                class="bg-[#1796d5] transform flex items-center mb-10 py-8 px-6"
              >
              

                <div class="ml-5">
                  <h1
                    class="text-white tracking-wide text-lg first-letter:uppercase"
                  >
                    {{ user.name }}
                  </h1>
                  <p class="text-gray-300 tracking-wider text-sm">Admin</p>
                </div>
              </header>

              <div>
                <button
                  @click="toggleInput"
                  class="text-white capitalize text-sm bg-[#1796d5] inline-block rounded-md items-center py-2 pl-3 pr-4 shadow-md mx-auto tracking-wider mb-5 cursor-pointer"
                >
                  <font-awesome-icon :icon="['fas', 'plus']" />
                  {{ Input ? "close" : "add shop branch" }}
                </button>
         
                <div
                  v-if="Input"
                  class="fixed max-w-md text-right bg-slate-400 p-4 rounded-tr-lg rounded-br-lg rounded-bl-2xl z-50"
                >
                  <div class="relative inline-block justify-center">
                    <input
                      v-model="shopName"
                      placeholder="Shop Name"
                      @keyup.enter="createShop"
                      type="text"
                      class="border-2 border-gray-300 rounded-md px-2 py-1 w-36 text-white bg-gray-800 focus:outline-none focus:border-[#1796d5] focus:ring-1 focus:ring-[#1796d5] placeholder:text-gray-400"
                    />
                    <button
                      @click="createShop"
                      class="bg-[#1796d5] text-white rounded-md px-2 py-1 ml-2 cursor-pointer hover:bg-[#1796d5]/80 focus:outline-none focus:ring-2 focus:ring-[#1796d5] focus:ring-offset-2"
                    >
                      Add
                    </button>
                  </div>
                </div>
              
                <p class="text-xs text-gray-500 font-medium">Manage Shops</p>
              </div>
              <ul v-for="shop in shops" :key="shop._id" class="px-8 relative">
                <li
                  v-if="user._id === shop.userId"
                  class="flex items-center text-gray-900 text-md py-2"
                >
                  <div class="cursor-pointer">
                    <span class="text-[#1796d5] mr-5"
                      ><font-awesome-icon :icon="['fas', 'circle-check']"
                    /></span>
                    {{ shop.name }}
                  </div>
                  <span @click="deleteShop(shop._id)"
                    ><font-awesome-icon
                      :icon="['fas', 'trash']"
                      class="text-red-500 ml-8 text-sm cursor-pointer"
                  /></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

 -->

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
              <div class="flex -mb-px mr-8">
                <a
                  href="#"
                  class="no-underline text-white md:text-blue-dark flex items-center py-4 border-b border-blue-dark"
                >
                  <font-awesome-icon
                    :icon="['fas', 'house']"
                    class="h-6 w-6 fill-current mr-2"
                  />
                  Dashboard
                </a>
              </div>
              <div class="flex -mb-px mr-8">
                <a
                  href="#"
                  class="no-underline text-white opacity-50 md:text-grey-dark md:opacity-100 flex items-center py-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark"
                >
                  <font-awesome-icon
                    :icon="['fas', 'chart-simple']"
                    class="h-6 w-6 fill-current mr-2"
                  />
                  Income
                </a>
              </div>
              <div class="flex -mb-px mr-8">
                <a
                  href="#"
                  class="no-underline text-white opacity-50 md:text-grey-dark md:opacity-100 flex items-center py-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark"
                >
                  <font-awesome-icon
                    :icon="['fas', 'square-poll-horizontal']"
                    class="h-6 w-6 fill-current mr-2"
                  />
                  Expenses
                </a>
              </div>
              <div class="flex -mb-px mr-8">
                <a
                  href="#"
                  class="no-underline text-white opacity-50 md:text-grey-dark md:opacity-100 flex items-center py-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark"
                >
                  <font-awesome-icon
                    :icon="['fas', 'gear']"
                    class="h-6 w-6 fill-current mr-2"
                  />
                  Settings
                </a>
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
        <MobileView/>
          <!-- END OF MOBILE VIEW MENU -->
          <div class="hidden lg:flex">
            <div class="w-1/3 text-center py-8">
              <div class="border-r">
                <div class="text-sm uppercase text-gray-600 font-semibold tracking-wide">
                  Total Income
                </div>
                <span class="font-bold text-2xl text-green-500"> Ksh100,000 </span>
              </div>
            </div>
            <div class="w-1/3 text-center py-8">
              <div class="border-r">
                <div class="text-sm uppercase text-gray-600 font-semibold  tracking-wide">
                 Total Expenses
                </div>
                <span class="font-bold text-2xl text-red-500"> Ksh60,000 </span>
              </div>
            </div>
            <div class="w-1/3 text-center py-8">
              <div>
                <div class="text-sm uppercase text-gray-600 font-semibold tracking-wide">
                   (%)
                </div>
                <span class="font-bold text-2xl text-green-500"> Ksh40,000 </span>
              </div>
            </div>
          </div>
        </div>
        <!-- END OF VIEW -->
        <div class="flex flex-wrap -mx-4">
         <!-- ADMIN DATA -->
          <AdminData/>
          <!--  -->


          <div class="w-full lg:w-1/2 px-4">
            <div class="bg-white border-t border-b sm:rounded sm:border shadow">
              <div class="border-b">
                <div class="flex justify-between px-6 -mb-px">
                  <h3 class="text-blue-dark py-4 font-normal text-lg">
                    Recent Activity
                  </h3>
                </div>
              </div>
              <div>
                <div class="text-center px-6 py-4">
                  <div class="py-8">
                    <div class="mb-4">
                      <svg
                        class="inline-block fill-current text-grey h-16 w-16"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M11.933 13.069s7.059-5.094 6.276-10.924a.465.465 0 0 0-.112-.268.436.436 0 0 0-.263-.115C12.137.961 7.16 8.184 7.16 8.184c-4.318-.517-4.004.344-5.974 5.076-.377.902.234 1.213.904.959l2.148-.811 2.59 2.648-.793 2.199c-.248.686.055 1.311.938.926 4.624-2.016 5.466-1.694 4.96-6.112zm1.009-5.916a1.594 1.594 0 0 1 0-2.217 1.509 1.509 0 0 1 2.166 0 1.594 1.594 0 0 1 0 2.217 1.509 1.509 0 0 1-2.166 0z"
                        />
                      </svg>
                    </div>
                    <p class="text-2xl text-grey-darker font-medium mb-4">
                      No buys or sells yet
                    </p>
                    <p class="text-grey max-w-xs mx-auto mb-6">
                      You've successfully linked a payment method and can start
                      buying digital currency.
                    </p>
                    <div>
                      <button
                        type="button"
                        class="bg-blue hover:bg-blue-dark text-white border border-blue-dark rounded px-6 py-4"
                      >
                        Buy now
                      </button>
                    </div>
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
              <a href="#" class="no-underline text-gray-200 mr-4">Home</a>
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
import { useUserStore } from "../../store/user";
import { useShopStore } from "../../store/shops";
import { useDeleteStore } from "../../store/delete";
import MobileView from "../components/MobileView.vue";
import AdminData from "../components/adminData.vue";
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
