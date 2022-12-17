<script setup>
import { SunIcon, MoonIcon } from "@heroicons/vue/24/solid";
const colorMode = useColorMode();
const changeColorMode = function () {
  if (colorMode.value === "light") {
    colorMode.value = "dark";
  } else {
    colorMode.value = "light";
  }
};
</script>

<template>
  <nav class="bg-gray-800 dark:bg-white">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-center">
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <h1 class="text-[#81bd01] font-semibold text-lg">Weather App</h1>
          <button
            @click="changeColorMode"
            type="button"
            class="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white"
          >
            <span class="sr-only">View notifications</span>
            <!-- Heroicon name: outline/bell -->
            <SunIcon
              v-if="colorMode.value === 'light'"
              class="h-6 w-6 text-yellow-300"
            />
            <MoonIcon
              v-if="colorMode.value === 'dark'"
              class="h-6 w-6 text-white"
            />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
  </nav>
</template>
