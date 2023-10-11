import React, { useEffect, useState } from "react";
import apiService from "../services/revenue.service";
import { useParams } from "react-router-dom";

interface ExpenseDetails {
  expenseId: number;
  revenueCategoryId: number;
  amount: number;
  mentorId: number;
  remark: string;
}

const ExpenseDetailsById: React.FC = () => {
  const [expenseDetails, setExpenseDetails] = useState<ExpenseDetails[]>([]);
  const { id } = useParams<string>();

  useEffect(() => {
    // Fetch items from the API when the component mounts
    apiService
      .getExpenseDetailsById(String(id))
      .then((data) => {
        console.log(data.data);
        setExpenseDetails(data.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, [id]);

  return (
    <div>
      <h1>Expense Details of id {id}</h1>
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
