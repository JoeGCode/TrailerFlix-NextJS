"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function signOut() {
  const supabase = await createClient();

  // Check if a user is logged in
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    // Sign out the user
    await supabase.auth.signOut();
  }

  // Revalidate the path and redirect to the login page
  revalidatePath("/", "layout");
  redirect("/auth/login");
}
