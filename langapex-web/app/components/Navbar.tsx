'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

// Custom NavLink component
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(href + '/');

  return (
    <Link
      href={href}
      className={`nav-link ${isActive ? 'text-blue-600 font-bold' : 'text-gray-800'}`}
    >
      {children}
    </Link>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-white/90 backdrop-blur-sm fixed w-full z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 p-1">
          <div className="flex justify-between items-center h-16 p-1">
            <Link href="/" className="flex flex-col items-center">
              <Image
                src="/Logo.png"
                alt="LangApex Logo"
                width={64}
                height={64}
              />
              <span className="text-xl font-serif">Alumni</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <NavLink href="/events">Events</NavLink>
              <NavLink href="/alumni">Alumni</NavLink>
              <NavLink href="/gallery">Gallery</NavLink>
              <NavLink href="/workshop">Workshop</NavLink>
              <NavLink href='/moderation'>Guidelines</NavLink>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(true)}
                className="text-gray-800 focus:outline-none"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 transition-opacity duration-300"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <span className="text-lg font-semibold">Menu</span>
          <button onClick={() => setIsOpen(false)} className="text-gray-800">
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-4">
          <NavLink href="/alumni" >Alumni</NavLink>
          <NavLink href="/events" >Events</NavLink>
          <NavLink href="/gallery" >Gallery</NavLink>
          <NavLink href="/workshop" >Workshop</NavLink>
          <NavLink href='/moderation'>Guidelines</NavLink>
        </nav>
      </div>
    </>
  );
}
