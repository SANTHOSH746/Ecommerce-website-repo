import React, { useEffect, useState } from "react";
import axios from "axios";

const OrderConfirmation = () => {
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const email = localStorage.getItem("userEmail"); // Assuming user email is stored in localStorage
        const response = await axios.get("http://localhost:5000/auth/get-addresses", {
          params: { email },
        });
        setOrderDetails(response.data.addresses);
      } catch (error) {
        console.error("Error fetching order details:", error);
      }
    };

    fetchOrderDetails();
  }, []);

  return (
    <div>
      <h2>Order Confirmation</h2>
      {orderDetails ? (
        <div>
          <h3>Shipping Address:</h3>
          <p>{orderDetails[0]?.address1}, {orderDetails[0]?.city}, {orderDetails[0]?.country}</p>
          <p>Zip Code: {orderDetails[0]?.zipCode}</p>
        </div>
      ) : (
        <p>Loading order details...</p>
      )}
    </div>
  );
};

export default OrderConfirmation;
