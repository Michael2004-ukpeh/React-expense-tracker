import React from 'react'
import Header from "./components/Header"
import Balance from './components/Balance';
import ExpenseIncome from './components/ExpenseIncome';
import History from './components/History';
import AddTransaction from './components/AddTransaction';
import './App.css';
import GlobalProvider from './context/GlobalState';

function App() {
  return (
  <>
 
       <GlobalProvider>
       <Balance/>
       <ExpenseIncome/>
       <History/>
       <AddTransaction/>
       </GlobalProvider>
      
  </>
  );
}

export default App;
