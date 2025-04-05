"use client";
import RoleGuard from "@/app/components/RoleGuard";
import { useEffect, useState } from "react";

const DoctorPage = () => {
  const [doctors, setDoctors] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const res = await fetch("/api/users");
      const data = await res.json();
      // Filter only doctors
      const doctorData = data.filter(user => user.role === "doctor");
      setDoctors(doctorData);
      console.log(doctorData)
    } catch (error) {
      console.error("Error fetching doctors:", error);
    }
  };

  // Pagination logic
  const totalDoctors = doctors.length;
  const totalPages = Math.ceil(totalDoctors / itemsPerPage);
  const currentDoctors = doctors.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNextPage = () =>
    currentPage < totalPages && setCurrentPage(prev => prev + 1);
  const handlePrevPage = () =>
    currentPage > 1 && setCurrentPage(prev => prev - 1);
  const handlePageClick = pageNumber => setCurrentPage(pageNumber);

  return (
    <RoleGuard allowedRoles={["admin"]}>
      <div>
        <h2 className="text-xl md:text-3xl text-center font-bold mb-5">All Doctors</h2>
        <div className="overflow-x-auto shadow-md">
          <table className="table w-full">
            <thead className="bg-[#ddf5f3]">
              <tr>
                <th className="p-4">#</th>
                <th className="p-4">Doctor Image</th>
                <th className="p-4">Doctor Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Category</th>
                <th className="p-4">CV</th>
              </tr>
            </thead>
            <tbody>
              {currentDoctors.map((doctor, index) => (
                <tr key={doctor._id} className="border-b">
                  <td className="p-4">{(currentPage - 1) * itemsPerPage + index + 1}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={doctor.doctorImageUrl || "https://i.ibb.co/33gs5fP/user.png"}
                            alt="Doctor Avatar"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-base font-semibold">{doctor.name}</td>
                  <td className="p-4 text-base">{doctor.email}</td>
                  <td className="p-4 text-base">{doctor.doctorCategory || "N/A"}</td>
                  <td className="p-4 text-base">
                    {doctor.doctorCvUrl ? (
                      <a
                        href={doctor.doctorCvUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                      >
                        View CV
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center mt-8 space-y-2">
          <p className="text-xs md:text-base text-[#52a09a] font-semibold">
            Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
            {Math.min(currentPage * itemsPerPage, totalDoctors)} of {totalDoctors} results
          </p>
          <div className="flex space-x-2">
            <button
              className={`px-3 py-1 border rounded ${currentPage === 1
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-white text-[#66c0b8]"
                }`}
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              Prev
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`px-3 py-1 border rounded ${currentPage === index + 1
                    ? "bg-[#105852] text-white"
                    : "bg-white text-[#ddf5f3]"
                  }`}
                onClick={() => handlePageClick(index + 1)}
              >
                {index + 1}
              </button>
            ))}
            <button
              className={`px-3 py-1 border rounded ${currentPage === totalPages
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-white text-[#1d7b74]"
                }`}
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </RoleGuard>
  );
};

export default DoctorPage;
