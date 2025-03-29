"use client";

import RoleGuard from "../../../components/RoleGuard";

export default function UserHome() {
  return (
    <RoleGuard allowedRoles={["user"]}>
      <div>
        <h1 className="text-3xl font-bold mb-4">User Dashboard Home</h1>
        <p>Welcome to your dashboard. View your profile and appointments using the sidebar menu.</p>
      </div>
    </RoleGuard>
  );
}
