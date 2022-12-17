<script setup>
const props = defineProps(["weatherData"]);
</script>

<template>
  <div>
    <h3 class="text-2xl font-light leading-6 text-gray-900">
      Weather For-
      <strong
        >{{ weatherData.location }}({{ weatherData.country.country }})</strong
      >
    </h3>

    <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <div
        class="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6"
      >
        <dt>
          <p class="truncate text-sm font-medium text-gray-500">
            Sunrise/Sunset
          </p>
        </dt>
        <dd class="items-baseline pb-6 sm:pb-7">
          <p class="text-2xl font-semibold text-gray-900">
            Sunset:{{
              new Date(weatherData.country.sunset * 1000).toLocaleTimeString(
                "en-US"
              )
            }}
          </p>

          <p>(As per your current time zone)</p>

          <div
            class="absolute flex justify-between inset-x-0 bottom-0 bg-gray-50 px-4 py-2 sm:px-4"
          >
            <p>
              Sunrise:
              {{
                new Date(weatherData.country.sunrise * 1000).toLocaleTimeString(
                  "en-US"
                )
              }}
            </p>
          </div>
        </dd>
      </div>

      <div
        class="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6"
      >
        <dt>
          <p class="truncate text-sm font-medium text-gray-500">
            Current Temperature
          </p>
        </dt>
        <dd class="flex items-baseline pb-6 sm:pb-7">
          <p class="text-2xl font-semibold text-gray-900">
            {{ weatherData.data.temp }} °C
          </p>

          <div
            class="absolute flex justify-between inset-x-0 bottom-0 bg-gray-50 px-4 py-2 sm:px-4"
          >
            <p>Min: {{ weatherData.data.temp_min }} °C</p>
            <p>Max: {{ weatherData.data.temp_max }} °C</p>
          </div>
        </dd>
      </div>

      <div
        class="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6"
      >
        <dt>
          <p class="truncate text-sm font-medium text-gray-500">
            Other Details
          </p>
        </dt>
        <dd class="flex items-baseline pb-6 sm:pb-7">
          <p class="text-2xl font-semibold text-gray-900">
            Humidity: {{ weatherData.data.humidity }}
          </p>

          <div
            class="absolute flex justify-between inset-x-0 bottom-0 bg-gray-50 px-4 py-2 sm:px-4"
          >
            <p>Sea Level: {{ weatherData.data.sea_level }}</p>
            <p>Ground Level: {{ weatherData.data.grnd_level }}</p>
          </div>
        </dd>
      </div>
    </dl>
  </div>
</template>
