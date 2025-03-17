import { useState } from "react";
import "./Withdraw.css";

export default function Withdraw({ setPage }) {
  const [formData, setFormData] = useState({
    name: "",
    accountNumber: "",
    email: "",
    gender: "Female",
    password: "",
    confirmPassword: "",
    amount: "",
  });

  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [storedUser, setStoredUser] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Registration
  const handleRegister = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const newUser = {
      name: formData.name,
      accountNumber: formData.accountNumber,
      email: formData.email,
      gender: formData.gender,
      password: formData.password,
    };

    setStoredUser(newUser);
    setIsRegistered(true);
    alert("Registration successful! Please log in.");
    setFormData({ ...formData, password: "", confirmPassword: "" });
  };

  // Handle Login
  const handleLogin = (e) => {
    e.preventDefault();
    if (
      storedUser &&
      formData.accountNumber === storedUser.accountNumber &&
      formData.password === storedUser.password
    ) {
      setIsLoggedIn(true);
      alert("Login successful!");
    } else {
      alert("Invalid account number or password!");
    }
  };

  // Handle Withdraw
  const handleWithdraw = (e) => {
    e.preventDefault();
    if (parseFloat(formData.amount) > 0) {
      alert(`₹${formData.amount} withdrawn successfully!`);
      setFormData({ ...formData, amount: "" });
    } else {
      alert("Please enter a valid amount!");
    }
  };

  return (
    <div className="withdraw">
      <h2>{isLoggedIn ? "Withdraw Money" : isRegistered ? "Login to Withdraw" : "Register an Account"}</h2>

      {!isRegistered ? (
        // Registration Form
        <form onSubmit={handleRegister} className="register-form">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />

          <label>Account Number:</label>
          <input type="text" name="accountNumber" value={formData.accountNumber} onChange={handleChange} required />

          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          <label>Gender:</label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />

          <label>Confirm Password:</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />

          <button type="submit" className="register-btn">Register</button>
        </form>
      ) : !isLoggedIn ? (
        // Login Form
        <form onSubmit={handleLogin} className="login-form">
          <label>Account Number:</label>
          <input type="text" name="accountNumber" value={formData.accountNumber} onChange={handleChange} required />

          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />

          <button type="submit" className="login-btn">Login</button>
        </form>
      ) : (
        // Withdraw Form
        <form onSubmit={handleWithdraw} className="withdraw-form">
          <label>Amount to Withdraw:</label>
          <input type="number" name="amount" value={formData.amount} onChange={handleChange} required />

          <button type="submit" className="withdraw-btn">Withdraw</button>
        </form>
      )}
    </div>
  );
}
