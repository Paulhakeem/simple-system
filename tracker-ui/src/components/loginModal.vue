<template>
    <transition name="modal-outer">
      <div
        v-show="loginActive"
        class="absolute z-50 bg-black bg-opacity-0 w-full h-screen top-0 left-0 bg-opacity-30 flex justify-center"
      >
        <transition name="modal-inner">
          <div
            v-if="loginActive"
            class="max-w-md self-start p-4 bg-gray-400 mt-36 rounded-md"
          >
            <button>
              <font-awesome-icon
                @click="$emit('close-login')"
                :icon="['fas', 'circle-xmark']"
                class="text-lg text-[#1796d5] cursor-pointer text-right flex justify-end p-2"
              />
            </button>
  
            <!-- SLOT -->
            <slot>
              <div class="bg-gray-500 p-4 rounded-md">
                <!-- component -->
                <div
                  class="my-2 mx-auto border-[2px] w-10/12 justify-center flex items-center rounded-md shadow-md"
                >
                  <div>
                    <button
                      class="flex items-center bg-gray-400 rounded-l-md border border-white justify-center w-12 h-12 text-white"
                    >
                      <font-awesome-icon
                        :icon="['fas', 'user']"
                        class="text-white text-lg"
                      />
                    </button>
                  </div>
  
                  <div class="w-full">
                    <input
                      type="text"
                      class="w-full h-12 px-4 py-1 rounded-r-md border border-gray-100 text-gray-800 focus:outline-none"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div
                  class="my-2 mx-auto border-[2px] w-10/12 justify-center flex items-center rounded-md shadow-md"
                >
                  <div>
                    <button
                      class="flex items-center bg-gray-400 rounded-l-md border border-white justify-center w-12 h-12 text-white"
                    >
                      <font-awesome-icon
                        :icon="['fas', 'key']"
                        class="text-white text-lg"
                      />
                    </button>
                  </div>
  
                  <div class="w-full">
                    <input
                      type="password"
                      class="w-full h-12 px-4 py-1 rounded-r-md border border-gray-100 text-gray-800 focus:outline-none"
                      placeholder="Passoward"
                    />
                  </div>
                </div>
                <div class="my-2 mx-auto w-10/12 justify-end flex items-end">
                  <button
                    class="bg-gray-600 rounded-lg px-3 py-2 text-white cursor-pointer"
                  >
                    Login
                  </button>
                </div>
              </div>
            </slot>
          </div>
        </transition>
      </div>
    </transition>
  </template>
  
  <script setup>
  defineEmits(["close-login"]);
  defineProps({
    loginActive: {
      type: Boolean,
      default: false,
    },
  });
  </script>
  
  <style>
  .modal-outer-enter-active,
  .modal-outer-leave-active {
    transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
  }
  
  .modal-outer-enter-from,
  .modal-outer-leave-to {
    opacity: 0;
  }
  .modal-inner-enter-active {
      transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
  }
  
  .modal-inner-leave-active {
      transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
  }
  
  .modal-inner-enter-from{
      opacity: 0;
      transform: scale(0.8);
  }
  
  .modal-inner-leave-to {
      transform: scale(0.8);
  }
  </style>
  