import { useState, useEffect } from 'react';

// functional component
const App = () => {

  // useState
  const [type, setType] = useState('users');
  const [data, setData] = useState([]);

  console.log('Component render');

  // useEffect
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setData(json));

    console.log(`useEffect render ${type}`);
  }, [type]);
  // dependence only from state [type] as second parameter
  // render only when state [type] will be change

  return (
    <div>
      <h1>Resourse: {type}</h1>

      <button onClick={() => setType('users')}>Users</button>
      <button onClick={() => setType('todos')}>Todos</button>
      <button onClick={() => setType('posts')}>Posts</button>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default App;