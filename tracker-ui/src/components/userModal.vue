<template>
  <transition name="modal-outer">
    <div
      v-show="modalActive"
      class="absolute w-full z-50 h-screen top-0 left-0 flex justify-center px-8"
    >
      <transition name="modal-inner">
        <div v-if="modalActive" class="p-4 self-start">
          <!-- inspiration from UI Design Daily -->
          <div class="grid min-h-screen place-content-center">
            <div
              class="bg-white p-4 shadow-lg rounded-xl max-w-md mx-auto relative"
            >
              <header
                class="bg-[#1796d5] transform flex items-center mb-10 py-8 px-6"
              >
                <img
                  class="rounded-full size-14 ring-4 ring-opacity-20 ring-gray-200"
                  src="../assets/images/profile.png"
                  :alt="user.name"
                />

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
                <!-- input field -->
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
                <!-- end of input -->
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
              <span
                @click="$emit('close-modal')"
                class="absolute text-[#1796d5] right-5 bottom-0 cursor-pointer"
                ><font-awesome-icon :icon="['fas', 'circle-xmark']" />
              </span>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script setup>
import { useUserStore } from "../../store/user";
import { useShopStore } from "../../store/shops";
import { useDeleteStore } from "../../store/delete";
import { ref } from "vue";
defineEmits(["close-modal"]);
defineProps({
  modalActive: {
    type: Boolean,
    default: false,
  },
});

const { user } = useUserStore();
const { shops, addShop } = useShopStore();
const { deleteShop } = useDeleteStore();

const shopName = ref("");
const Input = ref(false);
const toggleInput = () => {
  Input.value = !Input.value;
};

const createShop = async () => {
  if (shopName.value === "") {
    return;
  }
  await addShop(shopName.value, user._id);
  shopName.value = "";
};
</script>
