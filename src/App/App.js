import "./App.css";
import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Overview from "../Components/Overview/Overview";
import BudgetPage from "../Components/BudgetPage/BudgetPage";
import NavBar from "../Components/NavBar/NavBar";
import SavingsPage from "../Components/SavingsPage/SavingsPage";
import TransactionItem from "../Components/TransactionItem/TransactionItem";
import TransactionsList from "../Components/TransactionsList/TransactionsList";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/overview">
          <Overview />
        </Route>
        <Route path="/BudgetPage">
          <BudgetPage />
        </Route>
        <Route path="/SavingsPage">
          <SavingsPage />
        </Route>
        <Route path="/TransactionItem">
          <TransactionItem />
        </Route>
        <Route path="/TransactionsList">
          <TransactionsList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
