import React from 'react';
import logo from './logo.svg';
import './App.css';
import IncomeDetailsList from "./components/IncomeDetailsList";
import IncomeDetailsById from "./components/IncomeDetailsById";
import ExpenseDetailsList from "./components/ExpenseDetailsList";
import ExpenseDetailsById from "./components/ExpenseDetailsById";
import AddRevenueCategoryComponent from "./components/AddRevenueCategoryComponent";

const App = () => {
  return (
    <div className="App">
      <AddRevenueCategoryComponent />
    </div>
  );
};

export default App;
