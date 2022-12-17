<script setup>
const input = ref("");
let location = function (e) {
  if (
    (e.keyCode < 65 || e.keyCode > 90) &&
    e.keyCode !== 32 &&
    e.keyCode !== 8 &&
    e.keyCode !== 13 &&
    e.keyCode !== 93 &&
    e.keyCode !== 91
  )
    alert("Character Not allowed");
  if (e.key === "Enter" || e.keyCode === 13) {
    if (!input.value) {
      alert("Input required");
      return;
    }
    emit("locationInput", input.value);
    input.value = "";
  }
};
const props = defineProps(["errorMessage"]);
const emit = defineEmits(["locationInput"]);
</script>
<template>
  <div class="w-1/2 m-auto">
    <label for="location" class="block text-xl font-medium text-gray-700"
      >Location</label
    >
    <div class="mt-1">
      <input
        @keyup="location"
        v-model="input"
        type="text"
        class="block h-10 w-full px-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        placeholder="Enter Location Here"
      />
    </div>
    <p
      v-if="errorMessage.message"
      class="mt-2 capitalize text-sm text-[#80bd01]"
    >
      {{ errorMessage.code }}:{{ errorMessage.message }}
    </p>
    <p v-else class="mt-2 text-sm text-[#80bd01]">Press Enter to Search.</p>
  </div>
</template>
