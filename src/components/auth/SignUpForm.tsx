"use client";
import { signUp } from "@/actions/auth/signUp";
import { useActionState } from "react";

function SignUpForm() {
  const [formState, formAction] = useActionState(signUp, { errors: {} });
  return (
    <div className="w-full rounded border border-gray-500 p-8 sm:max-w-sm">
      <h1 className="text-center text-2xl">Sign Up</h1>
      <div className="w-full">
        <form>
          <div>
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
          </div>
          <div>
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
          </div>
          <div>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
              className="form-input"
            />
            {formState.errors?.confirmPassword && (
              <p className="text-red-500">
                {formState.errors.confirmPassword[0]}
              </p>
            )}
          </div>
          <button
            formAction={formAction}
            className="mt-4 w-full rounded bg-red-600 p-4 text-2xl"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
