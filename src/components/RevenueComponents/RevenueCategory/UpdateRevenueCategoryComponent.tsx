import React, { useState, useEffect, FormEvent } from "react";
import { useParams } from "react-router-dom"; // Assuming you're using React Router
import revenueService from "../../../services/revenue.service";

// interface RouteParams {
//   id: string;
// }

interface RevenueCategory {
  id: number;
  name: string;
}

const UpdateRevenueCategoryComponent: React.FC = () => {
  const { id } = useParams<string>();
  const [categoryName, setCategoryName] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Fetch the existing category data from the API based on the ID
    setIsLoading(true);
    revenueService
      .getRevenueCategoryById(String(id))
      .then((response) => {
        setCategoryName(response.data.name);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("API Error:", error.response.data);
        setIsLoading(false);
      });
  }, [id]);

  const handleCategoryNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryName(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Create a FormData object to send the updated category data to the API
    const formData = new FormData();
    formData.append("name", categoryName);
    let revenueCategory: RevenueCategory = {
      id: parseInt(String(id)),
      name: categoryName,
    };
    try {
      // Send the updated category data to the API
      revenueService.updateRevenueCategory(String(id), revenueCategory);
      // Handle successful update, e.g., redirect to a different page
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Update Revenue Category</h2>
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
          <button type="submit">Update Category</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateRevenueCategoryComponent;
