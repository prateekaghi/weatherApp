<script setup>
let weather = reactive({
  data: "",
  country: "",
  coords: "",
  location: "",
});
onMounted(async () => {
  const { data } = await useFetch("/api/weather/rohtak");
  weather.coords = data.value.weather.coords;
  weather.data = data.value.weather.main;
  weather.country = data.value.weather.sys;
  weather.location = data.value.weather.name;
});
let locationInput = ref();
let location = function (event) {
  locationInput.value = event;
};
</script>
<template>
  <div>
    <TopNav />
    <div class="m-20">
      <div class="my-10">
        <Input @location-input="(event) => location(event)" />
      </div>
      <div>
        <Card :weather-data="weather" />
      </div>
    </div>
  </div>
</template>
