import dbConnect from "../../../../lib/mongodb";
import User from "../../../../models/User";  // Assuming your User model is set up in this path
import Appointment from "../../../../models/Appointment";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    // Connect to MongoDB
    await dbConnect();

    // Fetch users (only normal users, excluding doctors and admins)
    const users = await User.find({ role: "user", isPatient: true, isAppointed: false});

    // Fetch appointments
    const appointments = await Appointment.find();

    // Map through users and add their appointments
    const usersWithAppointments = users.map(user => {
      // Filter appointments for each user
      const userAppointments = appointments.filter(appointment => appointment.userId.toString() === user._id.toString());
      
      return {
        ...user._doc,  // Spread user data
        appointments: userAppointments, // Add appointments to user data
      };
    });

    return new NextResponse(JSON.stringify(usersWithAppointments), { status: 200 });
  } catch (error) {
    console.error("Error fetching users and appointments:", error);
    return new NextResponse(JSON.stringify({ message: "Internal Server Error" }), { status: 500 });
  }
}
