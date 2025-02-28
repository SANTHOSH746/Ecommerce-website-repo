import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState(null);
  const email = "user@example.com"; 

  useEffect(() => {
    axios
      .get(`http://localhost:5000/profile?email=${email}`)
      .then((response) => {
        setUser(response.data.user);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>User Profile</h1>
      <img
        src={`http://localhost:5000/uploads/${user.avatar}`}
        alt="Profile"
        style={{ width: "150px", height: "150px", borderRadius: "50%" }}
      />
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Address: {user.address || "No address provided"}</p>
    </div>
  );
};

export default Profile;
