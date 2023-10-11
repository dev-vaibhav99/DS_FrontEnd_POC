// AddIncomeDetailsComponent.tsx
import React, { useState, useEffect } from "react";
import { CourseFees } from "../models/CourseFees";
import revenueService from "../services/revenue.service";

const AddIncomeDetailsComponent: React.FC = () => {
  const [formData, setFormData] = useState<CourseFees>({
    userId: 1,
    studentId: 1,
    revenueCategoryId: 1,
    amount: 0,
    totalFees: 0,
    paidFees: 0,
    balanceFees: 0,
  });

  //   useEffect(() => {
  //     // Fetch user data from localStorage and update the userId and studentId in the formData.
  //     const userData = JSON.parse(localStorage.getItem("userData") || "{}");
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       userId: userData.userId,
  //       studentId: userData.studentId,
  //     }));
  //   }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: parseFloat(value),
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    revenueService
      .addCourseFeesIncomeDetails(formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="hidden" name="userId" value={formData.userId} />
      <input type="hidden" name="studentId" value={formData.studentId} />

      <label>
        Amount:
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Total Fees:
        <input
          type="number"
          name="totalFees"
          value={formData.totalFees}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Paid Fees:
        <input
          type="number"
          name="paidFees"
          value={formData.paidFees}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Balance Fees:
        <input
          type="number"
          name="balanceFees"
          value={formData.balanceFees}
          onChange={handleInputChange}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default AddIncomeDetailsComponent;
