import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";


export const getItemRouter = createTRPCRouter({
    getAll: publicProcedure.query(({ctx}) => {
        return ctx.db.item.findMany();
    })
})