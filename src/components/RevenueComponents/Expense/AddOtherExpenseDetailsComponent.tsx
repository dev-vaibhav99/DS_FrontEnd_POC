import React, { useState, FormEvent, useEffect } from "react";
import revenueService from "../../../services/RevenueService/revenue.service";
import { OtherExpense } from "../../../models/OtherExpense";
import { RevenueCategory } from "../../../models/RevenueCategory";

const AddOtherExpenseDetailsComponent: React.FC = () => {
  const [expenseData, setExpenseData] = useState<OtherExpense>({
    revenueCategoryId: 0,
    amount: 0,
    remark: "",
  });

  const [dropdownOptions, setDropdownOptions] = useState<RevenueCategory[]>([]);

  useEffect(() => {
    // Fetch dropdown options from the API
    fetchDropdownOptions()
      .then((options) => setDropdownOptions(options))
      .catch((error) => console.error("API Error:", error));
  }, []);

  const fetchDropdownOptions = async () => {
    try {
      // Call your API to get revenue categories with id and name
      const categories = await revenueService.getAllRevenueCategories();
      return categories !== null ? categories.data : categories;
    } catch (error) {
      throw error;
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      // Call the addOtherExpense API with the form data
      await revenueService.addOtherExpense(expenseData);

      // Handle successful update, e.g., redirect to a different page
      console.log("Expense added successfully");

      // Clear the form inputs
      setExpenseData({
        revenueCategoryId: 0,
        amount: 0,
        remark: "",
      });
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  return (
    <div>
      <h2>Add Other Expense Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="revenueCategoryId">Select a revenue category:</label>
          <select
            id="revenueCategoryId"
            name="revenueCategoryId"
            value={expenseData.revenueCategoryId}
            onChange={(e) => {
              console.log(e.target.value);
              setExpenseData({
                ...expenseData,
                revenueCategoryId: parseInt(e.target.value),
              });
            }}
            required
          >
            <option value="0">Select a revenue category</option>
            {dropdownOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
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
          <label htmlFor="remark">Remarks:</label>
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

export default AddOtherExpenseDetailsComponent;
