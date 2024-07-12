import { useState } from "react";
import Logo from "./logo";
import Form from "./form";
import PackingList from "./packinglist";
import Stats from "./stats";

export default function App() {
  const [items, setItem] = useState([]);

  function handelAddItem(item) {
    setItem((items) => [...items, item]); //it not allowed to mutate the original array
  }

  function handleToggleItem(id) {
    setItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handelDeleteItem(key) {
    setItem((items) => items.filter((item) => item.id !== key));
  }

  function handelClear() {
    const confirme = window.confirm(
      "are you sure you want to delete all items !"
    );
    if (confirme) setItem([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onHandelAdd={handelAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handelDeleteItem}
        onToggleItem={handleToggleItem}
        onClear={handelClear}
      />
      <Stats items={items} />
    </div>
  );
}
