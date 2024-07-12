import { useState } from "react";
import Item from "./item";

export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClear,
}) {
  const [orderby, setOrder] = useState("input");
  let orderdItems;
  if (orderby === "input") orderdItems = items;
  if (orderby === "description")
    orderdItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description)); //sorted alphabeticaly
  if (orderby === "packed")
    orderdItems = items.slice().sort((a, b) => +a.packed - +b.packed); //sorted alphabeticaly
  return (
    <div className="list">
      <ul>
        {orderdItems.map((itemObj) => (
          <Item
            item={itemObj}
            key={itemObj.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select onChange={(e) => setOrder(e.target.value)} value={orderby}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClear}>Clear Liste</button>
      </div>
    </div>
  );
}
