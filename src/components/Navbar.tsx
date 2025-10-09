"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="logo">Ailin</Link>
        <div className="nav-links">
          <Link href="/features">Features</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
