import React, { useEffect, useState } from "react";
import axios from "axios";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const OrderConfirmation = () => {
  const [orderDetails, setOrderDetails] = useState([]);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const email = localStorage.getItem("userEmail"); 
        const response = await axios.get("http://localhost:5000/get-addresses", {
          params: { email },
        });
        setOrderDetails(response.data.addresses || []);
      } catch (error) {
        console.error("Error fetching order details:", error);
      }
    };

    fetchOrderDetails();
  }, []);

  return (
    <div>
      <h2>Order Confirmation</h2>
      {orderDetails.length > 0 ? (
        <div>
          <h3>Shipping Address:</h3>
          <p>{orderDetails[0].address1}, {orderDetails[0].city}, {orderDetails[0].country}</p>
          <p>Zip Code: {orderDetails[0].zipCode}</p>
        </div>
      ) : (
        <p>Loading order details or no address found...</p>
      )}
      <PayPalScriptProvider options={{ clientId: "AesbSTn6BlZlmWXw3VcNBuHOenIzlDH4beniwz-lY9p_JnzUTlrhLD_muyXJ6Kt-c0XtzmibOVN4h2OH" }}>
            <PayPalButtons style={{ layout: "horizontal" }}
            createOrder={(data, actions) => {
              return actions.order.create({purchase_units : [{amount:{value : totalPrice.toFixed(2)}}]})
            }}
            onApprove={(data, actions) => {
              return actions.order.capture()

            }} 
            >Pay with paypal</PayPalButtons>
      </PayPalScriptProvider> 
    </div>
  );
};

export default OrderConfirmation;
