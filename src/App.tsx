import React from 'react';
import logo from './logo.svg';
import './App.css';
import IncomeDetailsList from "./components/IncomeDetailsList";
import IncomeDetailsById from "./components/IncomeDetailsById";
import ExpenseDetailsList from "./components/ExpenseDetailsList";

function App() {
  return (
    <div className="App">
      <ExpenseDetailsList />
    </div>
  );
}

export default App;
