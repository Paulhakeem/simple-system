<template>
  <div class="w-full mb-6 lg:mb-0 lg:w-1/2 px-4 flex flex-col">
    <div
      class="flex-grow flex flex-col bg-gray-200 border-t border-b sm:rounded sm:border shadow overflow-hidden"
    >
      <div class="flex justify-between px-6 mb-px">
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
      <div
        class="flex-grow flex px-6 py-6 text-grey-darker items-center border-b -mx-4"
      >
        <div class="w-2/5 xl:w-1/4 px-4 flex items-center">
          <div class="rounded-full bg-orange-400 inline-flex mr-3">
            <svg
              class="fill-current text-white h-8 w-8 block"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <g fill-rule="evenodd">
                <path
                  d="M21.78 15.37c.51-.61.83-1.4.83-2.26 0-2.74-1.6-4.38-4.24-4.38V5.45c0-.12-.1-.22-.22-.22h-1.27c-.11 0-.2.1-.2.21v3.3h-1.7V5.44c0-.12-.1-.22-.22-.22H13.5c-.12 0-.2.1-.21.21v3.3H9.67c-.12 0-.21.09-.21.21v1.31c0 .12.1.22.21.22h.21c.94 0 1.7.79 1.7 1.75v7c0 .92-.68 1.67-1.55 1.75a.21.21 0 0 0-.18.16l-.33 1.32c-.01.06 0 .13.04.19.04.05.1.08.17.08h3.55v3.3c0 .1.1.2.2.2h1.28c.12 0 .21-.1.21-.22v-3.28h1.7v3.3c0 .1.1.2.21.2h1.27c.12 0 .22-.1.22-.22v-3.28h.85c2.65 0 4.24-1.64 4.24-4.37 0-1.28-.68-2.39-1.68-3zm-6.8-4.01h2.54c.94 0 1.7.78 1.7 1.75 0 .96-.76 1.75-1.7 1.75h-2.55v-3.5zm3.39 8.75h-3.4v-3.5h3.4c.93 0 1.7.78 1.7 1.75 0 .96-.77 1.75-1.7 1.75z"
                ></path>
              </g>
            </svg>
          </div>
          <span class="text-lg">Bitcoin</span>
        </div>
        <div class="hidden md:flex lg:hidden xl:flex w-1/4 px-4 items-center">
          <div class="bg-orange h-2 rounded-full flex-grow mr-2"></div>
          100%
        </div>
        <div class="flex w-3/5 md:w/12">
          <div class="w-1/2 px-4">
            <div class="text-right">0.0010 BTC</div>
          </div>
          <div class="w-1/2 px-4">
            <div class="text-right text-grey">CA$21.28</div>
          </div>
        </div>
      </div>
      
      <!--  -->
      <div class="px-6 py-4">
        <div class="text-center text-grey">Total Balance &asymp; CA$21.28</div>
      </div>
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
