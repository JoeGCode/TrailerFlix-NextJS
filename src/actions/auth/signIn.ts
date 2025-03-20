"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { signInSchema } from "@/schemas/auth/signInSchema";
import { createClient } from "@/utils/supabase/server";

type SignInFormState = {
  errors: {
    email?: string[];
    password?: string[];
  };
};

export async function signIn(formState: SignInFormState, formData: FormData) {
  const supabase = await createClient();
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const zodResult = signInSchema.safeParse(data);

  if (!zodResult.success) {
    return { errors: zodResult.error.flatten().fieldErrors };
  }

  const { error } = await supabase.auth.signInWithPassword(zodResult.data);

  if (error) {
    return { errors: { email: [error.message] } };
  }

  revalidatePath("/", "layout");
  redirect("/");
}
