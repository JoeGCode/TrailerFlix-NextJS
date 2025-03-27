"use client";
import { signIn } from "@/actions/auth/signIn";
import Link from "next/link";
import { useActionState } from "react";

function SignInForm() {
  const [formState, formAction] = useActionState(signIn, { errors: {} });
  return (
    <div className="w-full rounded border border-gray-500 p-8 sm:max-w-sm">
      <h1 className="text-center text-2xl">Sign In</h1>
      <div className="w-full">
        <form>
          <div>
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
          </div>
          <div>
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
          </div>
          <button
            formAction={formAction}
            className="mt-4 w-full rounded bg-red-600 p-4 text-2xl"
          >
            Sign in
          </button>
          <p className="mx-auto mt-4">
            <span className="text-gray-500">Don&apos;t have an account? </span>
            <Link href="/auth/sign-up">Sign up now</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignInForm;
