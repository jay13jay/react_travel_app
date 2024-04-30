
function Stats({ items }) {
    const packed = items.filter(item => item.packed === true);
    console.log(packed);
    const percentPacked = (packed.length / items.length) * 100;
    return (
        <footer className="stats">
            <em>you have { items.length } items on your list, with { percentPacked ? percentPacked.toFixed(0) : 0 }% packed</em>
        </footer>
    )
}

export default Stats;