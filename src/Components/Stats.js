
function Stats({ items }) {
    return (
        <footer className="stats">
            <em>you have { items.length } items on your list</em>
        </footer>
    )
}

export default Stats;