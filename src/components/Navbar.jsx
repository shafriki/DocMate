import React from "react";
import logo from '../../public/assets/docmate.png';
import Link from "next/link";

export default function Navbar() {

    const navMenu = () => {
        return(
            <>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/">All Doctors</Link></li>
            <li><Link href="/">Doctor</Link></li>
            </>
        )
    }
    return (
        <div className="border-b w-full top-0 sticky z-50 bg-gradient-to-r from-[#042020] via-[#1e4046] to-[#0EA5E9] text-white">
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
                            className="menu menu-sm dropdown-content bg-black rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navMenu()}
                        </ul>
                    </div>
                    <a className=""><img src="assets/docmate.png" alt="DocMate Logo" className="w-32"/></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navMenu()}
                        
                        
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
