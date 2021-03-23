import { useState } from 'react';

// functional component
function App() {
	
	// initial react.js state
	const [counter, setCounter] = useState(0);
	// counter = state value
	// setCounter() = function to change the state value
	// useState(0) = initial state value
	
	// function to update the state (method for setState())
	const increment = () => {
    setCounter(counter + 1); 			// setCounter() is async function
    // setCounter(counter + 1); 	// setCounter() is async function
  };
	
	return (
		<div>
			<h1>counter: ${ counter }</h1>
			<button onClick={ increment }>Change counter</button>
		</div>
	)
}