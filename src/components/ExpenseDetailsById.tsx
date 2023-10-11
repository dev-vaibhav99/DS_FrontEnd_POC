import React, { useEffect, useState } from "react";
import apiService from "../services/revenue.service";

interface ExpenseDetails {
  expenseId: number;
  revenueCategoryId: number;
  amount: number;
  mentorId: number;
  remark: string;
}

const ExpenseDetailsById: React.FC = () => {
  const [expenseDetails, setExpenseDetails] = useState<ExpenseDetails[]>([]);

  useEffect(() => {
    // Fetch items from the API when the component mounts
    apiService.getExpenseDetailsById(1).then((data) => {
      console.log(data.data);
      setExpenseDetails(data.data);
    });
  }, []);

  return (
    <div>
      <h1>Expense Details of id 1</h1>
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

export default ExpenseDetailsById;
