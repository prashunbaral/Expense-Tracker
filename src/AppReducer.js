const appReducer = (state, action) => {
  switch(action.type) {
    case 'DELETE_TRANSACTION':
      const updatedTransactions = state.transactions.filter(transaction => transaction.id !== action.payload);
      localStorage.setItem('transactions', JSON.stringify(updatedTransactions)); // Save transactions to local storage
      return {
        ...state,
        transactions: updatedTransactions
      }
    case 'ADD_TRANSACTION':
      const newTransactions = [action.payload, ...state.transactions];
      localStorage.setItem('transactions', JSON.stringify(newTransactions)); // Save transactions to local storage
      return {
        ...state,
        transactions: newTransactions
      }
    default:
      return state;
  }
};

export default appReducer;
