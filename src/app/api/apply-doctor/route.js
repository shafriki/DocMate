// src/app/api/apply-doctor/route.js

import dbConnect from "../../../../lib/mongodb";
import User from "../../../../models/User";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(req) {
  await dbConnect();

  // Retrieve the session from the server
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { cvUrl, imageUrl, category } = await req.json();

  if (!cvUrl || !imageUrl || !category) {
    return NextResponse.json(
      { message: "Missing required fields" },
      { status: 400 }
    );
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      session.user.id,
      {
        doctorCvUrl: cvUrl,
        doctorImageUrl: imageUrl,
        doctorCategory: category,
        appliedDoctor: true,
      },
      { new: true }
    );

    if (!updatedUser) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Application submitted", user: updatedUser },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error applying to be a doctor:", error);
    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}
