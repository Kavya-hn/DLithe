import { useState } from "react";
import "./Home.css";

export default function Home({ setPage }) {
  const [searchTerm, setSearchTerm] = useState("");
  const services = [
    "Account",
    "Create Account",
    "Withdraw",
    "Loans",
    "Investments",
    "FD Interest",
    "Advertisements",
  ];

  const filteredServices = services.filter(service =>
    service.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home">
      <header className="header">
        <h1 className="bank-name">Finance Bank</h1>
        <input
          type="text"
          placeholder="Search services..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="login-btn" onClick={() => setPage("login")}>
          Login
        </button>
      </header>

      <nav className="navbar">
        {services.map((service) => (
          <button key={service} onClick={() => setPage(service.toLowerCase().replace(" ", "-"))}>
            {service}
          </button>
        ))}
      </nav>

      <main className="content">
        <h2>Search Results</h2>
        <ul>
          {filteredServices.length > 0 ? (
            filteredServices.map((service) => (
              <li key={service} onClick={() => setPage(service.toLowerCase().replace(" ", "-"))}>
                {service}
              </li>
            ))
          ) : (
            <p>No results found</p>
          )}
        </ul>
      </main>
    </div>
  );
}
