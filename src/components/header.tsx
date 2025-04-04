"use client"; // Required for state in Next.js 15
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // Dropdown toggle

  return (
    <header className="fixed top-0 left-0 w-full bg-[#013170] text-white py-5 z-50 shadow-md">
      <div className="max-w-[1500px] mx-auto grid grid-cols-12 items-center px-6">
        
        {/* ✅ Logo Section (Grid 2/12) */}
        <div className="col-span-2 flex items-center">
          <Image src='/logo-top.png' width={123} height={46} alt="footerlogo"></Image>
        </div>

        {/* ✅ Desktop Navigation (Grid 10/12) */}
        <nav className="hidden md:flex col-span-10 justify-end items-baseline">
          <ul className="flex gap-x-15 text-[16px] font-['Plus_Jakarta_Sans'] tracking-wide font-normal items-baseline">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/aboutus" className="hover:underline">About Us</Link></li>

            {/* ✅ Dropdown for Services */}
            <li className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="hover:underline focus:outline-none flex items-center gap-x-2"
              >
                Services <span className="text-xl">▾</span>
              </button>
              {dropdownOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg">
                  <li><Link href="#" className="block px-4 py-2 hover:bg-gray-200">Service 1</Link></li>
                  <li><Link href="#" className="block px-4 py-2 hover:bg-gray-200">Service 2</Link></li>
                  <li><Link href="#" className="block px-4 py-2 hover:bg-gray-200">Service 3</Link></li>
                </ul>
              )}
            </li>

            <li><Link href="#" className="hover:underline">Public Notary</Link></li>
            <li><Link href="#" className="hover:underline">FAQs</Link></li>
            <li><Link href="#" className="hover:underline">Blogs</Link></li>
            <li><Link href="#" className="hover:underline">Contact Us</Link></li>
            <li><Link href="#" className="bg-[#E4022B] hover:bg-[#c80024] text-white px-7 py-2 rounded-4xl flex items-center space-x-2"><Image src="/book_now.svg" width={18} height={18} alt="Book Now" /> <span>Book Now</span></Link></li>
          </ul>
        </nav>

        {/* ✅ Mobile Menu Button */}
        <div className="col-span-10 flex justify-end md:hidden">
          <button className="text-3xl" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* ✅ Mobile Navigation */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#013170] z-50 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out md:hidden">
          <button className="absolute top-5 right-5 text-3xl" onClick={() => setIsOpen(false)}>
            <FiX />
          </button>

          <ul className="text-lg space-y-6 text-center">
            <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link href="#" onClick={() => setIsOpen(false)}>About Us</Link></li>

            {/* ✅ Mobile Dropdown */}
            <li className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="focus:outline-none"
              >
                Services ▼
              </button>
              {dropdownOpen && (
                <ul className="bg-white text-black rounded-lg shadow-lg mt-2">
                  <li><Link href="#" className="block px-4 py-2 hover:bg-gray-200 bg">Service 1</Link></li>
                  <li><Link href="#" className="block px-4 py-2 hover:bg-gray-200">Service 2</Link></li>
                  <li><Link href="#" className="block px-4 py-2 hover:bg-gray-200">Service 3</Link></li>
                </ul>
              )}
            </li>

            <li><Link href="#" onClick={() => setIsOpen(false)}>Public Notary</Link></li>
            <li><Link href="#" onClick={() => setIsOpen(false)}>FAQs</Link></li>
            <li><Link href="#" onClick={() => setIsOpen(false)}>Blogs</Link></li>
            <li><Link href="#" onClick={() => setIsOpen(false)}>Contact Us</Link></li>
            <li><Link href="#" onClick={() => setIsOpen(false)}>Book Now</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
