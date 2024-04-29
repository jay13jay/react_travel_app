
function PackingListItem({item}) {
    return (
        <li key={item.id}>
            <span style={item.packed ? {
                textDecoration: 'line-through'} : {}}>
                {item.quantity} {item.description}
            </span>
            <button>❌</button>
        </li>
    )
}

export default PackingListItem;