<template>
  <transition
    enter-active-class="transition ease-out duration-100"
    enter-from-class="transform opacity-0 scale-95"
    enter-to-class="transform opacity-100 scale-100"
    leave-active-class="transition ease-in duration-75"
    leave-from-class="transform opacity-100 scale-100"
    leave-to-class="transform opacity-0 scale-95"
  >
    <div class="bg-[#1796d5] mt-[10em] rounded-md">
      <input
        type="text"
        placeholder="Add Category.."
        class="mx-2 mt-5 pl-2 p-1.5 outline-none border border-gray-200 text-gray-200 text-sm font-light"
      />
      <ul class="py-1">
        <li
          class="px-3 py-2 cursor-pointer border-b border-b-gray-200 hover:bg-gray-200 w-full text-gray-800"
        >
          shop 1
        </li>
        <li
          class="px-3 py-2 cursor-pointer border-b border-b-gray-200 hover:bg-gray-200 w-full text-gray-800"
        >
          shop 2
        </li>
      </ul>
    </div>
  </transition>
</template>

<script setup></script>

