"use client";
import { useEffect, useState } from "react";

const UserPage = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await fetch("/api/users");
      const data = await res.json();
      // Filter only normal users (excluding doctors and admins)
      const userData = data.filter(user => user.role === "user");
      setUsers(userData);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Pagination logic
  const totalUsers = users.length;
  const totalPages = Math.ceil(totalUsers / itemsPerPage);
  const currentUsers = users.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNextPage = () => currentPage < totalPages && setCurrentPage(prev => prev + 1);
  const handlePrevPage = () => currentPage > 1 && setCurrentPage(prev => prev - 1);
  const handlePageClick = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <h2 className="text-xl md:text-3xl text-center font-bold mb-5">All Users</h2>
      <div className="overflow-x-auto shadow-md">
        <table className="table">
          <thead className="bg-[#ddf5f3]">
            <tr>
              <th>#</th>
              <th>User Image</th>
              <th>User Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user, index) => (
              <tr key={user._id}>
                <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={user.image || "https://i.ibb.co/33gs5fP/user.png"} alt="User Avatar" />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-base font-semibold">{user.name}</td>
                <td className="text-base">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-8 space-y-2">
        <p className="text-xs md:text-base text-[#52a09a] font-semibold">
          Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, totalUsers)} of {totalUsers} results
        </p>
        <div className="flex space-x-2">
          <button
            className={`px-3 py-1 border rounded ${currentPage === 1 ? "bg-gray-200 text-gray-500 cursor-not-allowed" : "bg-white text-[#66c0b8]"}`}
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`px-3 py-1 border rounded ${currentPage === index + 1 ? "bg-[#105852] text-white" : "bg-white text-[#ddf5f3]"}`}
              onClick={() => handlePageClick(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className={`px-3 py-1 border rounded ${currentPage === totalPages ? "bg-gray-200 text-gray-500 cursor-not-allowed" : "bg-white text-[#1d7b74]"}`}
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserPage;