import React, { useState, FormEvent } from "react";
import revenueService from "../services/revenue.service";

interface AddRevenueCategory {
  name: string;
}
const AddRevenueCategoryComponent: React.FC = () => {
  const [categoryName, setCategoryName] = useState<string>("");

  const handleCategoryNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryName(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Create a FormData object to send the category name to the API
    const formData = new FormData();
    formData.append("name", categoryName);
    let revenueCategory: AddRevenueCategory = {
      name: categoryName,
    };
    try {
      // Replace 'your-api-endpoint' with the actual API endpoint
      //   const response = await axios.post("your-api-endpoint", formData);

      revenueService.createRevenueCategory(revenueCategory);
      // Handle the API response as needed
      //   console.log("API Response:", response.data);

      // Clear the form input
      setCategoryName("");
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  return (
    <div>
      <h2>Add Revenue Category</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="categoryName">Category Name:</label>
          <input
            type="text"
            id="categoryName"
            name="categoryName"
            value={categoryName}
            onChange={handleCategoryNameChange}
            required
          />
        </div>
        <div>
          <button type="submit">Create Category</button>
        </div>
      </form>
    </div>
  );
};

export default AddRevenueCategoryComponent;
