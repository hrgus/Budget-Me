import React, { useState, useEffect } from "react";
import "./index.css";

function BudgetPage({ incomeList }) {
  // const [incomeList, setIncomeList] = useState({
  //   description: "paycheck 2",
  //   transactionType: "income",
  //   amount: 100,
  //   category: "job",
  // });

  function incomeListJSX() {
    return incomeList.map((income) => {
      return <li key={income.id}>{income.amount}</li>;
    });
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
              type="date"
              onChange={(e) => console.log(e.target.value)}
            />
            <button
              className="incomeExpenseInputButtons"
              // onClick={handleAddListItem}
            >
              +
            </button>
          </form>
          <ol id="incomeOL">{incomeListJSX()}</ol>
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
              type="date"
              onChange={(e) => console.log(e.target.value)}
            />
            <button
              className="incomeExpenseInputButtons"
              // onClick={handleAddListItem}
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
