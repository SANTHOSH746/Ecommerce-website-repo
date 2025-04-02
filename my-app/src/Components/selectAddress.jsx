import React, { useEffect, useState } from "react";
import axios from "axios";

const SelectAddress = ({ userEmail, onAddressSelect }) => {
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/auth/get-addresses?email=${userEmail}`)
      .then((response) => {
        console.log("Fetched Addresses:", response.data);
        setAddresses(response.data.addresses);
      })
      .catch((error) => {
        console.error("Error fetching addresses", error);
      });
  }, [userEmail]);

  const handleSelect = (event) => {
    setSelectedAddress(event.target.value);
  };

  const handleConfirm = () => {
    if (!selectedAddress) {
      alert("Please select an address!");
      return;
    }
    localStorage.setItem("selectedAddress", selectedAddress);
    onAddressSelect(selectedAddress); 
  };

  return (
    <div>
      <h2>Select Delivery Address</h2>
      {addresses.length > 0 ? (
        <>
          <select onChange={handleSelect} value={selectedAddress}>
            <option value="">Select an address</option>
            {addresses.map((address) => (
              <option key={address._id} value={JSON.stringify(address)}>
                {address.address1}, {address.city}, {address.country}
              </option>
            ))}
          </select>
          <button onClick={handleConfirm}>Confirm Address</button>
        </>
      ) : (
        <p>No addresses found. Please add an address first.</p>
      )}
    </div>
  );
};

export default SelectAddress;
