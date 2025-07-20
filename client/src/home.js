import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Expense Tracker </h1>
      <p>Track your spending and stay on budget!</p>
      <Link to="/add" className="home-button">Go to Add Expenses</Link>

      <footer className="home-footer">
  <p>© {new Date().getFullYear()} Expense Tracker. All rights reserved.</p>
  <div className="footer-links">
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
    <a href="mailto:support@expensetracker.com">Email</a>
    <a href="#">Help Line</a>
  </div>
</footer>

    </div>
  );
}

export default Home;
