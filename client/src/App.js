import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./home";
import AddExpense from "./AddExpense";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddExpense />} />
      </Routes>
    </Router>
  );
}

export default App;
