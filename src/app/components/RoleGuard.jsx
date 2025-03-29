"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RoleGuard({ allowedRoles, children }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;
    // If no session or the user's role is not allowed, sign out and redirect
    if (!session || !allowedRoles.includes(session.user.role)) {
      signOut({ callbackUrl: "/login" });
    }
  }, [session, status, allowedRoles]);

  if (status === "loading") return <p>Loading...</p>;
  // Render nothing if the user's role is not allowed (since they are being signed out)
  if (!session || !allowedRoles.includes(session.user.role)) return null;

  return children;
}
