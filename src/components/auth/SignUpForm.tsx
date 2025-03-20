"use client";
import { signUp } from "@/actions/auth/signUp";
import { useActionState } from "react";

function SignUpForm() {
  const [formState, formAction] = useActionState(signUp, { errors: {} });
  return (
    <div className="rounded bg-black/70 flex flex-col items-center justify-center p-8">
      <h1 className="text-2xl">Sign Up</h1>
      <form>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email address"
          className="form-input"
        />
        {formState.errors?.email && (
          <p className="text-red-500">{formState.errors.email[0]}</p>
        )}
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          className="form-input"
        />
        {formState.errors?.password && (
          <p className="text-red-500">{formState.errors.password[0]}</p>
        )}
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm your password"
          className="form-input"
        />
        {formState.errors?.confirmPassword && (
          <p className="text-red-500">{formState.errors.confirmPassword[0]}</p>
        )}
        <button
          formAction={formAction}
          className="w-full mt-4 rounded bg-red-600 p-4 text-2xl"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUpForm;
