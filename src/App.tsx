import React from 'react';
import logo from './logo.svg';
import './App.css';
import IncomeDetailsList from "./components/IncomeDetailsList";
import IncomeDetailsById from "./components/IncomeDetailsById";
import ExpenseDetailsList from "./components/ExpenseDetailsList";
import ExpenseDetailsById from "./components/ExpenseDetailsById";

function App() {
  return (
    <div className="App">
      <ExpenseDetailsById />
    </div>
  );
}

export default App;
