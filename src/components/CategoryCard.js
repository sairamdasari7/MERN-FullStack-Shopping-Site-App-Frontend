import React from "react";
import "./CategoryCard.css";

const CategoryCard = ({ category }) => (
  <div className="category-card">
    <img src={`http://localhost:5000/${category.image}`} alt={category.name} />
    <h3>{category.name}</h3>
    <p>{category.itemCount} items</p>
  </div>
);

export default CategoryCard;
