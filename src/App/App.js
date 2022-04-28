import "./App.css";
import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Overview from "../Components/Overview/Overview";
import BudgetPage from "../Components/BudgetPage/BudgetPage";
import NavBar from "../Components/NavBar/NavBar";
import SavingsPage from "../Components/SavingsPage/SavingsPage";
// import TransactionItem from "../Components/TransactionItem/TransactionItem";
// import TransactionsList from "../Components/TransactionsList/TransactionsList";

function App() {
  const [expenses, setExpenses] = useState(0);
  const [incomes, setIncomes] = useState(0);
  // const [totalIncome, setTotalIncome] = useState([]);
  const [incomeList, setIncomeList] = useState([]);

  // fetches
  useEffect(() => {
    // returns total expenses. Adds each expense.amount
    fetch("http://localhost:3000/expenses")
      .then((resp) => resp.json())
      .then((respObj) => {
        // console.log(respObj);
        let expenseAmount = respObj.reduce((aExpense, bExpense) => {
          return aExpense.amount + bExpense.amount;
        });
        // console.log(expenseAmount);
        setExpenses(expenseAmount);
      });
    // returns total income. Adds each income.amount
    fetch("http://localhost:3000/income")
      .then((resp) => resp.json())
      .then((respObj) => {
        setIncomeList(respObj);
        let incomeAmount = respObj.reduce((aIncome, bIncome) => {
          return aIncome.amount + bIncome.amount;
        });
        // console.log(incomeAmount);
        setIncomes(incomeAmount);
      });
    console.log(expenses);
    // awaits for the results of each fetch then subtract the total expenses from the total income
  }, []);

  console.log(incomeList);

  const totalIncome = incomes - expenses;

  return (
    <div id="appDivID">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Overview totalIncomes={totalIncome} />
        </Route>
        <Route path="/overview">
          <Overview totalIncomes={totalIncome} />
        </Route>
        <Route path="/budget">
          <BudgetPage incomeList={incomeList} />
        </Route>
        <Route path="/savings">
          <SavingsPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
