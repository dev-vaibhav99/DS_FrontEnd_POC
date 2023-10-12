import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import IncomeDetailsList from "./components/RevenueComponents/Income/IncomeDetailsList";
import IncomeDetailsById from "./components/RevenueComponents/Income/IncomeDetailsById";
import ExpenseDetailsList from "./components/RevenueComponents/Expense/ExpenseDetailsList";
import ExpenseDetailsById from "./components/RevenueComponents/Expense/ExpenseDetailsById";
import AddRevenueCategoryComponent from "./components/RevenueComponents/RevenueCategory/AddRevenueCategoryComponent";
import UpdateRevenueCategoryComponent from "./components/RevenueComponents/RevenueCategory/UpdateRevenueCategoryComponent";
import AddIncomeDetailsComponent from "./components/RevenueComponents/Income/AddIncomeDetailsComponent";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="updateRevenueCategory/:id"
            Component={UpdateRevenueCategoryComponent}
          ></Route>
          <Route path="incomeDetails" Component={IncomeDetailsList}></Route>
          <Route path="expenseDetails" Component={ExpenseDetailsList}></Route>

          <Route path="incomeDetails/:id" Component={IncomeDetailsById}></Route>
          <Route
            path="expenseDetails/:id"
            Component={ExpenseDetailsById}
          ></Route>
          <Route
            path="addRevenueCategory"
            Component={AddRevenueCategoryComponent}
          ></Route>
          <Route path="payment" Component={AddIncomeDetailsComponent}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
