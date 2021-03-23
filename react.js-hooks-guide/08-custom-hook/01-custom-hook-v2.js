import React, { useState, useEffect } from 'react';

// custom Hook
function useLogger(value) {
  useEffect(() => {
    console.log('Value changed: ', value);
  }, [value]);
};

// custom Hook
function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  const onChange = ({ target }) => setValue(target.value);

  const clear = () => setValue('');

  return {
    bind: {
      value,
      onChange,
    },
    value,
    clear,
  }
};


// functional component
const App = () => {

  const input = useInput('');
  // const lastName = useInput('');

  // use custon hook
  useLogger(input.value);

  return (
    <div>

      {/* V1 */}
      {/* <input type="text" value={input.value} onChange={input.onChange} /> */}

      {/* V2 */}
      <input type="text" {...input.bind} />
      {/* <input type="text" {...lastName} /> */}

      <button onClick={() => input.clear()}>Clear</button>

      <br />

      <h2>{input.value}</h2>
    </div>
  )
}

export default App;