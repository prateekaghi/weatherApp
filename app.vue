<script setup>
let weather = reactive({
  data: "",
  country: "",
  coords: "",
  location: "",
});
let errorMessage = reactive({
  code: "",
  message: "",
});
const setValue = (data) => {
  errorMessage.message = "";
  errorMessage.code = "";
  weather.coords = data.value.weather.coords;
  weather.data = data.value.weather.main;
  weather.country = data.value.weather.sys;
  weather.location = data.value.weather.name;
};
const setErrorMessage = (data) => {
  errorMessage.message = data.value.errorBody.message;
  errorMessage.code = data.value.errorBody.cod;
};
onMounted(async () => {
  const { data } = await useFetch("/api/weather/rohtak");
  if (data.value.errorBody) {
    setErrorMessage(data);
  } else {
    setValue(data);
  }
});

let location = async function (event) {
  const { data } = await useFetch(`/api/weather/${event}`);
  if (data.value.errorBody) {
    setErrorMessage(data);
  } else {
    setValue(data);
  }
};
</script>
<template>
  <div class="dark:bg-gray-300 h-screen">
    <TopNav />
    <div class="m-20">
      <div class="my-10">
        <Input
          :error-message="errorMessage"
          @location-input="(event) => location(event)"
        />
      </div>
      <div>
        <Card :weather-data="weather" />
      </div>
    </div>
  </div>
</template>
