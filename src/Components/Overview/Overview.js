import React from "react";
// import TransactionsList from "../TransactionsList/TransactionsList";
// import BudgetPage from "../BudgetPage/BudgetPage";

function Overview({ totalIncome }) {
  return (
    <div>
      <h1> Total Left To Budget </h1>
      <h2> {totalIncome} </h2>
    </div>
  );
}

export default Overview;
