"use client";

import RoleGuard from "../../../components/RoleGuard";

export default function UserHome() {

  return (
    <RoleGuard allowedRoles={["admin"]}>
          <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage users, update roles, and delete accounts.</p>
    </RoleGuard>
  );
}
