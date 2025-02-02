import React, { useState } from "react";
import Modal from "react-modal";
import './filterPopUp.css'
const FilterModal = ({ isOpen, onClose, onApplyFilters }) => {
  const [filters, setFilters] = useState({
    userId: "",
    betId: "",
    betAmount: "",
    ticketId: "",
    country: "",
    amount: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleApplyFilters = () => {
    onApplyFilters(filters); // Pass the filters to the parent component
    onClose(); // Close the modal
  };
    

  return (
    <Modal
      id='modalContainer'
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Filter Modal"
      style={{
        content: {
          width: "400px",
          height: "300px",
          margin: "auto",
          padding: "20px",
          borderRadius: "40px",
        },
      }}
    >
      {/* <h2>Filter Parameters</h2> */}
      <label for="cars">Filter data: </label>
      <br />
      <br />

      <div id="parameterfieldsContainer" style={{ marginBottom: "10px" }}>
        {/* <label>Amount</label> */}
        <input
        id="inputField"
          type="text"
          name="amount"
          value={filters.amount}
          onChange={handleInputChange}
          placeholder="Enter value"
        />
        <select name="filter" id="filterParams">
          <option value="volvo">filter by:</option>
          <option value="volvo">Bet ID</option>
          <option value="saab">Bet Amount</option>
          <option value="mercedes">Ticket ID</option>
          <option value="audi">Amount</option>
        </select>
      </div>
      <br /><br />
      

      <button onClick={handleApplyFilters} style={{ marginRight: "10px" }}>
        Apply
      </button>
      <button onClick={onClose}>Close</button>
    </Modal>
  );
};

export default FilterModal;
