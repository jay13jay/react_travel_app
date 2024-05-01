
function Stats({ items }) {
    if (!items.length)
        return (
            <p className="stats">
                <em>No items on your list 👀</em>
            </p>
        );

    const packed = items.filter(item => item.packed);
    const percentPacked = (packed.length / items.length) * 100;
    
    return (
        <footer className="stats">
            { percentPacked === 100 ? <p>All your items are packed! 🎉</p> :
                <em>you have { items.length } items on your list, with {packed.length} packed ({ percentPacked ? percentPacked.toFixed(0) : 0 }%)</em>
            }
        </footer>
    )
}

export default Stats;