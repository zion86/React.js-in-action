import { useState } from 'react';

// functional component
function App() {

  const [state, setState] = useState({
    title: 'Counter',
    date: Date.now(),
  });

  // v1
  const updateState = () => setState(prev => ({
    ...prev,
    title: 'New title',
  }));

  // v2
  // const updateState = () => setState(prev => {
  //   return {
  //     ...prev,
  //     title: 'New title',
  //   }
  // });

  return (
    <div>
      <pre>
        {JSON.stringify(state, null, 2)}
      </pre>

      <button onClick={updateState}>Change title</button>
    </div>
  )
}

export default App;