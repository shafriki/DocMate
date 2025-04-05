"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import RoleGuard from "@/app/components/RoleGuard";

const DoctorAppointmentsPage = () => {
  const { data: session } = useSession();
  const [patientData, setPatientData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch patients with their appointments
  const fetchPatientsWithAppointments = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/users-and-appointments");
      const data = await res.json();
      setPatientData(data);
    } catch (error) {
      console.error("Error fetching patient appointments:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (session?.user?.id) {
      fetchPatientsWithAppointments();
    }
  }, [session]);

  // Extract appointments for which the logged-in doctor is assigned
  const doctorAppointments = patientData.flatMap((user) =>
    (user.appointments || [])
      .filter((app) => app.doctorId === session?.user?.id)
      .map((app) => ({
        ...app,
        patientName: user.name,
        patientEmail: user.email,
      }))
  );

  // Handle appointment decision: Approve or Reject
  const handleDecision = async (appointmentId, approved) => {
    try {
      const res = await fetch("/api/appointments/decision", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ appointmentId, approved }),
      });
      const result = await res.json();
      if (res.ok) {
        alert("Appointment updated successfully.");
        fetchPatientsWithAppointments();
      } else {
        alert(result.message || "Failed to update appointment.");
      }
    } catch (error) {
      console.error("Error updating appointment:", error);
    }
  };

  if (loading) return <div>Loading appointments...</div>;

  return (
    <RoleGuard allowedRoles={["doctor"]}>
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">My Appointments</h2>
      {doctorAppointments.length === 0 ? (
        <p>No appointment requests found.</p>
      ) : (
        <table className="table w-full border">
          <thead className="bg-gray-200">
            <tr>
              <th>Patient Name</th>
              <th>Patient Email</th>
              <th>Phone</th>
              <th>Reason</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {doctorAppointments.map((appointment) => (
              <tr key={appointment._id}>
                <td>{appointment.patientName}</td>
                <td>{appointment.patientEmail}</td>
                <td>{appointment.phone}</td>
                <td>{appointment.reason}</td>
                <td>{appointment.date}</td>
                <td>{appointment.time}</td>
                <td>{appointment.isAppointed ? "Approved" : "Pending"}</td>
                <td>
                  <button
                    className="btn btn-success mr-2"
                    onClick={() => handleDecision(appointment._id, true)}
                  >
                    Approve
                  </button>
                  <button
                    className="btn btn-error"
                    onClick={() => handleDecision(appointment._id, false)}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
    </RoleGuard>
  );
};

export default DoctorAppointmentsPage;
