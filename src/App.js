import './App.css';
import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Overview from './Components/Overview';
import BudgetPage from './Components/BudgetPage';
import NavBar from './Components/NavBar';
import SavingsPage from './Components/SavingsPage';
import TransactionItem from './Components/TransactionItem';
import TransactionsList from './Components/TransactionsList';

function App() {
  return (
    <Switch>
      <Route path="/overview">
        <Overview />
      </Route>
      <Route path="/BudgetPage">
        <BudgetPage />
      </Route>
      <Route path="/NavBar">
        <NavBar />
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
  );
}

export default App;

