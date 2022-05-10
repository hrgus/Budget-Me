import React from "react";
import Incomes from "../Incomes/Incomes";
import Expenses from "../Expenses/Expenses";
import "./budgetPage.css";

function BudgetPage({
  setIncomeList,
  incomeList,
  expenseList,
  setExpenseList,
}) {
  return (
    <div id="budgetPageID">
      <h3>Budget Page</h3>
      <Incomes setIncomeList={setIncomeList} incomeList={incomeList} />
      <Expenses expenseList={expenseList} setExpenseList={setExpenseList} />
    </div>
  );
}

export default BudgetPage;
