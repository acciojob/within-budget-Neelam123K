
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [budget, setBudget] = useState("");
  const items = [
    {name: "Apple", price: 20},
    {name: "Banana", price: 10},
    {name: "Neutella", price: 30},
    {name: "Razor", price: 5},
    {name: "CornFlakes", price: 15},
    {name: "Sound Bar", price: 50},
    {name: "Iphone", price: 80}
  ]
  return (
    <div>
        {/* Do not remove the main div */}
        <h2>Enter your budget to check available items:</h2>
        <input type="number" value={budget} placeholder="Enter your budget" id="budget" onChange={(e) => setBudget(e.target.value)} />
        <h3>Items you can buy are in green color</h3>
        <tbody>
          {items.map((item, index) => (
            <tr key={index} style={{color: item.price <= budget ? "green" : "red"}}>
              <td>{item.name}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
    </div>
  )
}

export default App
