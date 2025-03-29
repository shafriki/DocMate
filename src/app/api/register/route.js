import { NextResponse } from "next/server";
import dbConnect from "../../../../lib/mongodb";
import User from "../../../../models/User";
import bcrypt from "bcryptjs";

export async function POST(request) {
  try {
    const { name, email, password } = await request.json();
    
    await dbConnect();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    // Always assign "user" as the default role
    const user = await User.create({ 
      name, 
      email, 
      password: hashedPassword,
      role: "user",
    });

    return NextResponse.json(
      { message: "User registered successfully", email: user.email },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
