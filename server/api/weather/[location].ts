export default defineEventHandler(async (event) => {
  const location = event.context.params.location;

  let errorBody;
  const uri = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=8c31ec4140dcf28aee6388572bcebab2`;
  const weather = await $fetch(uri).catch((error) => {
    errorBody = error.data;
  });
  return {
    weather,
    errorBody,
  };
});
