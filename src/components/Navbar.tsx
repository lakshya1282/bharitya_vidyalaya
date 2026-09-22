"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu automatically when the route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0">
            <Image
              src="/images/logo.jpeg"
              alt="Bharti Vidyalaya Logo"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col text-left hidden sm:flex">
            <span className="text-zinc-900 font-bold text-lg leading-none tracking-tight">Bharti Vidyalaya</span>
            <span className="text-zinc-500 font-medium text-xs tracking-wider">KUMHARI</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-bold text-zinc-600">
          <Link href="/" className="hover:text-blue-700 transition-colors">Home</Link>
          <Link href="/about" className="hover:text-blue-700 transition-colors">About Us</Link>
          <Link href="/gallery" className="hover:text-blue-700 transition-colors">Gallery</Link>
          <Link href="/contact" className="hover:text-blue-700 transition-colors">Contact</Link>
        </div>

        {/* Mobile Menu & Enquire Button */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden sm:inline-block px-5 py-2.5 bg-blue-700 text-white font-semibold text-sm rounded-full shadow-md hover:bg-blue-800 transition-colors"
          >
            Enquire
          </Link>
          <button 
            className="md:hidden p-2 text-zinc-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white shadow-xl border-t border-zinc-100 flex flex-col">
          <div className="flex flex-col p-6 gap-6">
            <Link href="/" className="text-zinc-900 font-bold text-lg hover:text-blue-700 transition-colors">Home</Link>
            <Link href="/about" className="text-zinc-900 font-bold text-lg hover:text-blue-700 transition-colors">About Us</Link>
            <Link href="/gallery" className="text-zinc-900 font-bold text-lg hover:text-blue-700 transition-colors">Gallery</Link>
            <Link href="/contact" className="text-zinc-900 font-bold text-lg hover:text-blue-700 transition-colors">Contact</Link>
            
            <Link 
              href="/contact" 
              className="mt-4 px-6 py-4 text-center bg-blue-700 text-white font-bold rounded-full shadow-md hover:bg-blue-800 transition-colors"
            >
              Enquire for Admission
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
