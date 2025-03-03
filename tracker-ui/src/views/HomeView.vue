<script setup>
import { RouterLink } from "vue-router";
import HomePage from "@/components/HomePage.vue";
import SignupModal from "@/components/singupModal.vue";
import loginModal from "@/components/loginModal.vue";

import { ref } from "vue";

const header = ref("manage your business today");

const modalActive = ref(null);
const toggleModal = () => {
  modalActive.value = !modalActive.value;
};

const loginActive = ref(null);
const toggleLogin = () => {
  loginActive.value = !loginActive.value;
};
</script>

<template>
  <main>
    <div class="relative z-20 flex items-center">
      <div
        class="container relative flex flex-col items-center justify-between px-6 py-8 mx-auto"
      >
        <div class="flex flex-col">
          <HomePage :text="header" />
          <h2
            class="w-full max-w-lg py-8 mx-auto text-lg font-light text-center text-gray-300 dark:text-white"
          >
            Ultimately, the goal is to optimize spending, ensuring that
            resources are allocated efficiently and effectively to maximize
            financial stability and achieve desired financial outcomes.
          </h2>
          <div class="flex items-center justify-center mt-4 gap-12">
            <button
              @click="toggleModal"
              class="px-4 py-2 w-36 mr-4 text-white uppercase bg-[#1796d5] hover:border-2 hover: border-[#1796d5] hover:bg-transparent text-md rounded-md"
            >
              Singup
            </button>
            <button
              @click="toggleLogin"
              class="px-4 py-2 w-36 text-gray-200 uppercase bg-transparent border-2 border-[#1796d5] dark:text-white hover:bg-[#1796d5] hover:border-none hover:text-white text-md rounded-md"
            >
              SingIn
            </button>
          </div>
        </div>
      </div>
    </div>

    <SignupModal :modalActive="modalActive" @close-modal="toggleModal" />
    <loginModal :loginActive="loginActive" @close-login="toggleLogin" />
  </main>
</template>
