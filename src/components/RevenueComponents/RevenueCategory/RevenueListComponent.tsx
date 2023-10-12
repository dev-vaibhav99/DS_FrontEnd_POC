// ItemList.tsx
import React, { useEffect, useState } from "react";
import apiService from "../../../services/RevenueService/revenue.service";

interface Item {
  id: number;
  name: string;
  // Add other properties here
}

const RevenueListComponent: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    // Fetch items from the API when the component mounts
    apiService.getAllRevenueCategories().then((data) => {
      console.log(data.data);
      setItems(data.data);
    });
  }, []);

  return (
    <div>
      <h1>Item List</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RevenueListComponent;
