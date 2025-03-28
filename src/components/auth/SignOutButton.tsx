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
    <button onClick={handleSignOut} className="red-button" disabled={loading}>
      {loading ? "Signing out..." : "Sign Out"}
    </button>
  );
}
