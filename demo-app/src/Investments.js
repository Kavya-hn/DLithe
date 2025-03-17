import React, { useState } from "react";
import "./Investments.css";

const stockOptions = [
  { name: "Reliance Industries" },
  { name: "Tata Consultancy Services" },
  { name: "HDFC Bank" },
  { name: "Infosys" },
  { name: "ICICI Bank" },
  { name: "Bharti Airtel" },
  { name: "Hindustan Unilever" },
  { name: "Kotak Mahindra Bank" },
  { name: "Larsen & Toubro" },
  { name: "Bajaj Finance" },
];

const Investments = () => {
  const [selectedStock, setSelectedStock] = useState("");
  const [amount, setAmount] = useState("");
  const [stocks, setStocks] = useState([]);

  const handleAddStock = () => {
    if (selectedStock !== "" && amount.trim() !== "" && parseFloat(amount) > 0) {
      const newStock = {
        name: selectedStock,
        price: (Math.random() * 1000 + 100).toFixed(2), // Random price between 100-1100
        amount: parseFloat(amount),
      };
      setStocks([...stocks, newStock]);
      setSelectedStock("");
      setAmount("");
    } else {
      alert("Please select a stock and enter a valid investment amount.");
    }
  };

  const handleRemoveStock = (index) => {
    const updatedStocks = stocks.filter((_, i) => i !== index);
    setStocks(updatedStocks);
  };

  const totalInvestment = stocks.reduce((total, stock) => total + stock.amount, 0).toFixed(2);

  return (
    <div className="investments-container">
      <h2>Investment Options</h2>
      <p>Select a stock and invest your money wisely.</p>

      <div className="investment-input">
        <select value={selectedStock} onChange={(e) => setSelectedStock(e.target.value)}>
          <option value="">Select a stock</option>
          {stockOptions.map((stock, index) => (
            <option key={index} value={stock.name}>{stock.name}</option>
          ))}
        </select>
        
        <input
          type="number"
          placeholder="Investment Amount (₹)..."
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        
        <button className="add-btn" onClick={handleAddStock}>Add Investment</button>
      </div>

      {stocks.length > 0 && (
        <div className="stocks-list">
          <h3>Your Investments:</h3>
          <ul>
            {stocks.map((stock, index) => (
              <li key={index}>
                <span>{stock.name} - ₹{stock.price} per share - Invested: ₹{stock.amount}</span>
                <button className="remove-btn" onClick={() => handleRemoveStock(index)}>Remove</button>
              </li>
            ))}
          </ul>
          <h3>Total Investment: ₹{totalInvestment}</h3>
        </div>
      )}
    </div>
  );
};

export default Investments;
