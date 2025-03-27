"use client";
import { toggleAddToList } from "@/actions/user/toggleAddToList";
import { My_List_Type } from "@/types/db";
import { createClient } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";
import { useEffect, useState, useTransition } from "react";
import { BsCheckLg, BsPlusLg, BsQuestionLg } from "react-icons/bs";

type Props = {
  itemId: number;
  type: My_List_Type;
};

function AddToListButton({ itemId, type }: Props) {
  const supabase = createClient();
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState("");
  const [isInList, setIsInList] = useState(false);
  const [loading, startTransition] = useTransition();

  useEffect(() => {
    async function checkIfInList() {
      try {
        const { data: userData, error: userError } =
          await supabase.auth.getUser();

        if (userError && userError.name === "AuthSessionMissingError") {
          setUser(null);
          setIsInList(false);
          return;
        }

        if (userError) {
          throw userError;
        }

        if (!userData) {
          throw new Error("User data not found");
        }

        if (userData.user) {
          setUser(userData.user);
        }

        const userId = userData.user.id;

        const { data, error: readError } = await supabase
          .from("user-my-list")
          .select("id")
          .eq("user_id", userId)
          .eq("item_id", itemId)
          .eq("type", type)
          .maybeSingle();

        if (readError) {
          throw readError;
        }

        setIsInList(!!data);
      } catch (err) {
        console.error("Failed to get data:", err);
        setError("An error occurred while fetching data.");
      }
    }
    checkIfInList();
  }, [itemId, supabase, type]);

  async function handleListClick() {
    startTransition(async () => {
      try {
        setError("");
        const res = await toggleAddToList(itemId, type);
        setIsInList(res.status === "added");
      } catch (err) {
        console.error("Failed toggling list item: ", err);
        setError("An error occurred while toggling list item.");
      }
    });
  }

  if (!user) {
    return null;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <>
      <button
        onClick={handleListClick}
        className="flex flex-col items-center justify-center rounded-sm px-4 py-6 hover:cursor-pointer hover:bg-white/35 sm:flex-row sm:gap-4 sm:text-2xl"
        disabled={loading}
      >
        {loading ? (
          <>
            <BsQuestionLg size={36} />
            <div>Loading</div>
          </>
        ) : isInList ? (
          <>
            <BsCheckLg size={36} />
            <div>Added to My List</div>
          </>
        ) : (
          <>
            <BsPlusLg size={36} />
            <div>Add to My List</div>
          </>
        )}
        {/* <div>My List</div> */}
      </button>
    </>
  );
}

export default AddToListButton;
