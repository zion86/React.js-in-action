import { useState } from 'react';

// function with initial state data
function computeInitialState() {
  console.log('Some calculatiinos...');
  return Math.trunc(Math.random() * 20);
}

// functional component
function App() {
  // initial react.js state using computeInitialState() function

  // only for initial state from another function (init once)
  // useState(() => computeInitialState());
  const [counter, setCounter] = useState(() => {
    return computeInitialState();
  });

  // function to update the state (method for setState())
  const increment = () => setCounter(prevCounter => prevCounter + 1);

  return (
    <div>
      <h1>counter: {counter}</h1>
      <button onClick={increment}>Change counter</button>
    </div>
  )
}

export default App;