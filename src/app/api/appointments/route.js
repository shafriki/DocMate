import { NextResponse } from "next/server";
import dbConnect from "../../../../lib/mongodb";
import Appointment from "../../../../models/Appointment";

export async function POST(req) {
  await dbConnect();

  try {
    const {
      doctorId,
      doctorName,
      doctorEmail,
      userId,
      userName,
      userEmail,
      patientName,
      phone,
      reason,
      date,
      time,
    } = await req.json();

    // Validate that all fields are provided
    if (
      !doctorId ||
      !doctorName ||
      !doctorEmail ||
      !userId ||
      !userName ||
      !userEmail ||
      !patientName ||
      !phone ||
      !reason ||
      !date ||
      !time
    ) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    // Check if there's already an appointment for the same doctor, user, date, and time.
    const existingAppointment = await Appointment.findOne({
      doctorId,
      userId,
      date,
      time,
    });

    if (existingAppointment) {
      return NextResponse.json(
        { message: "You have already applied for an appointment with this doctor at the specified date and time." },
        { status: 409 }
      );
    }

    const newAppointment = new Appointment({
      doctorId,
      doctorName,
      doctorEmail,
      userId,
      userName,
      userEmail,
      patientName,
      phone,
      reason,
      date,
      time,
      isAppointed: false,
    });

    // Log the data that is about to be saved
    console.log("Appointment data to be saved:", newAppointment);

    await newAppointment.save();

    return NextResponse.json(
      { message: "Appointment created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Appointment creation error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
export async function PUT(req) {
  await dbConnect();

  try {
    const { appointmentId, updates } = await req.json();

    if (!appointmentId || !updates || typeof updates !== "object") {
      return NextResponse.json(
        { message: "Appointment ID and updates are required." },
        { status: 400 }
      );
    }

    const updatedAppointment = await Appointment.findByIdAndUpdate(
      appointmentId,
      { $set: updates },
      { new: true } // Return the updated document
    );

    if (!updatedAppointment) {
      return NextResponse.json(
        { message: "Appointment not found." },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Appointment updated successfully.",
      appointment: updatedAppointment,
    });
  } catch (error) {
    console.error("Appointment update error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
