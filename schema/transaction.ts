import { z } from "zod";

export const CreateTransactionSchema = z.object({
  amount: z.coerce.number().positive().multipleOf(0.01),
  description: z.string().optional(),
  date: z.coerce.date(),
  type: z.union([z.literal("income"), z.literal("expense")]),
  category: z.string()
});

export type CreateTransactionSchemaType = z.infer<typeof CreateTransactionSchema>;
