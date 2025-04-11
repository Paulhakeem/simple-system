<template>
  <div class="w-full px-4 mx-auto">
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        
        <!-- filter -->
        <font-awesome-icon
          @click="toggleModal"
          :icon="['fas', 'ellipsis-vertical']"
          class="text-[#1796d5] cursor-pointer"
        />
        <FilterTrans v-if="openModal" />
        <!--  filter-->

        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3 class="font-semibold text-base text-blueGray-700">
            Business Name
          </h3>
        </div>

        <!-- adding statement -->
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <div class="text-right">
            <button
              @click="toggleInput"
              class="bg-[#1796d5] text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 cursor-pointer"
            >
              {{ showInput ? "close" : "Add" }}
            </button>
          </div>
          <addTrans
            v-if="showInput"
            :class="{ 'opacity-100': showInput, 'opacity-0': !showInput }"
            @blur="hideInput"
          />
        </div>
      </div>
    </div>

    <div class="block w-full overflow-x-auto">
      <TableTrans />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useUserStore } from "../../store/user";
import addTrans from "./addTrans.vue";
import TableTrans from "./TableTrans.vue";
import FilterTrans from "./FilterTrans.vue";

const showInput = ref(false);
const { getUser } = useUserStore();
const openModal = ref(false);

const toggleInput = () => {
  showInput.value = !showInput.value;
};

const hideInput = () => {
  showInput.value = false;
};

const toggleModal = () => {
  openModal.value = !openModal.value;
};
// get user
onMounted(async () => {
  await getUser();
});
</script>
