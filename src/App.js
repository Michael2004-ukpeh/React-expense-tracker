import React from 'react'
import Header from "./components/Header"
import Balance from './components/Balance';
import ExpenseIncome from './components/ExpenseIncome';
import History from './components/History';
import AddTransaction from './components/AddTransaction';
import './App.css';

function App() {
  return (
  <>
 
    
       <div className = "wrapper">
       <Balance/>
       <ExpenseIncome/>
       <History/>
       <AddTransaction/>
       </div>
      
      
  </>
  );
}

export default App;
