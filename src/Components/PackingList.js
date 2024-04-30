import PackingListItem from "./PackingListItem";

function PackingList({ items, onDeleteItem, onPackItem }) {
    return (
        <div className="list">
            <ul>
                {items.map((item) => (
                    <PackingListItem 
                        key={item.id} 
                        item={item} 
                        onDeleteItem={onDeleteItem}
                        onPackItem={onPackItem }/>
                ))}
            </ul>
        </div>
    )
}

export default PackingList;