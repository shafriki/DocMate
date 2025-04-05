"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { Parallax } from "react-parallax";
import RoleGuard from "@/app/components/RoleGuard";

const ProfilePage = () => {
  const { data: session } = useSession();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (session?.user) {
      setUser(session.user);
    }
  }, [session]);

  return (
    <RoleGuard allowedRoles={["user"]}>
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-cyan-100">
      {/* Banner */}
      <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage="https://i.ibb.co.com/qYkBsgdW/three.jpg"
        strength={-200}
      >
        <div className="h-[190px] md:h-[300px] bg-opacity-60 bg-cover bg-center bg-no-repeat">
          <div className="relative max-w-7xl mx-auto py-8 px-3 md:py-16 md:px-6"></div>
        </div>
      </Parallax>

      {/* Profile Card */}
      <div className="relative -mt-24 md:-mt-32 max-w-2xl mx-auto px-4">
        <div className="bg-white/90 backdrop-blur-lg rounded-xl shadow-2xl p-8 md:p-12 transform transition-all hover:shadow-3xl">
          <div className="flex flex-col items-center">
            <div className="relative mb-6 group">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <img
                alt={user?.name || "User"}
                src={user?.image || "https://i.ibb.co/33gs5fP/user.png"}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-xl relative transform hover:scale-105 transition duration-300"
              />
            </div>

            <div className="text-center space-y-2">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-1">
                {user?.name}
              </h1>
              <p className="text-lg text-teal-600 font-medium">{user?.email}</p>
              {/* <div className="pt-4">
                <span className="inline-block bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-semibold">
                  Premium Member
                </span>
              </div> */}
            </div>

            {/* <div className="mt-8 w-full border-t border-gray-200/80"></div> */}

            {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8 w-full">
              <div className="text-center p-4 bg-teal-50 rounded-xl">
                <p className="text-2xl font-bold text-cyan-700">12</p>
                <p className="text-sm text-gray-600">Courses Taken</p>
              </div>
              <div className="text-center p-4 bg-teal-50 rounded-xl">
                <p className="text-2xl font-bold text-cyan-700">4.9</p>
                <p className="text-sm text-gray-600">Avg Rating</p>
              </div>
              <div className="text-center p-4 bg-teal-50 rounded-xl">
                <p className="text-2xl font-bold text-cyan-700">358</p>
                <p className="text-sm text-gray-600">XP Points</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
    </RoleGuard>
  );
};

export default ProfilePage;