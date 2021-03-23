import { useAlert } from '../Alert/AlertContext';

const Main = () => {
  const { toggle } = useAlert();

  return (
    <>
      <h1>Hello Context</h1>
      <button onClick={toggle}>Show alert</button>
    </>
  )
};

export default Main;