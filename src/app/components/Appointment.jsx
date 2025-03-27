import React from "react";
import Link from "next/link";

export default function Appointment() {
    return(
        <div className="relative bg-fixed bg-cover bg-center mb-20" style={{ backgroundImage: "url('/assets/doctor-bg.jpg')" }}>
            
            {/* overlay */}
            <div className="absolute inset-0 bg-gray-700 opacity-90 "></div>
            
            {/* content */}
            <div className="flex flex-col md:flex-row items-center justify-between max-w-screen-xl mx-auto pt-[5rem] pb-[25rem] md:py-24 px-4 relative z-10">

                {/* text content */}
                <div className="text-white">
                    <p className="font-semibold text-[#0EA5E9] text-xl mb-10">CALL TO ACTION</p>

                    <p className="text-xl md:w-2/3 mb-4">More Specialists, Strong Partnerships, And The Power To Care You The Best!</p>

                    <p className="text-lg md:w-3/4 mb-10">Bridging Healthcare Gaps: Expert Medical Tourism from Africa to India for World-Class Treatment!</p>

                    <Link href='' className="btn border-none bg-green-600 text-white hover:bg-green-700 rounded-xl shadow-none">
                        book Appointment
                    </Link>

                    <p className="mt-4">OR CALL: +880 1700000000</p>
                </div>

                {/* image content */}
                <div>
                    <img src="assets/dcotor.png" alt="doctor" className="w-[30rem] absolute right-[1rem] bottom-0"/>
                </div>

            </div>

        </div>
    );
}
