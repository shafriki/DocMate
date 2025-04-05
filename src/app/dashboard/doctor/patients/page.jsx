"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import RoleGuard from "@/app/components/RoleGuard";

const DoctorPatientsPage = () => {
  const { data: session } = useSession();
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (session?.user?.id) {
      fetchDoctorPatients();
    }
  }, [session]);

  const fetchDoctorPatients = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/doctor/patients?doctorId=${session?.user?.id}`);
      const data = await res.json();
      console.log(data);
      setPatients(data); // ✅ use directly
    } catch (error) {
      console.error("Error fetching patients:", error);
    } finally {
      setLoading(false);
    }
  };
  

  if (loading) return <div>Loading patients...</div>;

  return (
    <RoleGuard allowedRoles={["doctor"]}>
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">My Patients</h2>
      {patients.length === 0 ? (
        <p>No patients found.</p>
      ) : (
        <table className="table w-full border">
          <thead className="bg-gray-200">
            <tr>
              <th>#</th>
              <th>Patient Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Disease details</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient, index) => (
              <tr key={patient._id}>
                <td>{index + 1}</td>
                <td>{patient.patientName}</td>
                <td>{patient.email}</td>
                <td>{patient.phone || "N/A"}</td>
                <td>{patient.reason || "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
    </RoleGuard>
  );
};

export default DoctorPatientsPage;
