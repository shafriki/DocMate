"use client";
import { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  HomeIcon,
  UserGroupIcon,
  CalendarIcon,
  UserIcon,
  DocumentTextIcon,
  HeartIcon,
  BriefcaseIcon,
  ArrowLeftOnRectangleIcon,
  XMarkIcon,
  CheckIcon
} from "@heroicons/react/24/outline";

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
      { name: "Dashboard", href: "/dashboard/admin/home", icon: HomeIcon },
      { name: "Profile", href: "/dashboard/admin/profile", icon: UserIcon },
      { name: "All Users", href: "/dashboard/admin/users", icon: UserGroupIcon },
      { name: "All Doctors", href: "/dashboard/admin/doctors", icon: UserGroupIcon },
      { name: "All Patients", href: "/dashboard/admin/patients", icon: UserGroupIcon },
      { name: "Pending Doctors", href: "/dashboard/admin/pendingDoctor", icon: DocumentTextIcon },
    ],
    doctor: [
      { name: "Dashboard", href: "/dashboard/doctor/home", icon: HomeIcon },
      { name: "Profile", href: "/dashboard/doctor/profile", icon: UserIcon },
      { name: "Patients", href: "/dashboard/doctor/patients", icon: UserGroupIcon },
      { name: "Pending Appointments", href: "/dashboard/doctor/appointments", icon: CalendarIcon },
    ],
    user: [
      { name: "Dashboard", href: "/dashboard/user/home", icon: HomeIcon },
      { name: "Profile", href: "/dashboard/user/profile", icon: UserIcon },
      { name: "Doctors", href: "/dashboard/user/doctors", icon: HeartIcon },
      { name: "Appointments", href: "/dashboard/user/allAppointment", icon: CalendarIcon },
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
    <aside className="w-64 bg-gradient-to-b from-slate-800 to-slate-900 text-white flex flex-col h-auto border-r border-slate-700">
      {/* Header Section */}
      <div className="p-6 border-b border-slate-700">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold hover:text-blue-400 transition-colors">
          <HomeIcon className="w-5 h-5" />
          Main Home
        </Link>
      </div>

      {/* User Profile Preview */}
      <div className="p-6 flex items-center gap-4 border-b border-slate-700">
        <img 
          src={session?.user?.image || "https://i.ibb.co/33gs5fP/user.png"} 
          className="w-10 h-10 rounded-full border-2 border-blue-400"
          alt="User avatar"
        />
        <div>
          <p className="font-medium truncate">{session?.user?.name}</p>
          <p className="text-sm text-slate-400">{role?.toUpperCase()}</p>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-4 space-y-1">
        {menuLinks[role]?.map((link) => {
          const isActive = pathname === link.href;
          const Icon = link.icon;
          
          return (
            <Link key={link.href} href={link.href}>
              <div className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                isActive 
                  ? "bg-blue-600/20 text-blue-400 border-l-4 border-blue-400"
                  : "hover:bg-slate-700/50 hover:border-l-4 hover:border-slate-600"
              }`}>
                <Icon className={`w-5 h-5 ${isActive ? "text-blue-400" : "text-slate-400"}`} />
                <span className="text-sm font-medium">{link.name}</span>
              </div>
            </Link>
          )
        })}

        {/* Apply as Doctor Button */}
        {role === "user" && (
          <button
            onClick={handleOpenModal}
            className="w-full flex items-center gap-3 px-4 py-3 mt-4 text-sm font-medium rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-600/50 hover:border-emerald-600 transition-colors"
          >
            <BriefcaseIcon className="w-5 h-5 text-emerald-400" />
            Become a Doctor
          </button>
        )}
      </nav>

      {/* Footer Section */}
      <div className="p-4 border-t border-slate-700">
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg hover:bg-red-600/20 hover:text-red-400 transition-colors"
        >
          <ArrowLeftOnRectangleIcon className="w-5 h-5" />
          Logout
        </button>
      </div>

      {/* Application Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
          <div className="bg-slate-800 text-white p-6 rounded-xl border border-slate-700 w-full max-w-md mx-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <BriefcaseIcon className="w-6 h-6 text-blue-400" />
                Doctor Application
              </h2>
              <button 
                onClick={handleCloseModal}
                className="p-1 hover:bg-slate-700 rounded-full"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleApply} className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-400">
                  CV URL
                </label>
                <input
                  type="url"
                  name="cvUrl"
                  value={formData.cvUrl}
                  onChange={handleChange}
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-slate-400">
                  Profile Image URL
                </label>
                <input
                  type="url"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleChange}
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-slate-400">
                  Specialty
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  required
                >
                  <option value="">Select specialty</option>
                  <option value="general">General Practitioner</option>
                  <option value="cardiology">Cardiology</option>
                  <option value="dermatology">Dermatology</option>
                  <option value="neurology">Neurology</option>
                  <option value="pediatrics">Pediatrics</option>
                </select>
              </div>

              {error && (
                <div className="p-3 bg-red-500/20 text-red-400 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-4 py-2 text-slate-300 hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center gap-2 transition-colors"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="animate-spin">⟳</span>
                      Applying...
                    </>
                  ) : (
                    <>
                      <CheckIcon className="w-5 h-5" />
                      Submit Application
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </aside>
  );
}
