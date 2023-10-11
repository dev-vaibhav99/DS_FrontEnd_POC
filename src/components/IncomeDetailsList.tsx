import React, { useEffect, useState } from "react";
import apiService from "../services/revenue.service";

interface IncomeDetails {
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

const IncomeDetailsList: React.FC = () => {
  const [incomeDetails, setIncomeDetails] = useState<IncomeDetails[]>([]);

  useEffect(() => {
    // Fetch items from the API when the component mounts
    apiService.getAllIncomeDetails().then((data) => {
      console.log(data.data);
      setIncomeDetails(data.data);
    });
  }, []);

  return (
    <div>
      <h1>All Income details</h1>
      <ul>
        {incomeDetails.map((incomeDetail) => (
          <li key={incomeDetail.income_id}>{JSON.stringify(incomeDetail)}</li>
        ))}
      </ul>
    </div>
  );
};

export default IncomeDetailsList;
