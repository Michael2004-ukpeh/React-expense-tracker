import React from 'react'
import Header from "./components/Header"
import Balance from './components/Balance';
import ExpenseIncome from './components/ExpenseIncome';
import History from './components/History';
import AddTransaction from './components/AddTransaction';
import './App.css';
import GlobalProvider , {GlobalContext}from './context/GlobalState';

function App() {
  return (
  <>
 
       <GlobalProvider>
       <div className = "wrapper">
       <Header />
       <Balance/>
       <ExpenseIncome/>
       <History/>
       <AddTransaction/>
       </div>
       </GlobalProvider>
      
  </>
  );
}

export default App;
