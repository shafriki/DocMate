'use client';

import Link from 'next/link';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles

const About = () => {
    useEffect(() => {
        // Initialize AOS
        AOS.init({
            duration: 1000, // Optional: Set the duration for the fade-up animation
            once: true,     // Optional: Make sure the animation only happens once
        });
    }, []);

    return (
        <div className='max-w-screen-xl mx-auto my-20'>
            <div className="grid grid-cols-1 md:grid-cols-7 md:grid-rows-6 gap-4 md:h-[500px]">
                {/* Short Image 1 */}
                <div className="flex justify-center md:col-span-2 md:row-span-3" data-aos="fade-up">
                    <img src="assets/abouts-img1.jpg" className='w-full h-[200px] md:h-full object-cover md:rounded-2xl' alt="" />
                </div>
                {/* Short Image 2 */}
                <div className="flex justify-center md:col-span-2 md:row-span-3 md:col-start-1 md:row-start-4" data-aos="fade-up">
                    <img src="assets/abouts-img1.jpg" className='w-full h-[200px] md:h-full object-cover md:rounded-2xl' alt="" />
                </div>
                {/* Long Image */}
                <div className="flex justify-center md:col-span-2 md:row-span-6 md:col-start-3 md:row-start-1" data-aos="fade-up">
                    <img src="assets/abouts-img2.jpg" className='w-full h-[200px] md:h-full object-cover md:rounded-2xl' alt="" />
                </div>
                {/* Description */}
                <div className="text-left p-4 md:p-8 md:col-span-3 md:row-span-6 md:col-start-5 md:row-start-1 flex flex-col justify-center" data-aos="fade-up">
                    <p className='text-lg md:text-xl font-medium text-[#0EA5E9]'>REGARDING US</p>
                    <h2 className='text-2xl md:text-3xl font-semibold my-2'>We Are Here To Hear & Help With Your Health Problems</h2>
                    <p className='font-semibold text-md md:text-lg my-2'>We are a leading medical tourism facilitator in Bangladesh, providing African patients with world-class healthcare at affordable prices.</p>
                    <div className='flex flex-col md:flex-row justify-between items-center'>
                        <ul className='text-gray-700 space-y-2 md:space-y-0'>
                            <li>We Have Leading Edge Technology</li>
                            <li>High Standards & Safety at Hospital</li>
                            <li>We Have Professionals In Health</li>
                            <li>Specialists In Diseases & Diagnosis</li>
                        </ul>
                        <div className='bg-[#0EA5E9] p-4 text-center text-white font-bold rounded-lg mt-4 md:mt-0'>
                            <h2 className='text-4xl md:text-5xl my-0'>12
                                <p className='text-xl md:text-2xl'>
                                    Years
                                </p>
                                <p className='text-lg md:text-xl my-0'>
                                    OF EXPERIENCE
                                </p>
                            </h2>
                        </div>
                    </div>
                    <Link href='/pages/about' className='btn bg-[#0EA5E9] hover:bg-[#6dacc9] text-white mt-5 px-4 py-2 rounded-lg'>
                        More About Us
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default About;
