/* eslint react/prop-types: 0 */
import React from 'react';
import T from 'prop-types';
import styles from '../../styles/index.module.css';

const Balance = ({ balance, transactions }) => {
  const renderAmount = () => {
    return transactions.map(transaction => {
      const { type, amount } = transaction;
      return type === 'Deposit' ? (
        <>
          <span className={styles.span}>&#x2191;{amount}$</span>
        </>
      ) : (
        <>
          <span className={styles.span}>&#x2193;{amount}$</span>
        </>
      );
    });
  };
  return (
    <section className={styles.balance}>
      <>{renderAmount()}</>
      <span className={styles.span}>Balance: {balance}$</span>
    </section>
  );
};

Balance.propTypes = {
  balance: T.number.isRequired,
  transactions: T.arrayOf(
    T.shape({
      id: T.string,
      type: T.string,
      amount: T.number.isRequired,
      date: T.string,
    }),
  ),
};
export default Balance;
