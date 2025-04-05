import Image from "next/image";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaGoogle, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";

export default function Contact() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="relative w-full h-64 md:h-[400px] flex items-center justify-center text-center">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-teal-800/90 to-purple-800/90 z-1"></div>
                
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/assets/aboutUs.jpg"
                        alt="Background"
                        layout="fill"
                        objectFit="cover"
                        className="opacity-100"
                    />
                </div>

                {/* Heading */}
                <div className="relative z-10 space-y-4 px-4">
                    <h2 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
                        Contact Us
                    </h2>
                    <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
                        We're here to help and answer any questions you might have.
                    </p>
                </div>
            </div>

            {/* Contact Cards Section */}
            <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Location Card */}
                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="text-center">
                            <div className="bg-teal-100 w-fit p-4 rounded-full mx-auto">
                                <FaMapMarkerAlt className="text-3xl text-teal-600" />
                            </div>
                            <h3 className="text-xl font-semibold mt-6 mb-2">Our Location</h3>
                            <p className="text-gray-600">Uttara, Dhaka, 110018</p>
                        </div>
                    </div>

                    {/* Phone Card */}
                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="text-center">
                            <div className="bg-purple-100 w-fit p-4 rounded-full mx-auto">
                                <FaPhoneAlt className="text-3xl text-purple-600" />
                            </div>
                            <h3 className="text-xl font-semibold mt-6 mb-2">Phone Number</h3>
                            <p className="text-gray-600">Receptionist No.: 01259847490</p>
                        </div>
                    </div>

                    {/* Email Card */}
                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="text-center">
                            <div className="bg-teal-100 w-fit p-4 rounded-full mx-auto">
                                <FaEnvelope className="text-3xl text-teal-600" />
                            </div>
                            <h3 className="text-xl font-semibold mt-6 mb-2">Email Address</h3>
                            <p className="text-gray-600">info@docMate.com</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Content Section */}
            <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
                    {/* Left Column */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <span className="text-teal-600 font-semibold uppercase tracking-wide">
                                Stay Connected
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                                Let's Start a Conversation
                            </h2>
                            <p className="text-gray-600 text-lg">
                                Have questions about our services or need medical assistance? 
                                Our team is here to help you with world-class healthcare solutions.
                            </p>
                        </div>

                        {/* Social Media */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-gray-800">
                                Follow Us On:
                            </h3>
                            <div className="flex gap-6">
                                {[
                                    { icon: FaFacebook, color: "#3b5998" },
                                    { icon: FaGoogle, color: "#db4437" },
                                    { icon: FaInstagram, color: "#e1306c" },
                                    { icon: FaYoutube, color: "#ff0000" },
                                    { icon: FaPinterest, color: "#bd081c" },
                                ].map((SocialIcon, idx) => (
                                    <SocialIcon.icon 
                                        key={idx}
                                        className="text-3xl cursor-pointer hover:opacity-80 transition-opacity"
                                        style={{ color: SocialIcon.color }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
                        <form className="space-y-6">
                            <div>
                                <label className="block text-gray-700 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                    required
                                />
                            </div>
                            
                            <div>
                                <label className="block text-gray-700 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                    required
                                />
                            </div>
                            
                            <div>
                                <label className="block text-gray-700 mb-2">Subject</label>
                                <input
                                    type="text"
                                    placeholder="How can we help?"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                    required
                                />
                            </div>
                            
                            <div>
                                <label className="block text-gray-700 mb-2">Message</label>
                                <textarea
                                    placeholder="Your message here..."
                                    rows="4"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                    required
                                />
                            </div>
                            
                            <button
                                type="submit"
                                className="w-full bg-teal-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}