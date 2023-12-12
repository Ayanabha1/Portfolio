import { z } from "zod";

export const validationSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
  message: z.string().min(1, { message: "Message cannot be empty" }),
});

export type ValidationSchemaType = z.infer<typeof validationSchema>;
