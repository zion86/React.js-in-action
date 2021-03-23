import { useAlert } from './AlertContext';

const Alert = () => {
  const { visible, toggle } = useAlert();

  if (!visible) return null;

  return (
    <div style={{ backgroundColor: 'tomato', padding: '10px' }} onClick={toggle}>
      Alert message
    </div>
  )
};

export default Alert;