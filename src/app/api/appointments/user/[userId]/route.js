import { NextResponse } from "next/server";
import dbConnect from "../../../../../../lib/mongodb";
import Appointment from "../../../../../../models/Appointment";

export async function GET(req, { params }) {
  await dbConnect();

  try {
    // Await params before destructuring userId
    const { userId } = await params;

    // Fetch all appointments for the user
    const appointments = await Appointment.find({ userId }).sort({ createdAt: -1 });

    if (appointments.length === 0) {
      return NextResponse.json({ message: "No appointments found" }, { status: 404 });
    }

    return NextResponse.json(appointments, { status: 200 });
  } catch (error) {
    console.error("Error fetching appointments:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
