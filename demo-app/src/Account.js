import React from "react";
import "./Account.css";

const Account = ({ setPage }) => {
  return (
    <div className="account-container">
      <h2>Account Types</h2>
      <div className="account-cards">
        <div className="account-card" onClick={() => setPage("account-creation") }>
          <h3>Savings Account</h3>
          <p>Open a savings account with attractive interest rates.</p>
          <button className="button">Open Now</button>
        </div>

        <div className="account-card" onClick={() => setPage("account-creation") }>
          <h3>Current Account</h3>
          <p>Manage your business transactions efficiently.</p>
          <button className="button">Open Now</button>
        </div>

        <div className="account-card" onClick={() => setPage("account-creation") }>
          <h3>Fixed Deposit Account</h3>
          <p>Invest and earn higher interest over time.</p>
          <button className="button">Open Now</button>
        </div>
      </div>
    </div>
  );
};

export default Account;
