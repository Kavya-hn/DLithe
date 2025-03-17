import { useState } from "react";
import "./Search.css";

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const data = [
    "Savings Account",
    "Current Account",
    "Fixed Deposit (FD)",
    "Recurring Deposit (RD)",
    "Home Loans",
    "Car Loans",
    "Education Loans",
    "Personal Loans",
    "Mutual Funds",
    "Stock Investments",
    "Insurance Plans",
  ];

  const handleSearch = () => {
    if (query.trim() === "") {
      setResults([]);
      return;
    }

    const filteredResults = data.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filteredResults);
  };

  return (
    <div className="search-container">
      <h2>Search Bank Services</h2>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search for accounts, loans, investments..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="search-results">
        {results.length > 0 ? (
          <ul>
            {results.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          query && <p>No results found.</p>
        )}
      </div>
    </div>
  );
}
