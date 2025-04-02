import dbConnect from "../../../../lib/mongodb";
import User from "../../../../models/User";
import { NextResponse } from "next/server";

// Fetch all users (GET request)
export async function GET() {
  await dbConnect();
  try {
    const users = await User.find({}, "name email role isPatient");
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}