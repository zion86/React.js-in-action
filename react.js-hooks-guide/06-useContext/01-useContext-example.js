import React, { useState, useContext } from 'react';


// 1 create and export Context
const AlertContext = React.createContext();


// functional component
const App = () => {

  // useState
  // 3 create State for Context
  const [alert, setAlert] = useState(false);

  // 7 create function toggleAlert
  const toggleAlert = () => setAlert(prev => !prev);

  return (
    // 2 Create Context wrapper with Provider <AlertContext.Provider>
    // 4 sent State to Context <AlertContext.Provider value={alert}>
    <AlertContext.Provider value={alert}>
      <div className={'container'}>
        <Alert />
        <Main toggle={toggleAlert} />
      </div>
    </AlertContext.Provider>
  )
}

export default App;


// Main.js
// Main Component
const Main = ({ toggle }) => {

  return (
    <>
      <h1>Hello Context</h1>
      <button onClick={toggle}>Show alert</button>
    </>
  )
};


// Alert.js
// Alert Component
// 5 import { AlertContext }
const Alert = () => {
  // 6 invoke useContext()
  const alertCont = useContext(AlertContext);
  console.log('alertCont: ', alertCont);

  if (!alertCont) return null;

  return (
    <div style={{ backgroundColor: 'tomato', padding: '10px' }}>
      Alert message
    </div>
  )
};