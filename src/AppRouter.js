import React from 'react'
import Header from './components/Header'
import App from './App'
import GlobalProvider from './context/GlobalState'
import TransactionDetails from './components/TransactionDetails'
import {BrowserRouter as Switch, Router, Route} from 'react-router-dom'
 

const AppRouter = () => {
    return (
        <GlobalProvider>
        <Router>
          <Header/>
         <Switch>
            <Route exact path = '/'>
                <App/>
            </Route>
           <Route exact path = '/transaction/:id'  children = {<TransactionDetails/>}>
               </Route>
          

         
           </Switch>
    
        </Router>
        </GlobalProvider>
    )
}

export default AppRouter
