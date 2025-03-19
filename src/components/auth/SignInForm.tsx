"use client";
import { signIn } from "@/app/auth/actions/signIn";
import Link from "next/link";
import React, { useActionState } from "react";

function SignInForm() {
  const [formState, formAction] = useActionState(signIn, { errors: {} });
  return (
    <div className="rounded bg-black/70 flex flex-col items-center justify-center p-8">
      <h1 className="text-2xl">Sign In</h1>
      <form>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="a@example.com"
          className="form-input"
        />
        {formState.errors?.email && (
          <p className="text-red-500">{formState.errors.email[0]}</p>
        )}
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          className="form-input"
        />
        {formState.errors?.password && (
          <p className="text-red-500">{formState.errors.password[0]}</p>
        )}
        <button
          formAction={formAction}
          className="w-full mt-4 rounded bg-red-600 p-4 text-2xl"
        >
          Sign in
        </button>
        <p className="mt-4 mx-auto">
          <span className="text-gray-500">Don&apos;t have an account? </span>
          <Link href="/auth/sign-up">Sign up now</Link>
        </p>
      </form>
    </div>
  );
}

export default SignInForm;
