import { useState } from "react";
import Style from './nanoTable.module.css'

const NanoTable = ({ columns, data }) => {
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const itemsPerPage = 10; // Number of rows per page

  // Sorting function
  const handleSort = (columnKey) => {
    if (sortColumn === columnKey) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(columnKey);
      setSortOrder("asc");
    }
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortColumn) return 0;
    const valA = a[sortColumn] || "";
    const valB = b[sortColumn] || "";
    return sortOrder === "asc"
      ? String(valA).localeCompare(String(valB))
      : String(valB).localeCompare(String(valA));
  });

  // Filtering function
  const filteredData = sortedData.filter((row) =>
    columns.some((col) =>
      String(row[col.key]).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  // Pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div id={Style.tableContainer}>
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search..."
        className= {Style.searchBox}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Table */}
      <table className={Style.customTable}>
        {/* <thead>
          <tr className={Style.customTable}>
            {columns.map((col) => (
              <th
                key={col.key}
                id={Style.tableHeader}
                onClick={() => handleSort(col.key)}
              >
                {col.label} {sortColumn === col.key ? (sortOrder === "asc" ? "↑" : "↓") : ""}
              </th>
            ))}
          </tr>
        </thead> */}
        <tbody>
          {paginatedData.length > 0 ? (
            paginatedData.map((row, rowIndex) => (
              <tr key={rowIndex} className={Style.tableBody}>
                {columns.map((col) => (
                  <td key={col.key} className="p-3 border">
                    {row[col.key]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className={Style.noData}>
                No data found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages || 1}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default NanoTable;
