"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    if (res.ok) {
      router.push("/login");
    } else {
      alert("Registration failed");
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left column (form) */}
      <div className="flex-1 flex items-center justify-center px-4 py-8 text-white">
        <div className="max-w-md w-full">
          <h1 className="text-3xl font-bold mb-2">Create Account</h1>
          <p className="text-gray-600 mb-6">Join our community today</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Enter your name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Enter your email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Create a password</label>
              <input
                type="password"
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
            >
              Create Account
            </button>
          </form>

          <div className="mt-4 text-sm">
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 hover:underline">
              Sign in
            </a>
          </div>
        </div>
      </div>

      {/* Right column (image) */}
      <div className="hidden md:block md:flex-1">
        <Image
          src="/register.png"
          alt="Signup Hero"
          layout="responsive"
          width={626} 
          height={626}
        />

      </div>
    </div>
  );
}
