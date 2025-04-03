import dbConnect from "../../../../../lib/mongodb";
import User from "../../../../../models/User";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  await dbConnect();
  const { userId } = params;
  const { action } = await req.json();

  if (!action || !["approve", "reject"].includes(action)) {
    return NextResponse.json({ message: "Invalid action" }, { status: 400 });
  }

  try {
    let updateData;
    let shouldLogout = false;

    if (action === "approve") {
      updateData = { appliedDoctor: false, role: "doctor" };
      shouldLogout = true; // Mark for logout after approval
    } else {
      updateData = { appliedDoctor: false };
    }

    const updatedUser = await User.findByIdAndUpdate(userId, updateData, { new: true });
    if (!updatedUser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ 
      message: `Application ${action}d`, 
      user: updatedUser,
      shouldLogout 
    });
  } catch (error) {
    console.error("Error updating doctor application:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
