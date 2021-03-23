import { useState, useEffect } from 'react';

// functional component
const App = () => {

  // useState
  const [type, setType] = useState('users');

  console.log('Component render');

  // useEffect
  useEffect(() => {
    console.log(`useEffect render ${type}`); // works only when changes state
  });

  return (
    <div>
      <h1>Resourse: {type}</h1>

      <button onClick={() => setType('users')}>Users</button>
      <button onClick={() => setType('todos')}>Todos</button>
      <button onClick={() => setType('posts')}>Posts</button>
    </div>
  )
}

export default App;