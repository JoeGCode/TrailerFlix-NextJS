"use client";
import { useState } from "react";
import { signOut } from "@/app/auth/actions/signOut";

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
