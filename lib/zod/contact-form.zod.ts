import { z } from "zod";

export const MESSAGE_MAX_LENGTH = 500;

export const ZContactForm = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters long",
    })
    .max(50, {
      message: "Name must be less than 50 characters long",
    }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  message: z
    .string()
    .min(10, {
      message: "Message must be at least 10 characters long",
    })
    .max(MESSAGE_MAX_LENGTH, {
      message: "Message must be less than 500 characters long",
    }),
});
