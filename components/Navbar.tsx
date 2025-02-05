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
          <Image src="/home-logo.png" alt="Logo" width={75} height={30} />
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
        <button onClick={() => setIsOpen(true)} className="lg:hidden text-3xl text-gray-700">
          <FiMenu />
        </button>
      </div>

      {/* Full-Screen Mobile Sidebar */}
      <div className={`fixed inset-0 bg-white shadow-lg transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out z-50 flex flex-col`}>
        {/* Close Button */}
        <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-3xl text-green-600">
          <FiX />
        </button>

        {/* Logo */}
        <div className="flex justify-center pt-10">
          <Image src="/home-logo.png" alt="Logo" width={100} height={60} />
        </div>

        {/* Menu List */}
        <ul className="w-full mt-6 border border-gray-300 divide-y divide-gray-300 text-gray-800 font-medium text-lg text-center flex flex-col flex-grow">
          <li className="p-6"><Link href="/" className="block hover:bg-gray-100 transition" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li className="p-6"><Link href="/services" className="block hover:bg-gray-100 transition" onClick={() => setIsOpen(false)}>Services</Link></li>
          <li className="p-6"><Link href="/about" className="block hover:bg-gray-100 transition" onClick={() => setIsOpen(false)}>About Us</Link></li>
          <li className="p-6"><Link href="/grades" className="block hover:bg-gray-100 transition" onClick={() => setIsOpen(false)}>Grades</Link></li>
          <li className="p-6"><Link href="/contacts" className="block hover:bg-gray-100 transition" onClick={() => setIsOpen(false)}>Contacts</Link></li>
          <li className="p-6 mb-10">
            <Link href="/signup" className="block bg-blue-600 text-white text-center px-6 py-3 rounded-lg hover:bg-blue-700 transition" onClick={() => setIsOpen(false)}>Sign Up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
