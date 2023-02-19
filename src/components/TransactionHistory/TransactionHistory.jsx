import PropTypes from 'prop-types';
import { Table, Tbody, Thead, Th, Td, Tr } from './TransactionHistory.styled';

export function TransactionHistory({ transactions }) {
  return (
    <>
      <Table>
        <Thead>
          <Tr>
            <Th>Type</Th>
            <Th>Amount</Th>
            <Th>Currency</Th>
          </Tr>
        </Thead>

        <Tbody>
          {transactions.map(({ id, type, amount, currency }) => (
            <Tr key={id}>
              <Td>{type}</Td>
              <Td>{amount}</Td>
              <Td>{currency}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
