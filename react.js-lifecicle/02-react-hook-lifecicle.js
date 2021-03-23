import React, { useState, useEffect } from 'react';

const App = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    console.log('Update');

    const tickID = setInterval(() => tick(), 1000);

    return () => {
      console.log('Clear');

      clearInterval(tickID);
    }
  });

  const tick = () => {
    setTime(new Date().toLocaleTimeString());
  };

  return (
    <>
      <h2>{time}</h2>
    </>
  )
};

export default App;