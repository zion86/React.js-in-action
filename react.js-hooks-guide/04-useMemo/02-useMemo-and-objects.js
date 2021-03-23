import { useState, useEffect, useMemo } from 'react';

function complexCompute(num) {
  console.log('complexCompute');
  let i = 0;
  while (i < 1000000000) i++;
  return num * 2;
}

// functional component
const App = () => {

  // useState
  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false);

  // caching Object style for state colored
  const style = useMemo(() => {
    return {
      color: colored ? 'tomato' : 'black'
    }
  }, [colored]);

  // use function complexCompute() only with number State
  const computed = useMemo(() => {
    return complexCompute(number);
  }, [number]);

  // after click Component create new Reference to Object
  // that why we must use useMemo() for Object style
  useEffect(() => {
    console.log('Styles changed');
  }, [style]);

  return (
    <>
      <h1 style={style}>{computed}</h1>
      <button onClick={() => setNumber(prev => prev + 1)}>Add</button>
      <button onClick={() => setNumber(prev => prev - 1)}>Delete</button>
      <button onClick={() => setColored(prev => !prev)}>Change color</button>
    </>
  )
}

export default App;