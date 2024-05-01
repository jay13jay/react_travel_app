import { useState } from "react";

function Form({ onAddItems, items }) {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);
    
    function handleSubmit(e) {
        e.preventDefault();
        if (!description) return;
        const newItem = { 
            id: items.length + 1, 
            description, 
            quantity, 
            packed: false };
        onAddItems(newItem);
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
        </>
    )
}

export default Form;