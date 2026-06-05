import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  country: z.string().min(1, "Please select your country"),
  subject: z.string().min(1, "Please select a subject of interest"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message cannot exceed 1000 characters"),
});

export const enrollmentSchema = z.object({
  courseId: z.string().cuid(),
  currency: z.enum(["USD", "GBP", "AED", "PKR"]).default("USD"),
  couponCode: z.string().optional(),
});

export const signUpSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        "Password must contain uppercase, lowercase, and a number"
      ),
    confirmPassword: z.string(),
    role: z.enum(["STUDENT", "PARENT"]).default("STUDENT"),
    country: z.string().min(1, "Please select your country"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
export type EnrollmentValues = z.infer<typeof enrollmentSchema>;
export type SignUpValues = z.infer<typeof signUpSchema>;
export type SignInValues = z.infer<typeof signInSchema>;
