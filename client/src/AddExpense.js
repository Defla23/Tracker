import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AddExpense.css";
import { Link } from "react-router-dom";


function AddExpense() {
  const [expenses, setExpenses] = useState([]);
  const [form, setForm] = useState({ item: "", amount: "", category: "" });

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/expenses/")
      .then(res => setExpenses(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://127.0.0.1:8000/api/expenses/", form)
      .then(res => {
        setExpenses([...expenses, res.data]);
        setForm({ item: "", amount: "", category: "" });
      })
      .catch(err => console.error(err));
  };

  const handleDelete = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/expenses/${id}/`)
      .then(() => setExpenses(expenses.filter(exp => exp.id !== id)))
      .catch(err => console.error(err));
  };

  const total = expenses.reduce((sum, exp) => sum + parseInt(exp.amount), 0);

  return (
    <div className="add-container">
      <form className="add-form" onSubmit={handleSubmit}>
        <h2>Add Expense</h2>
        <input name="item" value={form.item} onChange={handleChange} placeholder="Item" required />
        <input name="amount" type="number" value={form.amount} onChange={handleChange} placeholder="Amount" required />
        <input name="category" value={form.category} onChange={handleChange} placeholder="Category" required />
        <button type="submit">Add</button>
      </form>

      <div className="add-form" style={{ marginTop: "2rem" }}>
        <h2>Summary</h2>
        <p>Total: <strong>Ksh {total}</strong></p>

        <ul>
          {expenses.map(exp => (
            <li key={exp.id}>
              {exp.item} - Ksh {exp.amount} - {exp.category}
              <button onClick={() => handleDelete(exp.id)} style={{ marginLeft: "1rem" }}>❌</button>
            </li>
            
          ))}
        </ul>
              <Link to="/" className="home-button">home </Link>

      </div>
    </div>
  );
}

export default AddExpense;
