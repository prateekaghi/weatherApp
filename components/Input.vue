<script setup>
const input = ref("");
let location = function () {
  emit("locationInput", input.value);
};
const emit = defineEmits(["locationInput"]);
</script>
<template>
  <div class="w-1/2 m-auto">
    <label for="location" class="block text-xl font-medium text-gray-700"
      >Location</label
    >
    <div class="mt-1">
      <input
        v-model="input"
        @input="location"
        type="text"
        class="block h-10 w-full px-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        placeholder="Enter Location Here"
      />
    </div>
    <p class="mt-2 text-sm text-[#80bd01]">Press Enter to Search.</p>
  </div>
</template>
