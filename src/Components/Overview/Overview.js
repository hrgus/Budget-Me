import React, { useState, useEffect } from "react";
// import TransactionsList from "../TransactionsList/TransactionsList";

function Overview() {
  const [totalIncome, setTotalIncome] = useState([]);

  // fetches
  useEffect(() => {
    // returns total expenses. Adds each expense.amount
    let expenses = fetch("http://localhost:3000/expenses")
      .then((resp) => resp.json())
      .then((respObj) => {
        // console.log(respObj);
        let expenseAmount = respObj.reduce((aExpense, bExpense) => {
          return aExpense.amount + bExpense.amount;
        });
        // console.log(expenseAmount);
        return expenseAmount;
      });
    // returns total income. Adds each income.amount
    let incomes = fetch("http://localhost:3000/income")
      .then((resp) => resp.json())
      .then((respObj) => {
        // console.log(respObj);
        let incomeAmount = respObj.reduce((aIncome, bIncome) => {
          return aIncome.amount + bIncome.amount;
        });
        // console.log(incomeAmount);
        return incomeAmount;
      });
    // awaits for the results of each fetch then subtract the total expenses from the total income
    const incomeExpenses = async () => {
      const a = await incomes;
      const b = await expenses;
      setTotalIncome(a - b);
    };
    return incomeExpenses;
  }, []);

  return (
    <div>
      <h1> Total Left To Budget </h1>
      <h2> {totalIncome} </h2>
    </div>
  );
}

export default Overview;
