import Link from 'next/link';
import React from 'react';
import { FaLocationArrow, FaLongArrowAltRight } from "react-icons/fa";

const Services = () => {
    return (
        <div className='w-11/12 mx-auto my-5'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-4">
                {/* Health Facilities Section */}
                <div className="lg:col-span-3 md:col-span-3 col-span-1">
                    <div className='flex flex-col justify-between items-start p-2'>
                        <h2 className='text-lg text-blue-400'>HEALTH FACILITIES</h2>
                        <h3 className='text-2xl md:text-3xl font-medium my-4'>Explore Medical Department List</h3>
                        <p className='text-base md:text-lg mb-2'>
                            Find world-class treatments across specialties, ensuring the best care for your needs.
                        </p>
                        <button className='btn bg-blue-500 text-white px-4 py-2 rounded-md'>
                            View All Departments <FaLocationArrow/>
                        </button>
                    </div>
                </div>

                {/* Service Cards */}
                {[
                    { img: "assets/cancer.png", title: "Oncology Treatment", desc: "Advanced oncology care with top specialists and cutting-edge technology." },
                    { img: "assets/bone.png", title: "Spine Surgery", desc: "Advanced treatment for spinal disorders with expert surgeons and world-class care." },
                    { img: "assets/liver.png", title: "Organ Transplant", desc: "Life-saving transplants with top specialists and world-class medical facilities." },
                    { img: "assets/heartbeat.png", title: "Heart Surgery", desc: "Advanced cardiac care with top surgeons and world-class hospitals." },
                    { img: "assets/neuron.png", title: "Neuro Surgery", desc: "Cutting-edge brain and spine treatments by expert neurosurgeons." },
                    { img: "assets/arthritis.png", title: "Orthopedic Surgery", desc: "Expert care for joint, bone treatments with top surgeons.ensure best services" },
                ].map((service, index) => (
                    <div key={index} className="lg:col-span-2 md:col-span-3 sm:col-span-2 col-span-1 flex items-center justify-center">
                        <div className='flex flex-col items-center justify-center p-4 bg-gray-100 rounded-2xl shadow-md w-full'>
                            <img src={service.img} className='h-24 w-24 md:h-32 md:w-32' alt={service.title} />
                            <h3 className='text-lg md:text-xl font-bold mt-3'>{service.title}</h3>
                            <p className='text-center text-sm md:text-base mt-2'>{service.desc}</p>
                            <div className='flex justify-center items-center gap-1'>
                                <Link href={"/"} className='text-blue-500 underline'>Learn More  </Link>
                                <FaLongArrowAltRight className='text-blue-500'/>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Call Us Section */}
                <div className="relative lg:col-span-3 md:col-span-3 col-span-1 flex items-center justify-center p-4 rounded-2xl">
                    {/* Background Image with Overlay */}
                    <div
                        className="absolute inset-0 bg-[url('/assets/abouts-img1.jpg')] bg-cover bg-center bg-no-repeat opacity-30 rounded-2xl"
                    ></div>
                    {/* Content */}
                    <div className="relative text-center p-4 rounded-lg">
                        <h3 className='text-3xl font-bold'>Call Us</h3>
                        <h3 className='text-xl font-semibold my-2'>+880123456789</h3>
                        <p>info@docmate.com</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Services;
