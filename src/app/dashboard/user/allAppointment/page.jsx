"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

const AllAppointmentsPage = () => {
  const { data: session } = useSession(); // Get the current user session
  const [appointments, setAppointments] = useState([]);
  
  // Fetch appointments of the user
  const fetchAppointments = async () => {
    try {
      const res = await fetch(`/api/appointments/user/${session?.user?.id}`);
      const data = await res.json();
      if (res.ok) {
        setAppointments(data);
      } else {
        alert(data.message || "Failed to load appointments");
      }
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  // Cancel an appointment
  const handleCancelAppointment = async (appointmentId) => {
    const confirmCancel = window.confirm("Are you sure you want to cancel this appointment?");
    if (!confirmCancel) return;
  
    try {
      // First, send the DELETE request to cancel the appointment
      const res = await fetch(`/api/appointments/cancel`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ appointmentId }),
      });
  
      const data = await res.json();
      if (res.ok) {
        alert("Appointment cancelled successfully!");
  
        // After successfully canceling the appointment, update the user's isPatient field
        const userRes = await fetch(`/api/users/${session?.user?.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ isPatient: false }),
        });
  
        const userData = await userRes.json();
        if (userRes.ok) {
          alert("User status updated to 'not a patient'.");
        } else {
          alert(userData.error || "Failed to update user status.");
        }
  
        // Refresh the appointment list
        fetchAppointments();
      } else {
        alert(data.message || "Failed to cancel appointment");
      }
    } catch (error) {
      console.error("Error cancelling appointment:", error);
    }
  };
  

  useEffect(() => {
    if (session?.user?.id) {
      fetchAppointments();
    }
  }, [session]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl md:text-3xl font-bold text-center mb-4">Your Appointments</h2>
      {appointments.length === 0 ? (
        <p className="text-center text-gray-500">No appointments found.</p>
      ) : (
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border">Doctor Name</th>
              <th className="px-4 py-2 border">Date</th>
              <th className="px-4 py-2 border">Time</th>
              <th className="px-4 py-2 border">Reason</th>
              <th className="px-4 py-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment._id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border">{appointment.doctorName}</td>
                <td className="px-4 py-2 border">{appointment.date}</td>
                <td className="px-4 py-2 border">{appointment.time}</td>
                <td className="px-4 py-2 border">{appointment.reason}</td>
                <td className="px-4 py-2 border">
                  {!appointment.isAppointed ? (
                    <span className="text-gray-500">Pending</span>
                  ) : (
                    <button
                      className="btn btn-danger"
                      onClick={() => handleCancelAppointment(appointment._id)}
                    >
                      Cancel
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AllAppointmentsPage;
