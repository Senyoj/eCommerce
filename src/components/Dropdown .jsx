import React, { useState } from "react";

const Dropdown = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [
    "Sneakers",
    "Men clothes ",
    "Ladies",
    "casio watches",
    "Win Kitchen",
    "Stores",
  ];

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="dropdown">
      <select
        value={selectedCategory}
        onChange={handleCategoryChange}
        className="lg:w-40 h-10 px-2 py-2 outline-none border-2 border-less rounded-xl"
      >
        <option value="" disabled selected className="text-less ">
          Select Category
        </option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
