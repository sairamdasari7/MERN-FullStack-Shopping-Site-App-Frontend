import React, { useState } from "react";
import axios from "axios";
import "./AddCategoryForm.css";

const AddCategoryForm = ({ onCategoryAdded }) => {
  const [name, setName] = useState("");
  const [itemCount, setItemCount] = useState(0);
  const [image, setImage] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("itemCount", itemCount);
    formData.append("image", image);

    await axios.post("http://localhost:5000/api/categories", formData, {
      headers: { Authorization: `Bearer ${token}` },
    });

    setName("");
    setItemCount(0);
    setImage(null);
    onCategoryAdded();
  };

  return (
    <form onSubmit={submit}>
      <input placeholder="Category Name" onChange={(e) => setName(e.target.value)} />
      <input type="number" placeholder="Item Count" onChange={(e) => setItemCount(e.target.value)} />
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button type="submit">+ Add Category</button>
    </form>
  );
};

export default AddCategoryForm;
