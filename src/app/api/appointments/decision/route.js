import { NextResponse } from "next/server";
import dbConnect from "../../../../../lib/mongodb";
import Appointment from "../../../../../models/Appointment";
import User from "../../../../../models/User";

export async function PUT(req) {
  await dbConnect();

  try {
    const { appointmentId, approved } = await req.json();

    if (!appointmentId || typeof approved !== "boolean") {
      return NextResponse.json(
        { message: "Appointment ID and approved flag are required." },
        { status: 400 }
      );
    }

    if (approved) {
      // If approved, update the appointment to set isAppointed to true.
      const updatedAppointment = await Appointment.findByIdAndUpdate(
        appointmentId,
        { isAppointed: true },
        { new: true }
      );

      if (!updatedAppointment) {
        return NextResponse.json(
          { message: "Appointment not found." },
          { status: 404 }
        );
      }

      return NextResponse.json(
        { message: "Appointment approved successfully.", appointment: updatedAppointment },
        { status: 200 }
      );
    } else {
      // If rejected, first update the patient's record to set isPatient to false,
      // then delete the appointment record from the database.
      const appointment = await Appointment.findById(appointmentId);

      if (!appointment) {
        return NextResponse.json(
          { message: "Appointment not found." },
          { status: 404 }
        );
      }

      const updatedUser = await User.findByIdAndUpdate(
        appointment.userId,
        { isPatient: false },
        { new: true }
      );

      await Appointment.findByIdAndDelete(appointmentId);

      return NextResponse.json(
        { message: "Appointment rejected and cleared successfully.", user: updatedUser },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error("Error processing appointment decision:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
