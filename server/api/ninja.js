export default defineEventHandler(async (event) => {
  const { name } = getQuery(event);
  const { age } = await readBody(event);

  return {
    message: `Hello ${name}! Your age is ${age}. We got a ton of awesome goods for you. Welcome to our online shop!`,
  };
});
