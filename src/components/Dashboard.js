import React, { useEffect, useState } from "react";
import axios from "axios";
import CategoryCard from "./CategoryCard";
import AddCategoryForm from "./AddCategoryForm";
import "./Dashboard.css";

const Dashboard = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    const token = localStorage.getItem("token");
    const res = await axios.get("http://localhost:5000/api/categories", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setCategories(res.data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="dashboard">
      <h2>Category Dashboard</h2>
      <AddCategoryForm onCategoryAdded={fetchCategories} />
      <div className="category-grid">
        {categories.map((cat) => (
          <CategoryCard key={cat._id} category={cat} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
