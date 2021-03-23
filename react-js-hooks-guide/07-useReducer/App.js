import React from 'react';
import { AlertProvider } from './Alert/AlertContext';
import Alert from './Alert/Alert';
import Main from './Main/Main';

// functional component
const App = () => {

  return (
    <AlertProvider>
      <div className={'container'}>
        <Alert />
        <Main />
      </div>
    </AlertProvider>
  )
}

export default App;