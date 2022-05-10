import React, { useEffect, useState } from "react";
import "./expenses.css";

function Expenses({ expenseList, setExpenseList }) {
  const [newExpense, setNewExpense] = useState({
    description: "",
    transactionType: "expense",
    amount: "",
    date: "",
    category: "",
  });

  useEffect(() => {
    expenseListJSX();
  }, [expenseList]);

  function expenseListJSX() {
    return expenseList.map((expense) => {
      return (
        <li key={expense.id}>
          {expense.description} | {expense.amount} | {expense.date} |{" "}
          {expense.category}{" "}
          <button onClick={() => handleDeleteExpense(expense.id)}>
            delete
          </button>
        </li>
      );
    });
  }

  const handleNewExpense = (e) => {
    const newExpenseObj = { ...newExpense };
    newExpenseObj[e.target.id] = e.target.value;
    setNewExpense(newExpenseObj);
  };

  const handleCategoryChange = (e) => {
    setNewExpense({ ...newExpense, category: e.target.value });
  };

  const handleDeleteExpense = (id) => {
    fetch(`http://localhost:3000/expenses/${id}`, {
      method: "DELETE",
    })
      .then((resp) =>
        resp.json().then((id) => {
          window.location.reload(false);
          console.log("You just deleted an expense:", id);
        })
      )
      .catch((error) => alert(error));
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
        transactionType: "expense",
        amount: newExpense.amount,
        date: newExpense.date,
        category: newExpense.category,
      }),
    })
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setExpenseList([...expenseList, data]);
        console.log(expenseList);
        setNewExpense({
          description: "",
          transactionType: "expense",
          amount: "",
          date: "",
          category: "",
        });
      })
      .catch((error) => alert(error));
  };

  return (
    <div>
      <h3> Expenses </h3>
      <form onSubmit={(e) => handleExpenseSubmit(e)}>
        <input // input for the description
          className="incomeExpenseInputs"
          onChange={(e) => handleNewExpense(e)}
          id="description"
          value={newExpense.description}
          placeholder="Your New Expense Here..."
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
        <select onChange={handleCategoryChange} id="selectIncomeExpenseType">
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
  );
}

export default Expenses;
