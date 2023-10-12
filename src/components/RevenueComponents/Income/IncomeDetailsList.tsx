import React, { useEffect, useState } from "react";
import apiService from "../../../services/RevenueService/revenue.service";

interface IncomeDetails {
  incomeId: number;
  studentId: number;
  totalFees: number;
  balanceFees: number;
  paidFees: number;
  transactionId: number;
  amount: number;
  userId: number;
  revenueCategoryId: number;
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
          <li key={incomeDetail.incomeId}>{JSON.stringify(incomeDetail)}</li>
        ))}
      </ul>
    </div>
  );
};

export default IncomeDetailsList;
