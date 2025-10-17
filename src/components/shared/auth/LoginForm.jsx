"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { login } from "@/redux/actions/authAction";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import { useState } from "react";
import { AlertCircle, Loader2 } from "lucide-react";
import { loginSchema } from "@/lib/validators/authSchema";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";


const LoginForm = () => {
  const dispatch = useDispatch();
  const [serverError, setServerError] = useState(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      setServerError(null);
      const response = await dispatch(login(data));

      if (login.fulfilled.match(response)) {
        router.push("/products");
      }

      if (login.rejected.match(response)) {
        const errorData = response.payload;

        // Handle field-specific errors from server
        if (typeof errorData === "object" && !Array.isArray(errorData)) {
          Object.keys(errorData).forEach((field) => {
            if (field === "email" || field === "password") {
              setError(field, {
                type: "server",
                message: errorData[field],
              });
            }
          });
        } else {
          // Handle general error message
          setServerError(
            typeof errorData === "string"
              ? errorData
              : "Invalid credentials. Please try again."
          );
        }
      }
    } catch (error) {
      setServerError("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto px-4 sm:px-6">
      <Card className="p-12 shadow-lg border-0">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="text-center space-y-2 mb-16">
            <h4 className="text-xl sm:text-2xl font-semibold text-foreground">
              Sign in to your account
            </h4>

          </div>

          {serverError && (
            <div className="flex items-start gap-3 p-4 rounded-lg bg-destructive/10 border border-destructive/20">
              <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
              <p className="text-sm text-destructive">{serverError}</p>
            </div>
          )}

          <div className="space-y-2">
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              {...register("email")}
              className={errors.email ? "border-destructive focus-visible:ring-destructive/20" : ""}
              disabled={isSubmitting}
            />
            {errors.email && (
              <p className="text-sm text-destructive flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4" />
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Signing in...
              </>
            ) : (
              "Sign in"
            )}
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default LoginForm;