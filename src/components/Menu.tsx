"use client";

import { User } from "@supabase/supabase-js";
import Link from "next/link";
import { useState } from "react";
import { RiCloseLargeFill, RiMenuFill } from "react-icons/ri";
import SignOutButton from "./auth/SignOutButton";

type Props = {
  user: User | null;
};

function Menu({ user }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  function closeMenu() {
    setIsOpen(false);
  }
  return (
    <>
      {/* Menu Button */}
      <button className="rounded-lg p-4 hover:bg-gray-600" onClick={toggleMenu}>
        <RiMenuFill size={30} />
      </button>
      {/* Dark overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 hidden bg-black/50 md:block"
          onClick={closeMenu}
        ></div>
      )}
      {/* Menu */}
      <div
        className={`fixed left-0 top-0 z-50 flex h-full w-full transform flex-col bg-black duration-300 ease-in-out md:w-72 ${isOpen ? "translate-x-0" : "-translate-x-full"} `}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            className="rounded-lg p-4 hover:bg-gray-600"
            onClick={closeMenu}
          >
            <RiCloseLargeFill size={30} />
          </button>
        </div>
        {/* Menu Content */}
        <nav className="flex flex-grow flex-col gap-2 overflow-y-auto p-4">
          <Link href="/" onClick={closeMenu} className="menu-item">
            Home
          </Link>
          {user && (
            <Link
              onClick={closeMenu}
              href="/user/my-list"
              className="menu-item"
            >
              My List
            </Link>
          )}
        </nav>
        {/* Footer */}
        <div className="p-4">
          {user ? (
            <SignOutButton />
          ) : (
            <Link href="/auth/login" onClick={closeMenu}>
              <div className="red-button">Sign In</div>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default Menu;
