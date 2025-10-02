import React, { useState } from "react";

const BudgetTable = () => {
  const [budget, setBudget] = useState(0);

  // Sample data
  const items = [
    { name: "Apple", price: 20 },
    { name: "Banana", price: 10 },
    { name: "Neutella", price: 30 },
    { name: "Razor", price: 5 },
    { name: "CornFlakes", price: 15 },
    { name: "Sound Bar", price: 50 },
    { name: "Iphone", price: 80 },
  ];

  return (
    <div>
      <h3>Enter your budget to check available items:</h3>
      <input
        type="number"
        placeholder="Enter budget"
        id="budget-input"
        onChange={(e) => setBudget(Number(e.target.value))}
      />  
        <thead>
            <h4>Items you can buy are in Green color</h4>
    </thead>

      <table cellPadding="6" style={{ borderCollapse: "collapse" }}>
        <tbody>
          {items.map((item, index) => (
            <tr
              key={index}
              style={{ color: item.price > budget ? "red" : "green" }}
            >
              <td>{item.name}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BudgetTable;
