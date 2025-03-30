"use client";

import React, { useEffect } from 'react';
import { FaQuoteLeft } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Review = () => {
    useEffect(() => {
        // Initialize AOS animation
        AOS.init({
            duration: 1000,
            once: false,
        });

        const handleScroll = () => {
            AOS.refresh();
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='max-w-screen-xl md:mx-auto my-20 mx-5'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-center items-center'>
                
                {/* Left side div */}
                <div className='flex flex-col gap-10' data-aos="fade-up">
                    {/* First Review */}
                    <div className='flex flex-col bg-gray-50 shadow-xl p-5 rounded-md mb-5' data-aos="fade-up">
                        <p className='text-justify'>“I was nervous about traveling to India for my spine surgery, but MedExpert India made the process so easy. The care I received was exceptional, and I’m now pain-free!”</p>

                        <div className='flex my-7'>
                            <img src='https://i.ibb.co.com/tMz6zDkK/u1.jpg' alt="patient" className='w-12 rounded-full'/>
                            <div className='flex items-center ml-1'>
                                <div className='flex flex-col items-start ml-5'>
                                    <p className='text-base font-semibold'>Mr. Okoye</p>
                                    <p>Patient</p>
                                </div>
                                <FaQuoteLeft className='text-2xl text-emerald-500 ml-20'/>
                            </div>
                        </div>
                    </div>

                    {/* Second Review */}
                    <div className='flex flex-col bg-gray-50 shadow-xl p-5 rounded-md' data-aos="fade-up">
                        <p className='text-justify'>“I was nervous about traveling to India for my spine surgery, but MedExpert India made the process so easy. The care I received was exceptional, and I’m now pain-free!”</p>

                        <div className='flex my-7'>
                            <img src='https://i.ibb.co.com/XrspSkbW/u2.jpg' alt="patient" className='w-12 rounded-full'/>
                            <div className='flex items-center ml-5'>
                                <div className='flex flex-col items-start ml-1'>
                                    <p className='text-base font-semibold'>Ms. Zainab</p>
                                    <p>Patient</p>
                                </div>
                                <FaQuoteLeft className='text-2xl text-emerald-500 ml-20'/>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Middle div */}
                <div data-aos="fade-up">
                    {/* First Review */}
                    <div className='flex flex-col bg-gray-50 shadow-xl p-5 rounded-md mb-5' data-aos="fade-up">
                        <p className='text-justify'>“I was nervous about traveling to India for my spine surgery, but MedExpert India made the process so easy. The care I received was exceptional, and I’m now pain-free!”</p>

                        <div className='flex my-7'>
                            <img src='https://i.ibb.co.com/vCgjx0bj/u3.jpg' alt="patient" className='w-12 h-12 rounded-full'/>
                            <div className='flex items-center ml-1'>
                                <div className='flex flex-col items-start ml-5'>
                                    <p className='text-base font-semibold'>Jesmin Nipa</p>
                                    <p>Patient</p>
                                </div>
                                <FaQuoteLeft className='text-2xl text-emerald-500 ml-20'/>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right side div */}
                <div className='flex flex-col items-start space-y-5' data-aos="fade-up">
                    <p className='text-lg text-teal-500'>PATIENT’S TESTIMONIALS</p>
                    <p className='text-xl font-semibold'>Positive Review & Appreciated By Happy Patient’s</p>
                    <p className='text-justify text-gray-600'>Discover inspiring testimonials from our patients across Africa who have experienced world-class medical care in India. From life-changing surgeries to compassionate support, their success stories reflect our commitment to delivering the best healthcare solutions with trust and excellence.</p>
                </div>
            </div>
        </div>
    );
};

export default Review;
