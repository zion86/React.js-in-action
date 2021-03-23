import { useState, useEffect, useCallback } from 'react';

// functional component
const App = () => {

  // useState
  const [colored, setColored] = useState(false);
  const [count, setCount] = useState(1);

  const style = {
    color: colored ? 'tomato' : 'black'
  };

  // useCallback work with all callback function inside useCallback(() => {  }, [deps])
  // generateItemsFromAPI = useCallback(() => { });
  const generateItemsFromAPI = useCallback(() => {
    return new Array(count).fill('').map((_, i) => `Element: ${i + 1}`);
  }, [count]);

  return (
    <>
      <h1 style={style}>Counter: {count}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>Add</button>
      <button onClick={() => setColored(prev => !prev)}>Change color</button>

      <ItemsList getItems={generateItemsFromAPI} />
    </>
  )
}

export default App;


// ItemsList Component
const ItemsList = ({ getItems }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const newItems = getItems();

    setItems(newItems);

    console.log('render');
  }, [getItems]);

  return (
    <ul>
      {items.map(i => <li key={i}>{i}</li>)}
    </ul>
  )
};