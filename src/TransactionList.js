import React, { useContext } from 'react';
import { Transaction } from './Transaction';
import { GlobalContext } from './GlobalState';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      {transactions.length === 0 && <p>No transaction history available.</p>} {/* Display message if no transactions */}
      <ul className="list">
        {transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  )
}
