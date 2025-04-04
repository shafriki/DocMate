"use client";

import { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardSidebar() {
  const { data: session, update } = useSession();
  const pathname = usePathname();
  const { role, appliedDoctor } = session?.user || {};

  // Auto-logout when doctor approval happens
  useEffect(() => {
    if (role === "doctor" && appliedDoctor) {
      alert("Your application has been approved. Logging out...");

      fetch("/api/logout", { method: "POST" })
        .then(() => {
          signOut({ callbackUrl: "/" }); // Ensure client session clears
        })
        .finally(() => {
          update(); // Refresh session state after logging out
        });
    }
  }, [role, appliedDoctor, update]);
  

  // Modal and form states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    cvUrl: "",
    imageUrl: "",
    category: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const menuLinks = {
    admin: [
      { name: "Dashboard Home", href: "/dashboard/admin/home" },
      { name: "All Doctors", href: "/dashboard/admin/doctors" },
      { name: "All Patients", href: "/dashboard/admin/patients" },
      { name: "Pending Doctor", href: "/dashboard/admin/pendingDoctor" },
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
      { name: "All Doctors", href: "/dashboard/user/doctors" },
      { name: "My Appointments", href: "/dashboard/user/allAppointment" },
    ],
  };

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormData({ cvUrl: "", imageUrl: "", category: "" });
    setError(null);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleApply = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/apply-doctor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, appliedDoctor: true }),
      });
      if (!res.ok) {
        throw new Error("Application failed. Please try again.");
      }
      handleCloseModal();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
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
        {/* Show "Be a Doctor" button for normal users */}
        {role === "user" && (
          <button
            onClick={handleOpenModal}
            className="w-full text-left px-6 py-4 transition-colors cursor-pointer bg-green-600 hover:bg-green-700"
          >
            Be a Doctor
          </button>
        )}
      </nav>
      <div className="p-6 border-t border-gray-700">
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="w-full bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      {/* Modal for applying as a doctor */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white text-black p-6 rounded shadow-md w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Apply to be a Doctor</h2>
            <form onSubmit={handleApply} className="space-y-4">
              <div>
                <label htmlFor="cvUrl" className="block mb-1">
                  CV URL
                </label>
                <input
                  type="url"
                  id="cvUrl"
                  name="cvUrl"
                  value={formData.cvUrl}
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                  required
                />
              </div>
              <div>
                <label htmlFor="imageUrl" className="block mb-1">
                  Image URL
                </label>
                <input
                  type="url"
                  id="imageUrl"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                  required
                />
              </div>
              <div>
                <label htmlFor="category" className="block mb-1">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                  required
                >
                  <option value="">Select a category</option>
                  <option value="general">General Practitioner</option>
                  <option value="cardiology">Cardiology</option>
                  <option value="dermatology">Dermatology</option>
                  <option value="neurology">Neurology</option>
                  <option value="pediatrics">Pediatrics</option>
                </select>
              </div>
              {error && <p className="text-red-500">{error}</p>}
              <div className="flex justify-end space-x-2">
                <button type="button" onClick={handleCloseModal} className="px-4 py-2 bg-gray-300 rounded">
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded" disabled={loading}>
                  {loading ? "Applying..." : "Apply"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </aside>
  );
}
