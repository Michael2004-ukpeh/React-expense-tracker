import React from 'react'
import Header from "./components/Header"
import Balance from './components/Balance';
import ExpenseIncome from './components/ExpenseIncome';
import History from './components/History';
import AddTransaction from './components/AddTransaction';
import './App.css';
<<<<<<< HEAD:src/App.js
=======
import GlobalProvider from './context/GlobalState';
>>>>>>> correction:client/src/App.js

function App() {
  return (
  <>
 
<<<<<<< HEAD:src/App.js
    
       <div className = "wrapper">
=======
       <GlobalProvider>
>>>>>>> correction:client/src/App.js
       <Balance/>
       <ExpenseIncome/>
       <History/>
       <AddTransaction/>
<<<<<<< HEAD:src/App.js
       </div>
      
=======
       </GlobalProvider>
>>>>>>> correction:client/src/App.js
      
  </>
  );
}

export default App;
