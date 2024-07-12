import { useState } from "react";

export default function Form({ onHandelAdd }) {
  const [description, setDescription] = useState("");
  const [numItem, setNumItem] = useState(1);

  function handelSubmit(e) {
    e.preventDefault();
    const newItem = {
      id: Date.now(),
      description: description,
      quantity: numItem,
      packed: false,
    };
    onHandelAdd(newItem);
    setDescription("");
    setNumItem(1);
  }
  return (
    <form className="add-form" onSubmit={handelSubmit}>
      <h3>What do you need for your trip</h3>
      <select
        value={numItem}
        onChange={(e) => {
          setNumItem(+e.target.value); // because it return a string
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num, i) => (
          <option key={i} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        required
        type="text"
        placeholder="item..."
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button>ADD</button>
    </form>
  );
}
