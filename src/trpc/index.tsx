import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { publicProcedure, router } from "./trpc";
import { TRPCError } from "@trpc/server";
import { connect } from "@/app/dbConfig/connect";
import axios from "axios";
export const appRouter = router({
  authCallback: publicProcedure.query(() => {
    const { getUser } = getKindeServerSession();
    const user: any = getUser();
    if (!user || !user.id) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }
    // check db
    connect();
    // console.log("connect");
    // axios.get("api/login").then((res) => console.log(res));
    return { success: true };
  }),
});

export type AppRouter = typeof appRouter;
