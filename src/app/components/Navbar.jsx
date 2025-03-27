"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const { data: session } = useSession(); 
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gradient-to-r from-[#042020] via-[#1e4046] to-[#0EA5E9] shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="text-xl font-bold text-blue-600">
                    <img src="assets/docmate.png" alt="DocMate Logo" className="w-32"/>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                        <Link href="/" className="text-white hover:text-blue-600">Home</Link>
                        <Link href="/features" className="text-white hover:text-blue-600">Features</Link>
                        <Link href="/contact" className="text-white hover:text-blue-600">Contact</Link>
                        {session && (
                            <Link href="/pages/about" className="text-white hover:text-blue-600">
                                About
                            </Link>
                        )}
                    </div>

                    {/* Auth Buttons */}
                    <div className="hidden md:flex space-x-4">
                        {session ? (
                            <button
                                onClick={() => signOut()} // Logout
                                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
                            >
                                Logout
                            </button>
                        ) : (
                            <>
                                <Link href="/login" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                                    Login
                                </Link>
                                <Link href="/register" className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition">
                                    Register
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden text-gray-700 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden space-y-2 bg-white border-t py-4">
                    <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Home</Link>
                    <Link href="/features" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Features</Link>
                    <Link href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Contact</Link>
                    {session && (
                        <Link href="/pages/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">About</Link>
                    )}
                    {session ? (
                        <button
                            onClick={() => signOut()}
                            className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                        >
                            Logout
                        </button>
                    ) : (
                        <>
                            <Link href="/login" className="block px-4 py-2 text-blue-600 font-semibold hover:bg-gray-100">
                                Login
                            </Link>
                            <Link href="/register" className="block px-4 py-2 text-blue-600 font-semibold hover:bg-gray-100">
                                Register
                            </Link>
                        </>
                    )}
                </div>
            )}
        </nav>
    );
}