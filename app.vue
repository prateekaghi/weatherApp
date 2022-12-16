<script setup>
let weather = reactive({
  data: "",
  country: "",
  coords: "",
  location: "",
});
const setValue = (data) => {
  weather.coords = data.value.weather.coords;
  weather.data = data.value.weather.main;
  weather.country = data.value.weather.sys;
  weather.location = data.value.weather.name;
};
onMounted(async () => {
  const { data } = await useFetch("/api/weather/rohtak");
  setValue(data);
});

let location = async function (event) {
  const { data } = await useFetch(`/api/weather/${event}`);

  setValue(data);
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
