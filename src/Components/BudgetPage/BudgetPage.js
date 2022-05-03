import React from "react";
import "./budgetPage.css";

function BudgetPage({ incomeList, expenseList }) {
  function incomeListJSX() {
    return incomeList.map((income) => {
      return <li key={income.id}>{income.amount}</li>;
    });
  }

  function expenseListJSX() {
    return expenseList.map((expense) => {
      return <li key={expense.id}>{expense.amount}</li>;
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
          <ol id="incomeExpenseOL">{incomeListJSX()}</ol>
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
          <ol id="incomeExpenseOL">{expenseListJSX()}</ol>
        </div>
      </div>
    </div>
  );
}

export default BudgetPage;
