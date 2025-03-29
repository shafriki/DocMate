"use client";

import RoleGuard from "../../../components/RoleGuard";

export default function AdminHome() {
  return (
    <RoleGuard allowedRoles={["admin"]}>
      <div>
        <h1 className="text-3xl font-bold mb-4">Admin Dashboard Home</h1>
        <p>Welcome to your admin dashboard. Use the sidebar to manage doctors, patients, and more.</p>
      </div>
    </RoleGuard>
  );
}
