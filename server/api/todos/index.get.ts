import { protectedRoute } from "../../utils/protectedRoute";

export default defineEventHandler(async (event) => {
  await protectedRoute(event);

  const data = await fetch("https://jsonplaceholder.typicode.com/todos").then(
    (res) => res.json()
  );

  if (!data) {
    throw createError({
      statusCode: 404,
      message: "Not Found",
    });
  }

  return data;
});
