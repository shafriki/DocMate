"use client";
import RoleGuard from "@/app/components/RoleGuard";
import { useEffect, useState } from "react";

const UserPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    fetchUsersAndAppointments();
  }, []);

  const fetchUsersAndAppointments = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/admin-users-and-appointment");
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching users and appointments:", error);
    } finally {
      setLoading(false);
    }
  };

  const totalUsers = data.length;
  const totalPages = Math.ceil(totalUsers / itemsPerPage);
  const currentUsers = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNextPage = () => currentPage < totalPages && setCurrentPage(prev => prev + 1);
  const handlePrevPage = () => currentPage > 1 && setCurrentPage(prev => prev - 1);
  const handlePageClick = pageNumber => setCurrentPage(pageNumber);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-[#105852]">
        Loading users and appointments...
      </div>
    );
  }

  return (
    <RoleGuard allowedRoles={["admin"]}>
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-4xl text-center font-bold mb-8 text-[#105852]">
        All Patients
      </h2>
      
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#e0f2f1]">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-[#105852]">#</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-[#105852]">Patient</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-[#105852]">Contact</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-[#105852] w-1/3">Appointments</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#e0f2f1]">
            {currentUsers.map((user, index) => (
              <tr key={user._id} className="hover:bg-[#f5fbfa] transition-colors">
                <td className="px-6 py-4 text-gray-600">{(currentPage - 1) * itemsPerPage + index + 1}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-12 w-12">
                      <img
                        className="rounded-full border-2 border-[#66c0b8] p-0.5"
                        src={user.image || "https://i.ibb.co/33gs5fP/user.png"}
                        alt="User avatar"
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{user.name}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900">{user.email}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="space-y-3">
                    {user.appointments.length > 0 ? (
                      user.appointments.map((appointment, idx) => (
                        <div
                          key={idx}
                          className="p-3 bg-white rounded-lg border border-[#e0f2f1] shadow-sm"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-[#105852]">
                              {appointment.doctorName}
                            </span>
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              appointment.isAppointed
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}>
                              {appointment.isAppointed ? "Confirmed" : "Pending"}
                            </span>
                          </div>
                          <div className="mt-1 text-sm text-gray-600">
                            <span className="block">{appointment.date}</span>
                            <span className="block">{appointment.time}</span>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-sm text-gray-500 italic">No appointments found</div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex flex-col md:flex-row justify-between items-center px-6 py-4 border-t border-[#e0f2f1]">
          <div className="mb-4 md:mb-0 text-sm text-gray-600">
            Showing {((currentPage - 1) * itemsPerPage) + 1} to{' '}
            {Math.min(currentPage * itemsPerPage, totalUsers)} of {totalUsers} users
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                currentPage === 1
                  ? 'text-gray-400 bg-gray-100 cursor-not-allowed'
                  : 'text-[#105852] hover:bg-[#e0f2f1]'
              }`}
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => handlePageClick(i + 1)}
                className={`px-3 py-1 text-sm rounded-md transition-colors ${
                  currentPage === i + 1
                    ? 'bg-[#105852] text-white'
                    : 'text-gray-600 hover:bg-[#e0f2f1]'
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                currentPage === totalPages
                  ? 'text-gray-400 bg-gray-100 cursor-not-allowed'
                  : 'text-[#105852] hover:bg-[#e0f2f1]'
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
    </RoleGuard>
  );
};

export default UserPage;