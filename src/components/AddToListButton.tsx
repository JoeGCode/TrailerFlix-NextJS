"use client";
import { createClient } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

function AddToListButton() {
  const supabase = createClient();
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getUser() {
      try {
        const { data: userData, error } = await supabase.auth.getUser();
        if (error || !userData) throw error;
        if (userData.user) {
          setUser(userData.user);
        }
      } catch (err) {
        console.error("Failed to get user:", err);
        setError("An error occurred while fetching user data.");
      }
    }
    getUser();
  }, [supabase.auth]);

  if (!user) {
    return null;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return <>{user ? <button>+</button> : <button>Sign In</button>}</>;
}

export default AddToListButton;
