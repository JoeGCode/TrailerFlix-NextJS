"use server";

import { My_List_Type } from "@/types/db";
import { createClient } from "@/utils/supabase/server";

export async function toggleAddToList(itemId: number, type: My_List_Type) {
  const supabase = await createClient();

  const { data: userData, error: userError } = await supabase.auth.getUser();

  if (userError || !userData) throw new Error("Error authenticating user");

  const userId = userData.user.id;

  const { data: existingListItem, error: readError } = await supabase
    .from("user-my-list")
    .select("id")
    .eq("user_id", userId)
    .eq("item_id", itemId)
    .eq("type", type)
    .maybeSingle();

  if (readError) {
    throw readError;
  }

  if (existingListItem) {
    const {
      error: deleteError,
      status,
      statusText,
    } = await supabase
      .from("user-my-list")
      .delete()
      .eq("id", existingListItem.id);

    if (deleteError || status !== 204 || statusText !== "No Content") {
      throw deleteError;
    }

    return { status: "removed" };
  } else {
    const {
      error: insertError,
      status,
      statusText,
    } = await supabase.from("user-my-list").insert([
      {
        user_id: userId,
        item_id: itemId,
        type: type,
      },
    ]);
    if (insertError || status !== 201 || statusText !== "Created") {
      throw insertError;
    }

    return { status: "added" };
  }
}
