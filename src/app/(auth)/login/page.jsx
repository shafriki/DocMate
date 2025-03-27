"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (result?.ok) {
      router.push("/");
    } else {
      alert("Login failed");
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left column (form) */}
      <div className="flex-1 flex items-center justify-center px-4 py-8 text-white">
        <div className="max-w-md w-full">
          <h1 className="text-3xl font-bold mb-2">Sign In</h1>
          <p className="text-gray-600 mb-6">Welcome back! Please sign in.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
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
              <label className="block mb-1 font-medium">Enter your password</label>
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
              Sign In
            </button>
          </form>

          <div className="mt-4 text-sm">
            Don’t have an account?{" "}
            <a href="/register" className="text-blue-600 hover:underline">
              Sign up
            </a>
          </div>
        </div>
      </div>

      {/* Right column (image) */}
      <div className="hidden md:block md:flex-1">
        <Image
          src="/login.png"
          alt="Login Hero"
          layout="responsive"
          width={626}
          height={626}
        />
      </div>
    </div>
  );
}
