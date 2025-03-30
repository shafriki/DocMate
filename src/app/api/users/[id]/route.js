import dbConnect from "../../../../../lib/mongodb";
import User from "../../../../../models/User";
import { NextResponse } from "next/server";

// Fetch user by ID (GET request)
export async function GET(req, { params }) {
  await dbConnect();
  try {
    const user = await User.findById(params.id);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch user" }, { status: 500 });
  }
}

// Update user by ID (PUT request)
export async function PUT(req, { params }) {
    await dbConnect();
    try {
      const { name, email, role, isPatient } = await req.json();
  
      if (!params || !params.id) {
        return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
      }
  
      const updatedUser = await User.findByIdAndUpdate(
        params.id,  // Ensure params.id is correctly accessed
        { name, email, role, isPatient },
        { new: true, runValidators: true }
      );
  
      if (!updatedUser) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
      }
  
      return NextResponse.json(updatedUser, { status: 200 });
    } catch (error) {
      console.error("Error updating user:", error);
      return NextResponse.json({ error: "Failed to update user" }, { status: 500 });
    }
  }
  

// Delete user by ID (DELETE request)
export async function DELETE(req, { params }) {
  await dbConnect();
  try {
    const deletedUser = await User.findByIdAndDelete(params.id);
    if (!deletedUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "User deleted successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete user" }, { status: 500 });
  }
}

