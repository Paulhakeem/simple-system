<template>
  <div class="max-w-md m-auto bg-gray-500 p-4 rounded-md">
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
    <div
      class="my-2 mx-auto w-10/12 justify-end flex items-end"
    >
      <button
        class="bg-gray-600 rounded-lg px-3 py-2 text-white cursor-pointer"
      >
        Signup
      </button>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
