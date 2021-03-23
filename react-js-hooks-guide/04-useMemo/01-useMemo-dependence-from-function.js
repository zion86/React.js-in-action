import { useState, useMemo } from 'react';

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

  const style = {
    color: colored ? 'tomato' : 'black'
  };

  // use function complexCompute() only with number State
	// useMemo work only with returned value complexCompute(number)
	// computed = complexCompute(number);
  const computed = useMemo(() => {
    return complexCompute(number);
  }, [number]);

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