export default defineEventHandler(async (event) => {
  console.log(event.context);
  const location = event.context.params.location;
  console.log("this is the location", location);
  const uri = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=8c31ec4140dcf28aee6388572bcebab2`;
  const weather = await $fetch(uri);
  return {
    weather,
  };
});
