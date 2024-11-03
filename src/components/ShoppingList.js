import React, { useState } from "react";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [filter, setFilter] = useState("All");

  
  const handleCategoryChange = (selectedCategory) => {
    setFilter(selectedCategory);
  };

  
  const filteredItems = items.filter((item) => {
    return filter === "All" || item.category === filter;
  });

  return (
    <div className="ShoppingList">
      <Filter onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}


export default ShoppingList;
