import React, { useState, FormEvent } from "react";
import revenueService from "../../../services/RevenueService/revenue.service";
import { MentorSalaryExpense } from "../../../models/MentorSalaryExpense";

const AddMentorExpenseDetailsComponent: React.FC = () => {
  const [expenseData, setExpenseData] = useState<MentorSalaryExpense>({
    revenueCategoryId: 5,
    amount: 0,
    mentorId: 0,
    remark: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      // Call the addMentorFeesExpense API with the form data
      await revenueService.addMentorFeesExpense(expenseData);

      // Handle successful update, e.g., redirect to a different page
      console.log("Expense added successfully");

      // Clear the form inputs
      setExpenseData({
        revenueCategoryId: 5,
        amount: 0,
        mentorId: 0,
        remark: "",
      });
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  return (
    <div>
      <h2>Add Mentor Expense Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={expenseData.amount}
            onChange={(e) =>
              setExpenseData({ ...expenseData, amount: +e.target.value })
            }
            required
          />
        </div>
        <div>
          <label htmlFor="mentorId">Mentor ID:</label>
          <input
            type="number"
            id="mentorId"
            name="mentorId"
            value={expenseData.mentorId}
            onChange={(e) =>
              setExpenseData({ ...expenseData, mentorId: +e.target.value })
            }
            required
          />
        </div>
        <div>
          <label htmlFor="remark">Remark:</label>
          <textarea
            id="remark"
            name="remark"
            value={expenseData.remark}
            onChange={(e) =>
              setExpenseData({ ...expenseData, remark: e.target.value })
            }
            required
          />
        </div>
        <div>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default AddMentorExpenseDetailsComponent;
