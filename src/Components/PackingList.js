import PackingListItem from "./PackingListItem";

function PackingList(props) {
    return (
        <div className="list">
            <ul>
                {props.items.map((item) => (
                    <PackingListItem key={item.id} item={item} />
                ))}
            </ul>
        </div>
    )
}

export default PackingList;