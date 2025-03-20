"use client";
import { signOut } from "@/actions/auth/signOut";
import { useState } from "react";

export default function SignOutButton() {
  const [loading, setLoading] = useState(false);

  async function handleSignOut() {
    setLoading(true);
    await signOut();
    setLoading(false);
  }

  return (
    <button
      onClick={handleSignOut}
      className="w-full bg-red-600 rounded p-4 text-lg"
      disabled={loading}
    >
      {loading ? "Signing out..." : "Sign Out"}
    </button>
  );
}
