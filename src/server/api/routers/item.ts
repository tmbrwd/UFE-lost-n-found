import { PrismaClient } from "@prisma/client";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const itemSchema = z.object({
  itemName: z.string(),
  itemDescription: z.string(),
  location: z.string(),
  foundDate: z.date(),
  itemImageUrl: z.string().optional(),
  categoryId: z.number(),
});

export const itemRouter = createTRPCRouter({
  createItem: publicProcedure.input(itemSchema).mutation(async ({ input }) => {
    const prisma = new PrismaClient();
    const validatedData = itemSchema.parse(input);
    const item = await prisma.item.create({
      data: {
        itemName: validatedData.itemName,
        itemDescription: validatedData.itemDescription,
        location: validatedData.location,
        foundDate: validatedData.foundDate,
        itemImageUrl: validatedData.itemImageUrl,
        categoryId: validatedData.categoryId,
      },
    });

    return item;
  }),
});