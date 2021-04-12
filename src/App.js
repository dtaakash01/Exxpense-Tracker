import React from 'react';
import './App.css';
import { Header } from './components/header';
import { Balance } from './components/balance';
import { Expenses } from './components/expenses'
import { TransactionList } from './components/history'
import { AddTransaction } from './components/AddTransaction'

import { GlobalProvider } from './context/GlobalState'


function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <Expenses />
        <TransactionList />
        <AddTransaction />
      </div>
      
    </GlobalProvider>
  )
}

export default App;
