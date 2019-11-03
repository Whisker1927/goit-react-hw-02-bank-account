/* eslint-disable */
import React from 'react';
import T from 'prop-types';
import styles from '../../styles/index.module.css';

const TransactionHistory = ({ transactions }) => {
  const renderTransactions = () => {
    return transactions.map(transaction => {
      const { id, date, type, amount } = transaction;
      return (
        <tr key={id}>
          <td>{type}</td>
          <td>{amount}$</td>
          <td>{date}</td>
        </tr>
      );
    });
  };

  return (
    <div>
      <table className={styles.history}>
        <thead>
          <tr>
            <th>Transaction</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>{renderTransactions()}</tbody>
      </table>
    </div>
  );
};
TransactionHistory.propTypes = {
  transactions: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      type: T.string.isRequired,
      amount: T.number.isRequired,
      date: T.string.isRequired,
    }),
  ).isRequired,
};
export default TransactionHistory;
