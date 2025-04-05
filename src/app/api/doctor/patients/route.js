import { NextResponse } from "next/server";
import dbConnect from "../../../../../lib/mongodb";
import Appointment from "../../../../../models/Appointment";
import User from "../../../../../models/User";

export async function GET(req) {
  await dbConnect();

  try {
    const doctorId = req.nextUrl.searchParams.get("doctorId");

    if (!doctorId) {
      return NextResponse.json({ message: "Doctor ID is required." }, { status: 400 });
    }

    // Step 1: Find all approved appointments for this doctor
    const appointments = await Appointment.find({
      doctorId,
      isAppointed: true,
    });

    // Step 2: Extract unique userIds
    const userIds = [...new Set(appointments.map((app) => app.userId.toString()))];

    // Step 3: Fetch patient data
    const users = await User.find({
      _id: { $in: userIds },
      role: "user",
    }).lean();

    // Step 4: Attach appointment info to each user
    const enrichedPatients = users.map((user) => {
      const patientAppointments = appointments.filter(
        (app) => app.userId.toString() === user._id.toString()
      );

      const { phone, patientName, reason } = patientAppointments[0] || {}; // Get info from first appointment

      return {
        ...user,
        phone,
        patientName,
        reason,
      };
    });

    return NextResponse.json(enrichedPatients);
  } catch (error) {
    console.error("Error fetching doctor patients:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
