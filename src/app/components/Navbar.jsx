"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "Contact", href: "/pages/contact" },
    { name: "About Us", href: "/pages/about" },
   // ...(session ? [{ name: "Add Doctor", href: "/pages/addDoctor" }] : []),
    ...(session ? [{ name: "Dashboard", href: `/dashboard/${session?.user?.role}/home` }] : []),
    
  ];

  const closeMenu = () => setIsOpen(false);

  const isActive = (href) => pathname === href;

  return (
    <nav className="bg-gradient-to-r from-[#042020] via-[#1e4046] to-[#0EA5E9] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center" onClick={closeMenu}>
            <Image
              src="/assets/docmate.png"
              alt="DocMate Logo"
              width={128}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? "bg-blue-500 text-white"
                      : "text-white hover:bg-blue-500/50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="ml-6 flex items-center space-x-4">
              {session ? (
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors duration-200"
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link
                    href="/login"
                    className={`px-4 py-2 rounded-md transition-colors duration-200 ${
                      isActive("/login")
                        ? "bg-blue-600 text-white"
                        : "border-2 border-blue-600 text-blue-100 hover:bg-blue-600"
                    }`}
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    className={`px-4 py-2 rounded-md transition-colors duration-200 ${
                      isActive("/register")
                        ? "bg-blue-600 text-white"
                        : "border-2 border-blue-600 text-blue-100 hover:bg-blue-600"
                    }`}
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-200 hover:text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? (
              <X className="h-8 w-8" />
            ) : (
              <Menu className="h-8 w-8" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden bg-gradient-to-b from-[#042020] to-[#1e4046] overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={closeMenu}
              className={`block px-4 py-3 rounded-md transition-colors duration-200 ${
                isActive(item.href)
                  ? "bg-blue-500 text-white"
                  : "text-white hover:bg-blue-500/50"
              }`}
            >
              {item.name}
            </Link>
          ))}

          <div className="pt-4 border-t border-blue-900/50">
            {session ? (
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="w-full px-4 py-3 text-left text-red-100 hover:bg-red-900/20 rounded-md transition-colors duration-200"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  href="/login"
                  onClick={closeMenu}
                  className={`block px-4 py-3 rounded-md transition-colors duration-200 ${
                    isActive("/login")
                      ? "bg-blue-600 text-white"
                      : "text-white hover:bg-blue-600/50"
                  }`}
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  onClick={closeMenu}
                  className={`block px-4 py-3 rounded-md transition-colors duration-200 ${
                    isActive("/register")
                      ? "bg-blue-600 text-white"
                      : "text-white hover:bg-blue-600/50"
                  }`}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}