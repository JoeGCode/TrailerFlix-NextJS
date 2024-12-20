import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="text-center py-2">
      <Link href="/about">About</Link>
    </footer>
  );
}

export default Footer;
