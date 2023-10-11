import React, { useEffect, useState } from "react";
import apiService from "../services/revenue.service";

interface ExpenseDetails {
  expenseId: number;
  revenueCategoryId: number;
  amount: number;
  mentorId: number;
  remark: string;
}

const ExpenseDetailsList: React.FC = () => {
  const [expenseDetails, setExpenseDetails] = useState<ExpenseDetails[]>([]);

  useEffect(() => {
    // Fetch items from the API when the component mounts
    apiService.getAllExpenseDetails().then((data) => {
      console.log(data.data);
      setExpenseDetails(data.data);
    });
  }, []);

  return (
    <div>
      <h1>All Expense Details</h1>
      <ul>
        {expenseDetails.map((expenseDetails) => (
          <li key={expenseDetails.expenseId}>
            {JSON.stringify(expenseDetails)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseDetailsList;
