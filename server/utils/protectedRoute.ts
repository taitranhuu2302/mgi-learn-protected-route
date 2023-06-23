import { H3Event } from "h3";
import { USER } from "../constants/user";

export const protectedRoute = async (event: H3Event) => {
  if (!event.context.user) {
    throw createError({
      statusCode: 401,
      message: "Unauthorized",
    });
  }

  const user = USER.find((u) => u.id.toString() === event.context.user);
  if (!user) {
    throw createError({
      statusCode: 401,
      message: "Unauthorized",
    });
  }
};
