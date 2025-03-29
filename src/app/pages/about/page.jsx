
import Image from "next/image";

export default function About() {
  return (

    <div>
      {/* About Us Section with Background Image */}
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

        {/* About Us Heading */}
        <div className="relative z-10">
          <h2 className="text-5xl font-bold text-white drop-shadow-lg">About Us</h2>
        </div>
      </div>

      {/* Regarding Us Section */}
      <div className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        {/* Left Text Section */}
        <div className="text-gray-800">
          <h3 className="text-blue-600 uppercase text-sm font-semibold">Regarding Us</h3>
          <h2 className="text-3xl font-bold my-3 text-gray-900">
            DocMate Expert – Your Trusted Partner in Medical Tourism!
          </h2>
          <p className="text-gray-600 leading-relaxed">
            At DocMate Expert, we understand that health knows no borders, and access to world-class
            medical care is a universal right. Our team is dedicated to providing seamless coordination
            for your medical journey.
          </p>
        </div>
        <div>
          <p className="text-gray-700">
            Embark on a journey towards better health with confidence. We combine expertise & personalized care.
          </p><br />
          {/* Right Features Section */}
          <div className="flex flex-col md:flex-row items-start justify-between gap-6">

            {/* Left - List */}
            <div className="md:w-2/3 space-y-4">


              <ul className="space-y-3">
                {["Expert Guidance", "Extensive Network", "Seamless Coordination", "Quality Assurance"].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3 text-gray-800 font-semibold">
                    <span className="text-blue-600">✅</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right - Experience Box */}
            <div className="md:w-1/3 flex justify-center">
              <div className="p-6 border border-gray-300 rounded-lg text-center shadow-lg w-48">
                <h2 className="text-5xl font-bold text-indigo-600">12</h2>
                <p className="text-gray-800 font-bold mt-2">YEARS</p>
                <p className="text-gray-500 uppercase text-sm">OF EXPERIENCE</p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>


  );
}

