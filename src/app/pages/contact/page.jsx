import Image from "next/image";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaGoogle, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";

export default function Contact() {
    return (
        <div>
            {/* Contact Us Section with Background Image */}
            <div className="relative w-full h-[80vh] flex items-center justify-center text-center">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                    <Image
                        src="/assets/aboutUs.jpg"
                        alt="Background"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        className="opacity-40"
                    />
                </div>

                {/* Contact Us Heading */}
                <div className="relative z-10">
                    <h2 className="text-5xl font-bold text-white drop-shadow-lg">Contact Us</h2>
                </div>
            </div>

            {/* Contact Information Section */}
            <div className="flex justify-center items-center gap-8 py-16 px-4">
                {/* Location Card */}
                <div className="bg-gray-100 rounded-lg shadow-md p-6 w-80 text-center">
                    <FaMapMarkerAlt className="text-4xl text-teal-500 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Location</h3>
                    <p className="text-gray-700">Uttara, Dhaka, 110018</p>
                </div>

                {/* Phone Number Card */}
                <div className="bg-white rounded-lg shadow-2xl p-6 w-80 text-center">
                    <FaPhoneAlt className="text-4xl text-teal-500 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Phone Number</h3>
                    <p className="text-gray-700">Receptionist No.: 01259847490</p>
                </div>

                {/* Email Address Card */}
                <div className="bg-gray-100 rounded-lg shadow-md p-6 w-80 text-center">
                    <FaEnvelope className="text-4xl text-teal-500 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Email Address</h3>
                    <p className="text-gray-700">info@docMate.com</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6  max-w-6xl mx-auto">
            {/* Get In Touch Section - Left Side */}
            <div className="text-center md:text-left">
                <h3 className="text-purple-700 font-bold uppercase">Contact Us</h3>
                <h2 className="text-4xl font-bold text-gray-900 mt-2">
                    Get In Touch For More Information !!
                </h2>
                <p className="text-gray-700 mt-4">
                    Get in touch with us today for expert medical assistance and a hassle-free journey
                    to world-class heart treatment in India!
                </p>

                {/* Social Media Links */}
                <h3 className="text-lg font-semibold text-gray-800 mt-6">Follow Us On Social Media:</h3>
                <div className="flex justify-center md:justify-start gap-4 mt-4">
                    <FaFacebook className="text-teal-500 text-3xl cursor-pointer" />
                    <FaGoogle className="text-teal-500 text-3xl cursor-pointer" />
                    <FaInstagram className="text-teal-500 text-3xl cursor-pointer" />
                    <FaYoutube className="text-teal-500 text-3xl cursor-pointer" />
                    <FaPinterest className="text-teal-500 text-3xl cursor-pointer" />
                </div>
            </div>

            {/* Email Section - Right Side */}
            <div className="flex justify-center items-center min-h-screen  px-4">
            <div className="bg-white  w-full max-w-lg">
                <form className="space-y-6">
                    <input
                        type="text"
                        placeholder="Enter Your Full Name.."
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Enter Your Email Address.."
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Enter Your Subject"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        required
                    />
                    <textarea
                        placeholder="Enter your Message.."
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 h-32"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-teal-500 text-white py-3 rounded-lg hover:bg-teal-600 transition duration-300"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
        </div>


        </div>
    );
}
