import Link from "next/link";
import { FaFacebookF, FaPinterestP, FaGoogle, FaTwitter } from "react-icons/fa"; // Import icons

export default function Custom404() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-6">
            <h1 className="text-9xl font-extrabold text-black tracking-widest">
                404
            </h1>
            <h2 className="text-2xl font-semibold mt-4">PAGE NOT FOUND</h2>
            <p className="mt-2 text-gray-600">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>

            {/* Homepage Button */}
            <Link href="/" className="mt-6 px-6 py-3 text-lg border border-black font-semibold hover:bg-black hover:text-white transition-all">
                HOME PAGE
            </Link>

            {/* Social Icons */}
            <div className="mt-6 flex space-x-4">
                <span className="border border-black p-2 rounded-full hover:bg-black hover:text-white transition-all">
                    <FaFacebookF size={20} />
                </span>
                <span className="border border-black p-2 rounded-full hover:bg-black hover:text-white transition-all">
                    <FaTwitter size={20} />
                </span>
                <span className="border border-black p-2 rounded-full hover:bg-black hover:text-white transition-all">
                    <FaPinterestP size={20} />
                </span>
                <span className="border border-black p-2 rounded-full hover:bg-black hover:text-white transition-all">
                    <FaGoogle size={20} />
                </span>
            </div>
        </div>
    );
}
