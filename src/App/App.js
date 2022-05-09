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
  const [incomeList, setIncomeList] = useState([]);
  const [expenseList, setExpenseList] = useState([]);

  // this useEffect fetches the expenses and the income object from db.json
  useEffect(() => {
    // returns total expenses. Adds each expense.amount
    fetch("http://localhost:3000/expenses")
      .then((resp) => resp.json())
      .then((respObj) => {
        // console.log(respObj);
        setExpenseList(respObj);
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
      });

    // awaits for the results of each fetch then subtract the total expenses from the total income
  }, []);

  useEffect(() => {
    let incomeAmount = incomeList.reduce((acc, aIncome) => {
      return parseInt(aIncome.amount) + acc;
    }, 0);
    setIncomes(incomeAmount);
  }, [incomeList]);

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
          <BudgetPage
            setIncomeList={setIncomeList}
            incomeList={incomeList}
            expenseList={expenseList}
          />
        </Route>
        <Route path="/savings">
          <SavingsPage incomeList={incomeList} expenseList={expenseList} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
