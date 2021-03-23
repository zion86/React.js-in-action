import { useState, useEffect, useRef } from 'react';

// functional component
const App = () => {

  // useState
  const [value, setValue] = useState('');

  // useRef 
  // is Object with current value
  // save State and not invoke render Component
  const renderCount = useRef(1);      // return Object { current: 1 }
  const inputRef = useRef(null);      // return Object { current: null }
  const prevValue = useRef('');       // return Object { current: '' }

  // useEffect
  useEffect(() => {
    renderCount.current++;
  });

  // bind State value with prevValue ref
  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  const focus = () => inputRef.current.focus();

  return (
    <div>
      <h1>Page render count: {renderCount.current}</h1>

      <input
        type="text"
        placeholder='onChange'
        onChange={e => setValue(e.target.value)}
        value={value}
      />
      Output: <span>{value}</span>

      <br />

      {/* bind inputRef with input */}
      <input type="text" ref={inputRef} placeholder='onRef' />
      Output: <span>{prevValue.current}</span>

      <br />

      <button onClick={focus}>focus</button>

    </div >
  )
}

export default App;