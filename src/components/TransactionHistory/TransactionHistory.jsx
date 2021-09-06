import PropTypes from 'prop-types';
import {
  TransactionHistoryContainer,
  TableHead,
  TableData,
} from './TransactionHistory.styled';

export function TransactionHistory({ items }) {
  return (
    <TransactionHistoryContainer>
      <thead>
        <tr>
          <TableHead>Type</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Currency</TableHead>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <TableData>{item.type}</TableData>
            <TableData>{item.amount}</TableData>
            <TableData>{item.currency}</TableData>
          </tr>
        ))}
      </tbody>
    </TransactionHistoryContainer>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};
