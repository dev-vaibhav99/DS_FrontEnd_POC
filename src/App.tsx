import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import IncomeDetailsList from "./components/IncomeDetailsList";
import IncomeDetailsById from "./components/IncomeDetailsById";
import ExpenseDetailsList from "./components/ExpenseDetailsList";
import ExpenseDetailsById from "./components/ExpenseDetailsById";
import AddRevenueCategoryComponent from "./components/AddRevenueCategoryComponent";
import UpdateRevenueCategoryComponent from "./components/UpdateRevenueCategoryComponent";

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
        </Routes>
      </Router>
    </div>
  );
};

export default App;
