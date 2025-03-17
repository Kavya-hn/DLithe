import "./Account.css";

export default function Account({ setPage }) {
  const accountTypes = [
    {
      name: "Savings Account",
      description: "Best for individuals to save money with interest benefits.",
    },
    {
      name: "Current Account",
      description: "Ideal for businesses and frequent transactions.",
    },
    {
      name: "Fixed Deposit (FD)",
      description: "Secure your funds with higher interest rates over time.",
    },
    {
      name: "Recurring Deposit (RD)",
      description: "Save monthly and get assured returns with interest.",
    },
    {
      name: "Salary Account",
      description: "Designed for salaried employees with added benefits.",
    },
  ];

  return (
    <div className="account">
      <h1>Account Types</h1>
      <div className="account-list">
        {accountTypes.map((account, index) => (
          <div className="account-card" key={index}>
            <h2>{account.name}</h2>
            <p>{account.description}</p>
            <button onClick={() => setPage("login")}>Open Account</button>
          </div>
        ))}
      </div>
    </div>
  );
}
