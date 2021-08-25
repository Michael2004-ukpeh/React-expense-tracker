import React from "react";
import Header from "./components/Header";
import App from "./App";
import GlobalProvider from "./context/GlobalState";
import TransactionDetails from "./components/TransactionDetails";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const AppRouter = () => {
 return (
  <GlobalProvider>
   <BrowserRouter>
   <div className = "wrapper">
    <Header />
    <Switch>
     <Route exact path="/">
      <App />
     </Route>
     <Route exact path="/transaction/:id">
      <TransactionDetails />
     </Route>
    </Switch>
    </div>
   </BrowserRouter>
   
  </GlobalProvider>
 );
};

export default AppRouter;
