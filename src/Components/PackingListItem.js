
function PackingListItem({ item, onDeleteItem, onPackItem }) {
    return (
        <li key={item.key}>
            <input 
                type="checkbox" 
                checked={item.packed} 
                value={item.packed}
                onChange={() => onPackItem(item.id)}/>
            <span style={item.packed ? {
                textDecoration: 'line-through'} : {}}>
                {item.quantity} {item.description}
            </span>
            <button onClick={() => onDeleteItem(item.id)}>❌</button>
        </li>
    )
}

export default PackingListItem;