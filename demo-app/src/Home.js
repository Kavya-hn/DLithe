import { useState } from "react";
import "./Home.css";


export default function Home({ setPage }) {
  const [searchTerm, setSearchTerm] = useState("");

  const accounts = [
    { name: "Savings Account", description: "Earn interest on your savings." },
    { name: "Current Account", description: "Manage daily transactions easily." },
    { name: "Fixed Deposit", description: "Get higher returns on your deposits." },
    { name: "Recurring Deposit", description: "Save monthly and earn interest." }
  ];

  return (
    <div className="home">
      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={() => alert(`Searching for ${searchTerm}`)}>Search</button>
      </div>

      {/* Account Details */}
      <h2>Our Accounts</h2>
      <div className="account-cards">
        {accounts.map((account, index) => (
          <div key={index} className="card">
            <h3>{account.name}</h3>
            <p>{account.description}</p>
            <button onClick={() => setPage("account")}>Learn More</button>
          </div>
        ))}
      </div>

      {/* Sticky Advertisement */}
      <div className="sticky-ad">
        Exclusive Offer: Get 7% interest on Fixed Deposits!
      </div>
    </div>
  );
}
