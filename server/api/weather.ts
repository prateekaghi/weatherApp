export default defineEventHandler(async (event) => {
  const weather = await $fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=rohtak&units=metric&appid=8c31ec4140dcf28aee6388572bcebab2"
  );
  return {
    weather,
  };
});
