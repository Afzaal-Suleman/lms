"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { signUpSchema, type SignUpValues } from "@/lib/validations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { UserPlus } from "lucide-react";

const countries = [
  "United Kingdom",
  "United Arab Emirates",
  "Pakistan",
  "Malaysia",
  "Saudi Arabia",
  "Nigeria",
  "Kenya",
  "Canada",
  "Australia",
];

export default function SignUpPage() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpValues>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: SignUpValues) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    toast({
      title: "Account Created",
      description: "Welcome to LMS OWAIS PK! Redirecting to portal...",
    });
    window.location.href = "/student/dashboard";
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white">Create Account</h2>
        <p className="mt-2 text-sm text-white/60">
          Join 2,500+ students from 20+ countries
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        <div>
          <Label htmlFor="signup-name" className="text-white/80">Full Name *</Label>
          <Input
            id="signup-name"
            placeholder="John Doe"
            className="mt-1.5 bg-white/5 border-white/10 text-white placeholder:text-white/30"
            {...register("name")}
            aria-describedby={errors.name ? "signup-name-error" : undefined}
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <p id="signup-name-error" className="text-xs text-destructive mt-1" role="alert">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="signup-email" className="text-white/80">Email Address *</Label>
          <Input
            id="signup-email"
            type="email"
            placeholder="you@example.com"
            className="mt-1.5 bg-white/5 border-white/10 text-white placeholder:text-white/30"
            {...register("email")}
            aria-describedby={errors.email ? "signup-email-error" : undefined}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p id="signup-email-error" className="text-xs text-destructive mt-1" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="signup-role" className="text-white/80">Role *</Label>
            <select
              id="signup-role"
              className="flex h-11 w-full rounded-xl border border-white/10 bg-navy-950/90 text-white px-3 py-2 text-sm mt-1.5 focus:outline-none focus:ring-2 focus:ring-teal-500"
              {...register("role")}
            >
              <option value="STUDENT">Student</option>
              <option value="PARENT">Parent</option>
            </select>
          </div>

          <div>
            <Label htmlFor="signup-country" className="text-white/80">Country *</Label>
            <select
              id="signup-country"
              className="flex h-11 w-full rounded-xl border border-white/10 bg-navy-950/90 text-white px-3 py-2 text-sm mt-1.5 focus:outline-none focus:ring-2 focus:ring-teal-500"
              {...register("country")}
              aria-invalid={!!errors.country}
            >
              <option value="">Select country</option>
              {countries.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            {errors.country && (
              <p className="text-xs text-destructive mt-1" role="alert">
                {errors.country.message}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="signup-password" className="text-white/80">Password *</Label>
            <Input
              id="signup-password"
              type="password"
              placeholder="••••••••"
              className="mt-1.5 bg-white/5 border-white/10 text-white placeholder:text-white/30"
              {...register("password")}
              aria-describedby={errors.password ? "signup-password-error" : undefined}
              aria-invalid={!!errors.password}
            />
            {errors.password && (
              <p id="signup-password-error" className="text-xs text-destructive mt-1" role="alert">
                {errors.password.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="signup-confirm-password" className="text-white/80">Confirm Password *</Label>
            <Input
              id="signup-confirm-password"
              type="password"
              placeholder="••••••••"
              className="mt-1.5 bg-white/5 border-white/10 text-white placeholder:text-white/30"
              {...register("confirmPassword")}
              aria-describedby={errors.confirmPassword ? "signup-confirm-password-error" : undefined}
              aria-invalid={!!errors.confirmPassword}
            />
            {errors.confirmPassword && (
              <p id="signup-confirm-password-error" className="text-xs text-destructive mt-1" role="alert">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
        </div>

        <Button
          type="submit"
          variant="teal"
          className="w-full gap-2 mt-2"
          disabled={loading}
          id="signup-btn"
        >
          {loading ? (
            "Creating Account..."
          ) : (
            <>
              <UserPlus className="w-4 h-4" />
              Sign Up
            </>
          )}
        </Button>
      </form>

      <p className="text-center text-sm text-white/60">
        Already have an account?{" "}
        <Link href="/auth/sign-in" className="font-semibold text-teal-400 hover:underline">
          Sign In
        </Link>
      </p>
    </div>
  );
}
