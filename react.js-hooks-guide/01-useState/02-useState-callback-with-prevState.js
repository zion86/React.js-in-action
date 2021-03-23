import { useState } from 'react';

// functional component
function App() {
	
  // initial react.js state
  const [counter, setCounter] = useState(0);
  // counter = state value
  // setCounter() = function to change the state value, 
  // useState(0) = initial state value

  // function to update the state (method for setState())
  const increment = () => {

    // useState have callback function for using prevState
    setCounter((prevCounter) => {
      console.log('init state: ', prevCounter);
      prevCounter += 1;
      console.log('updated state: ', prevCounter);
      return prevCounter;
    });

    setCounter(prev => prev += 1);
  }

  return (
    <div>
      <h1>counter: {counter}</h1>
      <button onClick={increment}>Change counter</button>
    </div>
  )
}

export default App;