import PackingListItem from "./PackingListItem";
import { useState } from "react";

function PackingList({ items, onDeleteItem, onClearAll, onPackItem }) {
    const [sortBy, setSortBy] = useState('input');

    let sortedItems;

    if (sortBy === 'input') {
        sortedItems = items;
    } else if (sortBy === 'description') {
        sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
    } else if (sortBy === 'packed') {
        sortedItems = items.slice().sort((a, b) => Number(a.packed - b.packed))

    }

    return (
        <div className="list">
            <ul>
                {sortedItems.map((item) => (
                    <PackingListItem 
                        key={item.id} 
                        item={item} 
                        onDeleteItem={onDeleteItem}
                        onPackItem={onPackItem }/>
                ))}
            </ul>

            {items.length === 0 ? null : 
                <div className="actions">
                    <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                        <option value='input'>Sort by Input Order</option>
                        <option value='description'>Sort by Description</option>
                        <option value='packed'>Sort by Packed Status</option>
                    </select>

                    <button onClick={() => onClearAll()}>Delete All</button>
                </div>
            }
        </div>
    )
}

export default PackingList;