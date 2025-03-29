"use client";

import RoleGuard from "../../../components/RoleGuard";

export default function DoctorHome() {
  return (
    <RoleGuard allowedRoles={["doctor"]}>
      <div>
        <h1 className="text-3xl font-bold mb-4">Doctor Dashboard Home</h1>
        <p>Welcome, doctor. Check your appointments and patient list from the sidebar.</p>
      </div>
    </RoleGuard>
  );
}
