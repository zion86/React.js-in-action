import { useAlert } from './AlertContext';

const Alert = () => {
  const { visible, hide, text } = useAlert();

  if (!visible) return null;

  return (
    <div
      style={{ backgroundColor: 'tomato', padding: '10px' }}
      onClick={hide}>
      {text}
    </div>
  )
};

export default Alert;