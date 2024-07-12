export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        Start adding items to your packing list 🚀
      </footer>
    );
  const listItems = items.length;
  const packed = items.filter((item) => item.packed).length;
  // const percentage = listItems ? Math.round((100 * packed) / listItems) : 0;
  const percentage = Math.round((100 * packed) / listItems);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "Ready to go 🚀"
          : `👜 You have ${listItems} itemes on your list,and you already packed 
        ${packed} (${percentage})%`}
      </em>
    </footer>
  );
}
