import { useState } from "react";
import "./AccountCreation.css";

export default function AccountCreation({ setPage }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    accountType: "Savings",
    initialDeposit: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account Created Successfully!");
    setPage("account"); // Redirect to the account page after creation
  };

  return (
    <div className="account-creation">
      <h2>Open a New Account</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Phone:</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label>Account Type:</label>
        <select name="accountType" value={formData.accountType} onChange={handleChange}>
          <option value="Savings">Savings</option>
          <option value="Current">Current</option>
          <option value="Fixed Deposit">Fixed Deposit</option>
        </select>

        <label>Initial Deposit:</label>
        <input
          type="number"
          name="initialDeposit"
          value={formData.initialDeposit}
          onChange={handleChange}
          required
        />

        <button type="submit" className="create-btn">Create Account</button>
      </form>
    </div>
  );
}
