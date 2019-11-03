/* eslint-disable */
import React, { Component } from 'react';
import T from 'prop-types';
import uuidv1 from 'uuid/v1';
import { ToastContainer, toast, Slide } from 'react-toastify';
import Controls from '../Controls/Controls';
import Balance from '../Balance/Balance';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

export default class Dashboard extends Component {
  state = {
    transactions: [],
    balance: 0,
  };
  handleDeposit = amount => {
    if (amount <= 0) {
      this.notify('Введите сумму для проведения операции!');
      return;
    }
    this.setState(({ transactions, balance }) => {
      const newStateTransaction = {
        id: uuidv1(),
        type: 'deposit',
        amount,
        date: new Date().toLocaleString(),
      };
      return {
        transactions: [...transactions, newStateTransaction],
        balance: balance + amount,
      };
    });
  };
  handleWithdraw = amount => {
    if (amount <= 0) {
      this.notify('Введите сумму для проведения операции!');
      return;
    }
    if (this.state.balance - amount < 0) {
      this.notify('На счету недостаточно средств для проведения операции!');
      return;
    }
    this.setState(({ transactions, balance }) => {
      const newStateTransaction = {
        id: uuidv1(),
        type: 'withdrawal',
        amount,
        date: new Date().toLocaleString(),
      };
      return {
        transactions: [...transactions, newTransaction],
        balance: balance - amount,
      };
    });
  };
  totalTransfers = transactions => {
    return transactions.reduce(
      (acc, transaction) => {
        const income =
          transaction.type === 'Deposit'
            ? acc.income + transaction.amount
            : acc.income;
        const expenses =
          transaction.type === 'Withdrawal'
            ? acc.expenses + transaction.amount
            : acc.expenses;
        const balance = income - expenses;

        return {
          ...acc,
          income,
          expenses,
          balance,
        };
      },
      { income: 0, expenses: 0, balance: 0 },
    );
  };

  render() {
    const { transactions, balance } = this.state;
    const { income, expenses } = this.totalTransfers(transactions);
    return (
      <div className="dashboard">
        <Controls
          onDeposit={this.handleDeposit}
          onWithdraw={this.handleWithdraw}
        />
        <Balance balance={balance} income={income} expenses={expenses} />
        <TransactionHistory transactions={transactions} />
      </div>
    );
  }
}
