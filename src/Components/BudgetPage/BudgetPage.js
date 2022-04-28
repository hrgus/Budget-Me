import React, { useState, useEffect } from "react";
import "./index.css";

function BudgetPage() {
  // const [incomeList, setIncomeList] = useState({
  //   id: 0,
  //   description: "paycheck",
  //   transactionType: "income",
  //   amount: 100,
  //   category: "job",
  // });

  function handleAddListItem() {
    return <li>hi</li>;
  }

  return (
    <div id="budgetPageID">
      <h1> BudgetPage </h1>
      <div className="incomeListDiv">
        <div>
          <h3> Income </h3>
          <form>
            <input
              className="incomeExpenseInputs"
              placeholder="Your New Income Here..."
            />
            <input
              className="incomeExpenseDateInputs"
              placeholder="mm/dd/yyyy"
            />
            <button
              className="incomeExpenseInputButtons"
              onClick={handleAddListItem}
            >
              +
            </button>
          </form>
          <ol id="incomeOL">{handleAddListItem}</ol>
        </div>
      </div>
      <div className="expenseListDiv">
        <div>
          <h3> Expenses </h3>
          <form>
            <input
              className="incomeExpenseInputs"
              placeholder="Your New Expense Here..."
            />
            <input
              className="incomeExpenseDateInputs"
              placeholder="mm/dd/yyyy"
            />
            <button
              className="incomeExpenseInputButtons"
              onClick={handleAddListItem}
            >
              {" "}
              +{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BudgetPage;
