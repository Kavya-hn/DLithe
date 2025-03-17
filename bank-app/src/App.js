import { useState } from "react";
import Home from "./Home";
import Account from "./Account";
import AccountCreation from "./AccountCreation";
import Withdraw from "./Withdraw";
import Search from "./Search";
import Loans from "./Loans";
import Investments from "./Investments";
import Advertisements from "./Advertisements";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <h1>Finance Bank</h1>
        <button className="button" onClick={() => setPage("login")}>Login</button>
      </header>

      {/* Sidebar Navigation */}
      <nav className="sidebar">
        <h2>Finance Bank</h2>
        <ul>
          <li onClick={() => setPage("home")}>Home</li>
          <li onClick={() => setPage("account")}>Account</li>
          <li onClick={() => setPage("account-creation")}>Open Account</li>
          <li onClick={() => setPage("withdraw")}>Withdraw</li>
          <li onClick={() => setPage("search")}>Search</li>
          <li onClick={() => setPage("loans")}>Loans</li>
          <li onClick={() => setPage("investments")}>Investments</li>
        </ul>
      </nav>

      {/* Main Content Area */}
      <div className="main-content">
        {page === "home" && <Home setPage={setPage} />}
        {page === "account" && <Account setPage={setPage} />}
        {page === "account-creation" && <AccountCreation setPage={setPage} />}
        {page === "withdraw" && <Withdraw setPage={setPage} />}
        {page === "search" && <Search setPage={setPage} />}
        {page === "loans" && <Loans setPage={setPage} />}
        {page === "investments" && <Investments setPage={setPage} />}
      </div>

      {/* Advertisements */}
      <Advertisements />
    </div>
  );
}
