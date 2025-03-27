import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-[#042020] via-[#1e4046] to-[#0EA5E9] text-white py-10">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start gap-4 md:gap-8 justify-between">

                {/* Left Side */}
                <div className="max-w-md">
                    {/* Logo */}
                    <Image
                        src="/assets/docmate.png"
                        alt="Med Expert BD Logo"
                        width={150}
                        height={50}
                        className="mb-2"
                    />
                    <p className="text-gray-400">
                        Your trusted consultancy for expert medical advice and healthcare solutions.
                    </p>

                    {/* Social Icons */}
                    <div className="mt-4 flex space-x-4">
                        <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition">
                            <FaFacebookF size={20} />
                        </a>
                        <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition">
                            <FaTwitter size={20} />
                        </a>
                        <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition">
                            <FaLinkedinIn size={20} />
                        </a>
                        <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition">
                            <FaInstagram size={20} />
                        </a>
                    </div>
                </div>

                {/* Right Side */}
                <div className="flex-shrink-0">
                    <h3 className="text-xl font-semibold text-gray-800">Quick Links</h3>
                    <ul className="mt-2 space-y-1 md:space-y-2">
                        <li><Link href="/" className="text-gray-600 hover:text-white transition">Home</Link></li>
                        <li><Link href="/services" className="text-gray-600 hover:text-white transition">Services</Link></li>
                        <li><Link href="/pages/about" className="text-gray-600 hover:text-white transition">About Us</Link></li>
                        <li><Link href="/contact-us" className="text-gray-600 hover:text-white transition">Contact Us</Link></li>
                    </ul>
                </div>
            </div>

            {/* Bottom Copyright */}
            <div className="mt-8 text-center text-gray-500 text-sm">
                © 2013-2025 · <span className="font-semibold">Med Expert BD Consultancy</span> · All rights reserved
            </div>
        </footer>
    );
}

