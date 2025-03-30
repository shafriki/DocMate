"use client";

import RoleGuard from "../../../components/RoleGuard";
import { useSession } from "next-auth/react";

export default function UserHome() {
  const { data: session } = useSession();
  const { name } = session?.user || {}; // Extract user's name from session

  return (
    <RoleGuard allowedRoles={["user"]}>
      <div>
        <p className="text-4xl mb-5 text-center font-semibold">Welcome {name ? name : "User"}!</p>
        <p className="text-center text-lg text-gray-600">View your profile and appointments using the sidebar menu.</p>
      </div>
    </RoleGuard>
  );
}
