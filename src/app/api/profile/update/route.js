// /app/api/profile/update/route.js

import { NextResponse } from "next/server";
import dbConnect from "../../../../../lib/mongodb";
import User from "../../../../../models/User";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function PUT(req) {
    await dbConnect();
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id;
  
    if (!userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
  
    try {
      const { name, image } = await req.json();
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { name, image },
        { new: true }
      );
  
      return NextResponse.json({ user: updatedUser }, { status: 200 });
    } catch (error) {
      console.error("Profile update error:", error);
      return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
  }