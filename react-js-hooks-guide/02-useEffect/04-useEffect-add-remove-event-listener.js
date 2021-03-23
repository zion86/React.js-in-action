import { useState, useEffect } from 'react';

// functional component
const App = () => {

  // useState
  const [type, setType] = useState('users');
  const [data, setData] = useState([]);
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  console.log('Component render');

  // function for event listener
  const mouseMoveHandler = event => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  // useEffect
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setData(json));

    console.log(`useEffect render ${type}`);

    return () => {
      console.log(`Clean ${type}`);
    };

  }, [type]);
  // dependence only from state [type] as second parameter
  // render only when state [type] will be change

  useEffect(() => {
    console.log('ComponentDidMount emulation.');

    // add event listener
    window.addEventListener('mousemove', mouseMoveHandler);

    // remove event listener
    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
    }

  }, []);

  return (
    <div>
      <h1>Resourse: {type}</h1>

      <button onClick={() => setType('users')}>Users</button>
      <button onClick={() => setType('todos')}>Todos</button>
      <button onClick={() => setType('posts')}>Posts</button>

      <pre>{JSON.stringify(position, null, 2)}</pre>
    </div>
  )
}

export default App;