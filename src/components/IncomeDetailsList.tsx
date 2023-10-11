import React, { useEffect, useState } from "react";
import apiService from "../services/revenue.service";

interface Item {
  income_id: number;
  student_id: number;
  total_fees: number;
  balance_fees: number;
  paid_fees: number;
  transaction_id: number;
  amount: number;
  user_id: number;
  revenue_category_id: number;
}

const RevenueListComponent: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    // Fetch items from the API when the component mounts
    apiService.getAllIncomeDetails().then((data) => {
      console.log(data.data);
      setItems(data.data);
    });
  }, []);

  return (
    <div>
      <h1>Income details</h1>
      <ul>
        {items.map((item) => (
          <li key={item.income_id}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
};

export default RevenueListComponent;
