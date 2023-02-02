import { createTRPCRouter } from "./trpc";
import { cvRouter } from "./routers/cv";

export const appRouter = createTRPCRouter({
  cv: cvRouter,
});

export type AppRouter = typeof appRouter;
