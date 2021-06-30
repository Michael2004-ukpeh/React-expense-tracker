import React from 'react'
import Header from "./components/Header"
import Balance from './components/Balance';
import ExpenseIncome from './components/ExpenseIncome';
import History from './components/History';
import AddTransaction from './components/AddTransaction';
import './App.css';
import GlobalProvider , {GlobalContext}from './context/GlobalState';
import {BrowserRouter as Switch, Router, Route} from 'react-router-dom'
function App() {
  return (
    <>
    <Router>
       <GlobalProvider>
       <div className = "wrapper">
       <Header />
       <Balance/>
       <ExpenseIncome/>
       <History/>
       <AddTransaction/>
       </div>
       </GlobalProvider>
       </Router>
    </>
  );
}

export default App;
