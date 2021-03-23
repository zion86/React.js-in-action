import PropTypes from 'prop-types';

// default props values using pure JS
const Transaction = ({ label = '', value = 0 }) => {

  return (
    <li>
      <p>Label: {label}</p>
      <p>Value: {value}</p>
    </li>
  )
};

// React.js PropTypes

Transaction.propTypes = {
  transaction: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.number,
  }),
};

// defaultProps description

// Transaction.defaultProps = {
//   transaction: {
//     label: '',
//     value: 0,
//   }
// };

export default Transaction;