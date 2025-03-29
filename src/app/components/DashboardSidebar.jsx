"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardSidebar() {
  const { data: session } = useSession();
  const pathname = usePathname();

  const { role } = session?.user || {};

  const menuLinks = {
    admin: [
      { name: "Dashboard Home", href: "/dashboard/admin/home" },
      { name: "All Doctors", href: "/dashboard/admin/doctors" },
      { name: "All Patients", href: "/dashboard/admin/patients" },
      { name: "Add Doctor", href: "/dashboard/admin/add-doctor" },
    ],
    doctor: [
      { name: "Dashboard Home", href: "/dashboard/doctor/home" },
      { name: "My Appointments", href: "/dashboard/doctor/appointments" },
      { name: "Patient List", href: "/dashboard/doctor/patients" },
      { name: "Profile", href: "/dashboard/doctor/profile" },
    ],
    user: [
      { name: "Dashboard Home", href: "/dashboard/user/home" },
      { name: "My Profile", href: "/dashboard/user/profile" },
      { name: "My Appointments", href: "/dashboard/user/appointments" },
    ],
  };

  return (
    <aside className="w-64 bg-gradient-to-r from-[#042020] to-[#1e4046] text-white flex flex-col">
      <div className="p-6 text-xl font-bold border-b border-gray-700">
        {role ? `${role.charAt(0).toUpperCase() + role.slice(1)} Dashboard` : "Dashboard"}
      </div>
      <nav className="flex-1">
        {menuLinks[role]?.map((link) => (
          <Link key={link.href} href={link.href}>
            <div
              className={`px-6 py-4 transition-colors cursor-pointer ${
                pathname === link.href ? "bg-[#0EA5E9]" : "hover:bg-gray-700"
              }`}
            >
              {link.name}
            </div>
          </Link>
        ))}
      </nav>
      <div className="p-6 border-t border-gray-700">
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="w-full bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
    </aside>
  );
}
