import React from 'react';
const About = () => {
    return (
        <div className='w-11/12 mx-auto my-8'>
            <div className="grid grid-cols-7 grid-rows-6 gap-2">
                {/* short image 1 */}
                <div className="col-span-2 row-span-3">
                    <img src="assets/abouts-img1.jpg" className='w-full rounded-2xl' alt="" />
                </div>
                {/* short image  */}
                <div className="col-span-2 row-span-3 col-start-1 row-start-4">
                    <img src="assets/abouts-img1.jpg" className='w-full rounded-2xl' alt="" />
                </div>
                {/* long image */}
                <div className="col-span-2 row-span-6 col-start-3 row-start-1">
                    <img src="assets/abouts-img2.jpg" className='w-full h-full rounded-2xl' alt="" />
                </div>
                {/* description */}
                <div className="col-span-3 row-span-6 col-start-5 row-start-1 text-left p-8">
                    <div className='flex flex-col justify-center'>
                        <p className='text-xl font-medium text-blue-500'>REGARDING US</p>
                        <h2 className='text-3xl font-semibold my-2'>We Are Here To Hear & Help With Your Health Problems</h2>
                        <p className='font-semibold text-lg my-2'>We are a leading medical tourism in Bangladesh facilitator, providing African patients with world-class healthcare at affordable prices.</p>
                        <div className='flex justify-between items-center'>
                            <ul className='text-gray-700' itemType=''>
                                <li>We Have Leading Edge Technology</li>
                                <li>High Standards & Safety at Hospital</li>
                                <li>We Have Professionals In Health</li>
                                <li>Specialist In Diseases & Diagnosis</li>
                            </ul>
                            <div className='bg-blue-600 p-4 text-center text-white font-bold rounded-lg'>
                                <h2 className='text-5xl my-0'>12
                                    <p className='text-2xl'>
                                        Years
                                    </p>
                                    <p className='text-xl my-0'>
                                        OF EXPERIENCE
                                    </p>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <button className='btn bg-blue-500 text-white mt-5'>
                        More About Us
                    </button>
                </div>
            </div>

        </div>
    );
};

export default About;