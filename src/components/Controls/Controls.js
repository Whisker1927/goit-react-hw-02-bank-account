/* eslint-disable */
import React, { Component } from 'react';
import T from 'prop-types';
import styles from '../../styles/index.module.css';

export default class Controls extends Component {
  static propTypes = {
    onDeposit: T.func.isRequired,
    onWithdraw: T.func.isRequired,
  };

  state = {
    amount: '',
  };

  handleInputChange = e => {
    this.setState({
      amount: e.target.value,
    });
  };

  handleFormInput = e => {
    e.preventDefault();
  };

  handleDepositButton = () => {
    this.props.onDeposit(Number(this.state.amount));
    this.setState({ amount: '' });
  };

  handleWithdrawButton = () => {
    this.props.onWithdraw(Number(this.state.amount));
    this.setState({ amount: '' });
  };

  render() {
    const { amount } = this.state;
    return (
      <section className={styles.section}>
        <input type="number" name="amount" className={styles.input}></input>
        <button type="button" className={styles.button}>
          Deposit
        </button>
        <button type="button" className={styles.button}>
          Withdraw
        </button>
      </section>
    );
  }
}
