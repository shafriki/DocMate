"use client";
import Image from "next/image";
import { Parallax } from "react-parallax";

const SeeAll = () => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage="https://i.ibb.co/qYkBsgdW/three.jpg"
      bgImageAlt="background image"
      strength={-200}
    >
      <div className="hero-overlay h-[250px] md:h-[300px] bg-opacity-70 bg-cover bg-center bg-no-repeat backdrop-blur-xs text-white flex flex-col items-center justify-center">
        {/* Text Content */}
        <div className="relative max-w-7xl mx-auto py-8 px-3 md:py-16 md:px-6 text-center">
          {/* Using Next.js Image Optimization */}
          <Image src="/assets/docmate.png" alt="logo" width={56} height={56} className="mx-auto" />

          <h1 className="font-bold text-lg text-teal-500 md:text-4xl mt-2 md:mt-2">DocMate</h1>

          <p className="my-1 text-xs md:text-base md:text-center max-w-3xl mx-auto text-center">
          Your trusted consultancy for expert medical advice and healthcare solutions.
          </p>

          <div className="join mt-4">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered join-item"
            />
            <button className="btn bg-teal-500 border-none hover:bg-teal-700 join-item">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default SeeAll;
