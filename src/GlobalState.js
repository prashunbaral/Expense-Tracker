import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from './AppReducer';

//Initial state
const initialState = {
  transactions: JSON.parse(localStorage.getItem('transactions')) || [],
};

//Create context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(state.transactions)); // Save transactions to local storage
  }, [state.transactions]);

  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  function addTransaction(newTransaction) {
    const transactionWithDate = {
      ...newTransaction,
      date: new Date() // Add the current date and time
    };

    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transactionWithDate
    });
  }

  return (
    <GlobalContext.Provider value={{
      transactions: state.transactions,
      deleteTransaction,
      addTransaction
    }}>
      {children}
    </GlobalContext.Provider>
  );
}
