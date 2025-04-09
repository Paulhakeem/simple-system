<template>
  <transition name="modal-outer">
    <div
      v-show="modalActive"
      class="absolute w-full z-50 bg-gray-400 h-screen top-0 left-0 flex justify-center px-8"
    >
      <transition name="modal-inner">
        <div v-if="modalActive" class="p-4 self-start max-w-md">
          <!-- inspiration from UI Design Daily -->
          <div class="grid min-h-screen place-content-center">
            <div
              class="bg-white p-4 shadow-lg rounded-xl max-w-xs mx-auto relative"
            >
              <header
                class="bg-[#1796d5] transform flex items-center mb-10 py-8 px-6"
              >
                <img
                  class="rounded-full w-20 h-20 ring-4 ring-opacity-20 ring-gray-200"
                  src="https://randomuser.me/api/portraits/women/79.jpg"
                  alt="Dr. Jessica James"
                />
                <div class="ml-5">
                  <h1
                    class="text-white tracking-wide text-lg first-letter:uppercase"
                  >
                    {{ user.name }}
                  </h1>
                  <p class="text-gray-300 tracking-wider text-sm">
                    Dermathologist
                  </p>
                </div>
              </header>
              <button
                class="text-white capitalize text-sm bg-[#1796d5] inline-block rounded-md items-center py-2 pl-3 pr-4 shadow-md mx-auto tracking-wider mb-5 cursor-pointer"
              >
                <font-awesome-icon :icon="['fas', 'plus']" />
                add shop branch
              </button>

              <ul class="px-8 relative pb-5">
                <li class="flex items-center text-gray-900 text-md py-4">
                  <span class="text-[#1796d5] mr-5"
                    ><font-awesome-icon :icon="['fas', 'circle-check']" /></span>
                  Dashboard
                </li>

                <span
                  @click="$emit('close-modal')"
                  class="absolute text-[#1796d5] right-5 bottom-5 cursor-pointer"
                  ><font-awesome-icon :icon="['fas', 'circle-xmark']" />
                </span>
              </ul>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script setup>
import { useUserStore } from "../../store/user";
defineEmits(["close-modal"]);
defineProps({
  modalActive: {
    type: Boolean,
    default: false,
  },
});

const { user } = useUserStore();
</script>
