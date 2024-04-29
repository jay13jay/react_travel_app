
function PackingListItem(props) {
    return (
        <li key={props.item.key}>
            <span style={props.item.packed ? {
                textDecoration: 'line-through'} : {}}>
                {props.item.quantity} {props.item.description}
            </span>
            <button>❌</button>
        </li>
    )
}

export default PackingListItem;