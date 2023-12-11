
import { itemRouter } from "./item";
import { categoryRouter } from "./category";
import { createTRPCRouter } from "~/server/api/trpc";
import { getItemRouter } from "./getItem";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  item: itemRouter,
  category: categoryRouter,
  getItem: getItemRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
