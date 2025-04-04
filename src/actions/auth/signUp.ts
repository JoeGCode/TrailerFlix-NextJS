"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { signUpSchema } from "@/schemas/auth/signUpSchema";
import { createClient } from "@/utils/supabase/server";

type SignUpFormState = {
  errors: {
    email?: string[];
    password?: string[];
    confirmPassword?: string[];
  };
};

export async function signUp(formState: SignUpFormState, formData: FormData) {
  const supabase = await createClient();

  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  };

  const zodResult = signUpSchema.safeParse(data);

  if (!zodResult.success) {
    return { errors: zodResult.error.flatten().fieldErrors };
  }

  const { error } = await supabase.auth.signUp({
    email: zodResult.data.email,
    password: zodResult.data.password,
  });

  if (error) {
    return { errors: { email: [error.message] } };
  }

  revalidatePath("/", "layout");
  redirect("/auth/check-email");
}
