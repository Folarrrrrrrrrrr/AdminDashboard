// import React, { useState } from "react";

// const ListTable = ({ data, headers }) => {
//   // Sorting, Filtering, and Pagination States
//   const [searchQuery, setSearchQuery] = useState("");
//   const [sortColumn, setSortColumn] = useState(null);
//   const [sortOrder, setSortOrder] = useState("asc");
//   const [currentPage, setCurrentPage] = useState(1);
//   const pageSize = 10; // Number of rows per page

//   // **1. Filtering Logic**
//   const filteredData = data.filter((row) =>
//     Object.values(row).some((value) =>
//       value.toString().toLowerCase().includes(searchQuery.toLowerCase())
//     )
//   );

//   // **2. Sorting Logic**
//   const sortedData = [...filteredData].sort((a, b) => {
//     if (!sortColumn) return 0; // No sorting initially
//     const aValue = a[sortColumn];
//     const bValue = b[sortColumn];

//     if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
//     if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
//     return 0;
//   });

//   // **3. Pagination Logic**
//   const totalPages = Math.ceil(sortedData.length / pageSize);
//   const paginatedData = sortedData.slice((currentPage - 1) * pageSize, currentPage * pageSize);

//   // **Sorting Handler**
//   const handleSort = (column) => {
//     setSortOrder(sortColumn === column && sortOrder === "asc" ? "desc" : "asc");
//     setSortColumn(column);
//   };

//   return (
//     <div>
//       {/* Search Filter */}
//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//       />

//       {/* Table */}
//       <table border="1">
//         <thead>
//           <tr>
//             {headers.map((column) => (
//               <th key={column} onClick={() => handleSort(column)} style={{ cursor: "pointer" }}>
//                 {column.toUpperCase()} {sortColumn === column ? (sortOrder === "asc" ? "🔼" : "🔽") : ""}
//               </th>
//             ))}
//           </tr>
//         </thead>

//         <tbody>
//           {paginatedData.map((row, index) => (
//             <tr key={index}>
//               <td>{row.sn}</td>
//               <td>{row.date}</td>
//               <td>{row.queryType}</td>
//               <td>{row.category}</td>
//               <td>{row.username}</td>
//               <td>{row.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Pagination Controls */}
//       <div>
//         <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
//           Previous
//         </button>
//         <span> Page {currentPage} of {totalPages} </span>
//         <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default DataTable;
