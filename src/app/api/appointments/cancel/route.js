import { NextResponse } from "next/server";
import dbConnect from "../../../../../lib/mongodb";
import Appointment from "../../../../../models/Appointment";
import User from "../../../../../models/User"; // Import User model

export async function DELETE(req) {
  await dbConnect();

  try {
    const { appointmentId } = await req.json();

    if (!appointmentId) {
      return NextResponse.json({ message: "Appointment ID is required" }, { status: 400 });
    }

    // Find and delete the appointment
    const appointment = await Appointment.findByIdAndDelete(appointmentId);

    if (!appointment) {
      return NextResponse.json({ message: "Appointment not found" }, { status: 404 });
    }

    // Find the user associated with the appointment
    const user = await User.findById(appointment.userId);

    if (user) {
      // Set isPatient to false
      user.isPatient = false;
      await user.save();
    }

    return NextResponse.json({ message: "Appointment cancelled and user status updated" }, { status: 200 });
  } catch (error) {
    console.error("Error cancelling appointment:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
