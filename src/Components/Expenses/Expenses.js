import React, { useState } from "react";
import "./expenses.css";

function Expenses({ expenseList }) {
  const [newExpense, setNewExpense] = useState({
    description: "",
    transactionType: "expense",
    amount: "",
    date: "",
    category: "",
  });

  function expenseListJSX() {
    return expenseList.map((expense) => {
      return (
        <li key={expense.id}>
          {expense.amount} | {expense.date} | {expense.category}
        </li>
      );
    });
  }

  const handleNewExpense = (e) => {
    const newExpenseObj = { ...newExpense };
    newExpenseObj[e.target.id] = e.target.value;
    setNewExpense(newExpenseObj);
    console.log(newExpenseObj);
  };

  const handleExpenseSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application-json",
      },
      body: JSON.stringify({
        description: newExpense.description,
        transactionType: "income",
        amount: newExpense.amount,
        date: newExpense.date,
        category: newExpense.category,
      }),
    });
  };

  return (
    <div>
      <h1> BudgetPage </h1>
      <div className="incomeListDiv"></div>
      <div className="expenseListDiv">
        <div>
          <h3> Expenses </h3>
          <form onSubmit={(e) => handleExpenseSubmit(e)}>
            <input // input for the description
              className="incomeExpenseInputs"
              onChange={(e) => handleNewExpense(e)}
              id="description"
              value={newExpense.description}
              placeholder="Your New Income Here..."
              type="text"
            />
            <input // input for the date
              className="incomeExpenseDateInputs"
              onChange={(e) => handleNewExpense(e)}
              id="date"
              value={newExpense.date}
              placeholder="date"
              type="date"
            />
            <input // input for the amount
              className="incomeExpenseInputs"
              onChange={(e) => handleNewExpense(e)}
              id="amount"
              value={newExpense.amount}
              placeholder="amount"
              type="number"
            />
            <select id="selectIncomeExpenseType">
              <option id="bills & utilities" value="bills & utilities">
                bills & utilities
              </option>
              <option id="doodad & unlisted" value="doodad & unlisted">
                doodad & unlisted
              </option>
            </select>

            <button
              className="incomeExpenseInputButtons"
              // onClick={handleAddListItem}
            >
              +
            </button>
          </form>
          <ol id="incomeExpenseOL">{expenseListJSX()}</ol>
        </div>
      </div>
    </div>
  );
}

export default Expenses;
