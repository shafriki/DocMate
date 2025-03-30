"use client";
import React, { useState, useEffect, Fragment } from "react";
import { useSession } from "next-auth/react";
import { Parallax } from "react-parallax";
import { Dialog, Transition } from "@headlessui/react";

const ProfilePage = () => {
  const { data: session } = useSession();
  const [user, setUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updatedName, setUpdatedName] = useState("");
  const [updatedImage, setUpdatedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (session?.user) {
      setUser(session.user);
      setUpdatedName(session.user.name);
    }
  }, [session]);

  const handleUpdateProfile = async () => {
    setLoading(true);
    // Handle profile update logic here (API call)
    setTimeout(() => {
      setLoading(false);
      setIsModalOpen(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen">
      {/* Banner */}
      <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage="https://i.ibb.co.com/qYkBsgdW/three.jpg"
        bgImageAlt="background image"
        strength={-200}
      >
        <div className="hero-overlay h-[190px] md:h-[300px] bg-opacity-60 bg-cover bg-center bg-no-repeat text-[#02faee]">
          <div className="relative max-w-7xl mx-auto py-8 px-3 md:py-16 md:px-6 text-left"></div>
        </div>
      </Parallax>

      {/* Profile Card */}
      <div className="absolute top-[8rem] md:top-[18rem] left-[50%] md:left-[55rem] transform -translate-x-1/2 p-8 rounded-lg shadow-xl w-[90%] sm:w-[60%] md:w-[40%] text-center backdrop-blur-xl">
        <div className="relative w-24 h-24 mx-auto mb-4">
        <img
            alt={user?.name || "User"}
            src={user?.image || "https://i.ibb.co/33gs5fP/user.png"}
            className="w-full h-full rounded-full border-4 border-teal-500 object-cover"
            />

          <div className="absolute bottom-0 right-0 bg-green-500 rounded-full w-6 h-6 border-2 border-white"></div>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
          {user?.name}
        </h1>
        <p className="text-gray-500 text-sm sm:text-base mb-4">
          {user?.email}
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <button
            className="btn border-none bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition duration-200"
            onClick={() => setIsModalOpen(true)}
          >
            Update Profile
          </button>
          <a
            href="/"
            className="btn px-4 py-2 bg-green-500 hover:bg-green-600 border-none text-white rounded-lg"
          >
            Back To Home
          </a>
        </div>
      </div>

      {/* Modal for updating profile */}
      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setIsModalOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl backdrop-blur-2xl  p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-white">
                    Update Profile
                  </Dialog.Title>

                  <div className="mt-2">
                    <div className="mb-4">
                      <label className="block mb-2 text-white">Name</label>
                      <input
                        type="text"
                        placeholder="Enter new name"
                        value={updatedName}
                        onChange={(e) => setUpdatedName(e.target.value)}
                        className="w-full p-2 border text-white border-[#FF6F61] bg-[#02332f] opacity-60 rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block mb-2 text-white">Image</label>
                      <input
                        type="file"
                        name="image"
                        className="w-full border border-gray-300 p-2 rounded"
                        onChange={(e) => setUpdatedImage(e.target.files[0])}
                      />
                    </div>
                  </div>

                  <div className="mt-4 flex justify-end gap-4">
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="bg-[#FF6F61] border-none md:px-8 text-white px-4 py-2 rounded"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleUpdateProfile}
                      className="bg-[#1e9004] hover:bg-[#177003] border-none md:px-8 text-white px-4 py-2 rounded"
                    >
                      {loading ? "Saving..." : "Save"}
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default ProfilePage;
