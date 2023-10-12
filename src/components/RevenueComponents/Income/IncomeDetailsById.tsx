import React, { useEffect, useState } from "react";
import apiService from "../../../services/revenue.service";
import { useParams } from "react-router-dom";

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

const IncomeDetailsById: React.FC = () => {
  const [incomeDetails, setIncomeDetails] = useState<IncomeDetails[]>([]);
  const { id } = useParams<string>();

  useEffect(() => {
    // Fetch items from the API when the component mounts
    apiService
      .getIncomeDetailsById(String(id))
      .then((data) => {
        console.log(data.data);
        setIncomeDetails(data.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, [id]);

  return (
    <div>
      <h1>Income details for id {id}</h1>
      <ul>
        {incomeDetails.map((incomeDetail) => (
          <li key={incomeDetail.incomeId}>{JSON.stringify(incomeDetail)}</li>
        ))}
      </ul>
    </div>
  );
};

export default IncomeDetailsById;
