import { useAlert } from '../Alert/AlertContext';

const Main = () => {
  const { show } = useAlert();

  return (
    <>
      <h1>Hello Context</h1>
      <button onClick={() => show('Text from Main.js')}>Show alert</button>
    </>
  )
};

export default Main;