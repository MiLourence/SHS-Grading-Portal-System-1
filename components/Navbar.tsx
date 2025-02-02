"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi"; // Import burger and close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link href="/">
          <Image src="/shsGPS-logo.jpg" alt="Logo" width={50} height={30} />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 text-gray-700 font-medium">
          <li><Link href="/" className="hover:text-blue-600 transition">Home</Link></li>
          <li><Link href="/services" className="hover:text-blue-600 transition">Services</Link></li>
          <li><Link href="/about" className="hover:text-blue-600 transition">About Us</Link></li>
          <li><Link href="/grades" className="hover:text-blue-600 transition">Grades</Link></li>
          <li><Link href="/contacts" className="hover:text-blue-600 transition">Contacts</Link></li>
        </ul>

        {/* Sign Up Button (Desktop) */}
        <Link href="/signup" className="hidden lg:block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Sign Up
        </Link>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-2xl text-gray-700">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-md">
          <ul className="flex flex-col items-center gap-6 py-4 text-gray-700 font-medium">
            <li><Link href="/" className="hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link href="/services" className="hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>Services</Link></li>
            <li><Link href="/about" className="hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>About Us</Link></li>
            <li><Link href="/grades" className="hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>Grades</Link></li>
            <li><Link href="/contacts" className="hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>Contacts</Link></li>
            <li><Link href="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition" onClick={() => setIsOpen(false)}>Sign Up</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
