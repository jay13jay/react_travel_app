import PackingList from "./PackingList";
import { useState } from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Phone", quantity: 1, packed: true },
// ];

function Form() {
    const [items, setItems] = useState([]);
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);
    
    function handleSubmit(e) {
        e.preventDefault();
        console.log(e)
        if (!description) return;
        const newItem = { 
            id: items.length + 1, 
            description, 
            quantity, 
            packed: false };
        setItems([...items, newItem]);
        setDescription("");
        setQuantity(1);
    }

    return (
        <>
            <form className="add-form" onSubmit={(e) => 
                handleSubmit(e)}>
                <h3>What do you need for your trip? 🤔</h3>
                <select 
                    name="item"
                    id="item"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value)) }>
                    {Array.from({ length: 20 }, (_, i) => i + 1).map
                    ((num) => (
                        <option key={num} value={num}>
                            {num}
                        </option>
                    ))}
                </select>
                <input type='text' 
                    placeholder='Items...' 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} />
                <button>Add</button>
            </form>
            <PackingList items={items}/>
        </>
    )
}

export default Form;