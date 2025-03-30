import React from "react";
import { FaMedal, FaHospital, FaUsers, FaUserMd } from "react-icons/fa";

const Service = () => {
    return (
        <section className="max-w-screen-xl mx-5 md:mx-auto  my-20 bg-gray-100 py-12">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-center items-center text-center space-y-8 md:space-y-0 md:space-x-12">
              {/* Card 1 */}
              <div className="flex-1">
                <FaMedal className="text-5xl text-teal-500 mx-auto mb-2" />
                <h3 className="text-3xl font-bold text-gray-800">15+</h3>
                <p className="text-gray-600">PARTNER HOSPITALS</p>
              </div>
    
              {/* Divider */}
              <div className="hidden md:block w-px h-24 bg-gray-300"></div>
    
              {/* Card 2 */}
              <div className="flex-1">
                <FaHospital className="text-5xl text-teal-500 mx-auto mb-2" />
                <h3 className="text-3xl font-bold text-gray-800">500+</h3>
                <p className="text-gray-600">SATISFIED PATIENTS</p>
              </div>
    
              {/* Divider */}
              <div className="hidden md:block w-px h-24 bg-gray-300"></div>
    
              {/* Card 3 */}
              <div className="flex-1">
                <FaUsers className="text-5xl text-teal-500 mx-auto mb-2" />
                <h3 className="text-3xl font-bold text-gray-800">750+</h3>
                <p className="text-gray-600">HOSPITAL ROOMS</p>
              </div>
    
              {/* Divider */}
              <div className="hidden md:block w-px h-24 bg-gray-300"></div>
    
              {/* Card 4 */}
              <div className="flex-1">
                <FaUserMd className="text-5xl text-teal-500 mx-auto mb-2" />
                <h3 className="text-3xl font-bold text-gray-800">450+</h3>
                <p className="text-gray-600">QUALIFIED DOCTORS & STAFF</p>
              </div>
            </div>
          </div>
        </section>
      );
};

export default Service;
