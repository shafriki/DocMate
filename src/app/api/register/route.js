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
        { status: 409 } // More appropriate status code for conflict
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await User.create({ 
      name, 
      email, 
      password: hashedPassword 
    });

    return NextResponse.json(
      { 
        message: "User registered successfully", 
        email: user.email // Return email for potential client-side use
      }, 
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
