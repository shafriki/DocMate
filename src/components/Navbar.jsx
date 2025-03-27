import React from "react";
import logo from '../../public/assets/docmate.png';
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="border-b fixed w-full top-0 z-50 bg-gradient-to-r from-[#042020] via-[#272f30] to-[#0EA5E9] text-white">
            <div className="navbar max-w-screen-xl mx-auto px-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className=""><img src="assets/docmate.png" alt="DocMate Logo" className="w-32"/></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/">All Doctors</Link></li>
                        <li><Link href="/">Doctor</Link></li>
                        
                        
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link href='' className="btn border-none rounded-full">Sign In</Link>
                    <Link href='' className="btn border-none rounded-full ml-4">Sign Up</Link>
                </div>
            </div>
        </div>
    );
}
