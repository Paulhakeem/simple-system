<template>
  <div class="fixed w-42 z-50 pl-4">
    <Listbox v-model="selectedPerson">
      <div class="relative mt-1">
        <ListboxButton
          class="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
        >
          <span class="block truncate">{{ catergorySelected }}</span>
          <span
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
          >
            <font-awesome-icon :icon="['fas', 'chevron-down']" />
          </span>
        </ListboxButton>

        <transition
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions
            class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
          >
            <ListboxOption
              v-for="catergory in Object.keys(categories)"
              :key="catergory"
              v-slot="{active, selected }"
              as="template"
            >
              <li
                :class="[
                  active ? 'bg-blue-100 text-blue-500' : 'text-gray-900',
                  'relative cursor-default select-none py-2 pl-10 pr-4',
                ]"
              >
                <span
                  :class="[
                    selected ? 'font-medium' : 'font-normal',
                    'block truncate',
                  ]"
                  >{{ catergory }}</span
                >
                <span
                  class="absolute inset-y-0 left-0 flex items-center pl-3 text-[#1796d5]"
                >
                  <font-awesome-icon
                    :icon="['fas', 'check']"
                    class="h-5 w-5"
                    aria-hidden="true"
                  />
                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import { useTransStore } from "../../store/transaction";

const { categories } = useTransStore();

const catergorySelected = ref(categories[1]);
</script>
