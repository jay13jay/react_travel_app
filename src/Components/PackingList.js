import PackingListItem from "./PackingListItem";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 2, description: "Phone", quantity: 1, packed: true },
];

function PackingList() {
    return (
        <div className="list">
            <ul>
                {initialItems.map((item) => (
                    <PackingListItem item={item} />
                ))}
            </ul>
        </div>
    )
}

export default PackingList;