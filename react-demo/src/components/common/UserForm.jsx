import React, { useEffect, useState } from "react";

// Controller component - using state
// Uncontroller component - using ref

const UserForm = () => {
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    console.log("Re-rendered");
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form is submitted:", formData);
  };

  // 31122002
  // 31/12/2002

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          //   onChange={(e) => setEmail(e.target.value)}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, email: e.target.value }))
          }
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={formData.password}
          //   onChange={(e) => setPassword(e.target.value)}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, password: e.target.value }))
          }
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
