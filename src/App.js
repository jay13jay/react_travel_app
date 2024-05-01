import Logo from './Components/Logo';
import Form from './Components/Form';
import PackingList from './Components/PackingList';
import Stats from './Components/Stats';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems([...items, item]);
  }
  function handleDeleteItem(id) {
    const newItems = items.filter(item => item.id !== id);
    setItems(newItems);
  }

  function handleClearAll() {
    const confirmed = window.confirm('Are you sure you want to delete all items?');
    if (!confirmed) return;
    setItems([]);
  }

  function handlePackItem(id) {
    const newItems = items.map(item => item.id === id ? 
      {...item, packed: !item.packed} : item);
      setItems(newItems);
  }

  return (
    <>
      <Logo />
      <Form onAddItems={handleAddItems} items={items}/>
      <PackingList 
        items={items} 
        onDeleteItem={handleDeleteItem}
        onClearAll={handleClearAll}
        onPackItem={handlePackItem} />
      <Stats items={items}/>
    </>
  );
}

export default App;
