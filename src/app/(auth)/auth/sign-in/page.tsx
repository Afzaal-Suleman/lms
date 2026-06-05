"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { signInSchema, type SignInValues } from "@/lib/validations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { LogIn } from "lucide-react";

export default function SignInPage() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInValues>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (data: SignInValues) => {
    setLoading(true);
    // Simulate API call or nextauth sign in
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    toast({
      title: "Success",
      description: "Signed in successfully! Redirecting to dashboard...",
    });
    // Redirect logic goes here in a live app
    window.location.href = "/student/dashboard";
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white">Welcome Back</h2>
        <p className="mt-2 text-sm text-white/60">
          Access your courses, notes, and live classes
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        <div>
          <Label htmlFor="signin-email" className="text-white/80">Email Address</Label>
          <Input
            id="signin-email"
            type="email"
            placeholder="student@lmsowais.pk"
            className="mt-1.5 bg-white/5 border-white/10 text-white placeholder:text-white/30"
            {...register("email")}
            aria-describedby={errors.email ? "signin-email-error" : undefined}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p id="signin-email-error" className="text-xs text-destructive mt-1" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <div className="flex items-center justify-between">
            <Label htmlFor="signin-password" className="text-white/80">Password</Label>
            <Link
              href="/auth/forgot-password"
              className="text-xs text-teal-400 hover:underline"
            >
              Forgot password?
            </Link>
          </div>
          <Input
            id="signin-password"
            type="password"
            placeholder="••••••••"
            className="mt-1.5 bg-white/5 border-white/10 text-white placeholder:text-white/30"
            {...register("password")}
            aria-describedby={errors.password ? "signin-password-error" : undefined}
            aria-invalid={!!errors.password}
          />
          {errors.password && (
            <p id="signin-password-error" className="text-xs text-destructive mt-1" role="alert">
              {errors.password.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          variant="teal"
          className="w-full gap-2 mt-2"
          disabled={loading}
          id="signin-btn"
        >
          {loading ? (
            "Signing In..."
          ) : (
            <>
              <LogIn className="w-4 h-4" />
              Sign In
            </>
          )}
        </Button>
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-white/10" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-navy-900 px-2 text-white/40">Or continue with</span>
        </div>
      </div>

      <Button
        variant="outline-white"
        className="w-full"
        onClick={() => {
          toast({
            title: "OAuth Login",
            description: "Google Authentication is not configured yet.",
          });
        }}
      >
        Continue with Google
      </Button>

      <p className="text-center text-sm text-white/60">
        Don&apos;t have an account?{" "}
        <Link href="/auth/sign-up" className="font-semibold text-teal-400 hover:underline">
          Sign Up
        </Link>
      </p>
    </div>
  );
}
