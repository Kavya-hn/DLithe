import React from "react";
import "./Loans.css";

const Loans = () => {
  const loanTypes = [
    { name: "Home Loan", rate: "8.5% p.a.", tenure: "Up to 30 years" },
    { name: "Personal Loan", rate: "10.75% p.a.", tenure: "Up to 5 years" },
    { name: "Car Loan", rate: "9.25% p.a.", tenure: "Up to 7 years" },
    { name: "Education Loan", rate: "9.75% p.a.", tenure: "Up to 15 years" },
    { name: "Gold Loan", rate: "7.5% p.a.", tenure: "Up to 3 years" },
  ];

  return (
    <div className="loans-container">
      <h2>Loan Information</h2>
      <p>Explore different types of loans and their interest rates.</p>
      <div className="loan-list">
        {loanTypes.map((loan, index) => (
          <div className="loan-card" key={index}>
            <h3>{loan.name}</h3>
            <p><strong>Interest Rate:</strong> {loan.rate}</p>
            <p><strong>Maximum Tenure:</strong> {loan.tenure}</p>
            <button className="apply-btn">Apply Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loans;
