import React from 'react';
import logo from './logo.svg';
import './App.css';
import IncomeDetailsList from "./components/IncomeDetailsList";
import IncomeDetailsById from "./components/IncomeDetailsById";

function App() {
  return (
    <div className="App">
      <IncomeDetailsById />
    </div>
  );
}

export default App;
