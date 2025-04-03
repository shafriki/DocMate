// src/app/api/doctor-applications/route.js

import dbConnect from "../../../../lib/mongodb";
import User from "../../../../models/User";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();
  try {
    // Find users who are still regular users but have applied to be doctors
    const applications = await User.find({ role: "user", appliedDoctor: true });
    return NextResponse.json({ applications });
  } catch (error) {
    return NextResponse.json({ message: "Failed to fetch applications" }, { status: 500 });
  }
}
