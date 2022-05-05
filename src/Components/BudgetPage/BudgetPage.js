import React, { useState } from "react";
import Incomes from "../Incomes/Incomes";
import Expenses from "../Expenses/Expenses";
import "./budgetPage.css";

function BudgetPage({ setIncomeList, incomeList, expenseList }) {
  const [transactionType, setTransactionType] = useState("All");

  return (
    <div id="budgetPageID">
      <Incomes setIncomeList={setIncomeList} incomeList={incomeList} />
      <Expenses expenseList={expenseList} />
    </div>
  );
}

export default BudgetPage;
