<template>
  <div>
    <div class="flex h-screen text-gray-400 bg-gray-900">
      <!-- Component Start -->
      <div
        class="flex flex-col items-center w-16 pb-4 overflow-auto border-r border-gray-800 text-gray-500"
      >
        <a
          class="flex items-center justify-center flex-shrink-0 w-full h-16"
          href="#"
        >
        <font-awesome-icon :icon="['fas', 'business-time']" class="text-xl text-gray-300"/>
        </a>
        <a
          class="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-800"
          href="#"
        >
          <font-awesome-icon
            :icon="['fas', 'house']"
            class="text-xl text-[#1796d5]"
          />
        </a>

        <a
          class="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-800"
          href="#"
        >
          <font-awesome-icon
            :icon="['fas', 'circle-plus']"
            class="text-xl text-[#1796d5]"
          />
        </a>
        <a
          class="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-800"
          href="#"
        >
          <font-awesome-icon
            :icon="['fas', 'square-poll-vertical']"
            class="text-xl text-[#1796d5]"
          />
        </a>
        <a
          class="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-auto rounded hover:bg-gray-800"
          href="#"
        >
          <font-awesome-icon
            :icon="['fas', 'user']"
            class="text-xl text-[#1796d5]"
          />
        </a>
      </div>
      <div class="flex flex-col flex-grow">
        <div
          class="flex items-center flex-shrink-0 h-16 px-8 border-b border-gray-800"
        >
          <h1 class="text-lg font-medium text-[#1796d5]">
            Manage Your Activities
          </h1>
          <button class="relative ml-2 text-sm focus:outline-none group">
            <div
              class="flex items-center justify-between w-10 h-10 rounded hover:bg-gray-800"
            >
              <svg
                class="w-5 h-5 mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </div>
            <div
              class="absolute right-0 flex-col items-start hidden w-40 mt-1 pb-1 bg-gray-800 border border-gray-800 shadow-lg group-focus:flex"
            >
              <a class="w-full px-4 py-2 text-left hover:bg-gray-900" href="#"
                >Menu Item 1</a
              >
              <a class="w-full px-4 py-2 text-left hover:bg-gray-900" href="#"
                >Menu Item 2</a
              >
              <a class="w-full px-4 py-2 text-left hover:bg-gray-900" href="#"
                >Menu Item 3</a
              >
            </div>
          </button>
        </div>

        <!-- darshboard -->
        <div class="flex-grow p-6 overflow-auto bg-gray-800">
          <div class="grid grid-cols-3 gap-6">
            <div class="h-24 col-span-1 bg-gray-700"></div>
            <div class="h-24 col-span-1 bg-gray-700"></div>
            <div class="h-24 col-span-1 bg-gray-700"></div>
            <div class="h-24 col-span-2 bg-gray-700"></div>
            <div class="h-24 col-span-1 bg-gray-700"></div>
          </div>
        </div>
      </div>
      <!-- Component End  -->
    </div>
  </div>
</template>

<script setup></script>
