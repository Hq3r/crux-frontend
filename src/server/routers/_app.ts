import { createTRPCRouter } from "@server/trpc";
import { accountingRouter } from "./accounting";
import { authRouter } from "./auth";
import { chartsRouter } from "./charts";
import { notificationRouter } from "./notification";
import { portfolioRouter } from "./portfolio";
import { subscriptionRouter } from "./subscription";
import { userRouter } from "./user";
import { verifyRouter } from "./verify";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  auth: authRouter,
  portfolio: portfolioRouter,
  user: userRouter,
  charts: chartsRouter,
  subscription: subscriptionRouter,
  accounting: accountingRouter,
  notification: notificationRouter,
  verify: verifyRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
