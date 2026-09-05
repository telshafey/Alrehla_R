import { z } from "zod";

export const requestSessionChangeSchema = z.object({
  reason: z.string().min(10, { message: "يجب كتابة سبب واضح للتغيير" }),
  alternativeDates: z.string().optional(),
});
