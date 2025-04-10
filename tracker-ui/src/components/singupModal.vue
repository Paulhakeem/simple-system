<template>
  <transition name="modal-outer">
    <div
      v-show="modalActive"
      class="absolute z-50 w-full h-screen top-0 left-0 bg-opacity-30 flex justify-center"
    >
      <transition name="modal-inner">
        <div
          v-if="modalActive"
          class="max-w-md self-start p-4 bg-gray-400 mt-36 rounded-md"
        >
          <button>
            <font-awesome-icon
              @click="$emit('close-modal')"
              :icon="['fas', 'circle-xmark']"
              class="text-lg text-gray-500 cursor-pointer text-right flex justify-end p-2"
            />
          </button>

          <!-- SLOT -->
          <div class="pb-2 text-center">
            <h6 class="text-xl">Create Your Account</h6>
          </div>
          <div class="bg-[#1796d5] p-4 rounded-md flex-col">
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
                  v-model="name"
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
                <font-awesome-icon
                  @click="togglePasswordVisibility"
                  class="flex items-center justify-center w-12 h-12 text-white"
                  :icon="passwordVisible ? 'fas fa-eye' : 'fas fa-eye-slash'"
                />
              </div>

              <div class="w-full">
                <input
                  :type="passwordVisible ? 'text' : 'password'"
                  v-model="password"
                  class="w-full h-12 px-4 py-1 rounded-r-md border border-gray-100 text-gray-800 focus:outline-none"
                  placeholder="Passoward"
                />
              </div>
            </div>

            <div class="my-2 mx-auto w-10/12 justify-end flex items-end">
              <button
                @click="signupUser"
                class="bg-gray-600 rounded-lg px-3 py-2 text-white cursor-pointer"
              >
                Signup
              </button>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script setup>
import { authCounterStore } from "../../store/auth";
import { ref } from "vue";
import { useRouter } from "vue-router";

defineEmits(["close-modal"]);
defineProps({
  modalActive: {
    type: Boolean,
    default: false,
  },
});
const passwordVisible = ref(false);

const togglePasswordVisibility = () => {
  passwordVisible.value = !passwordVisible.value;
};

const router = useRouter();

const auth = authCounterStore();

const name = ref("");
const password = ref("");
const rule = ref("");

const signupUser = async () => {
  await auth
    .createAccount(name.value, password.value, rule.value)
    .then((result) => {});
  router.push({
    path: "/darshboard1",
  });
  name.value = "";
  password.value = "";
};
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

.modal-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.modal-inner-leave-to {
  transform: scale(0.8);
}
</style>
