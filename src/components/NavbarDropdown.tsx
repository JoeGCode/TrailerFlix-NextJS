"use client";
import React, { useState } from "react";
import SignOutButton from "./auth/SignOutButton";

function NavbarDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  function toggleDropdown() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="relative inline-block text-left">
      <div>
        <button onClick={toggleDropdown}>MENU</button>
      </div>
      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-600 ring-1 ring-gray-600 rounded-md bg-black">
          <div className="py-2">
            <span className="p-2 text-xl">Account</span>
          </div>
          <div className="p-2">
            <SignOutButton />
          </div>
        </div>
      )}
    </div>
  );
}

export default NavbarDropdown;
