/* eslint-disable */
import React from 'react';
import T from 'prop-types';
import styles from '../../styles/index.module.css';

const Balance = ({ balance, income, expenses }) => {
  return (
    <section className={styles.balance}>
      <span className={styles.span}>&#x2191;{income}$</span>
      <span className={styles.span}>&#x2193;{expenses}$</span>
      <span className={styles.span}>Balance: {balance}$</span>
    </section>
  );
};
Balance.propTypes = {
  balance: T.number.isRequired,
  income: T.number,
  expenses: T.number,
};

export default Balance;
