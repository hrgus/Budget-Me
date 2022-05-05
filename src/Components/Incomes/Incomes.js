import React, { useState } from "react";
import "./incomes.css";

function Incomes({ setIncomeList, incomeList }) {
  const [newIncome, setNewIncome] = useState({
    description: "",
    transactionType: "income",
    amount: "",
    date: "",
    category: "job",
  });

  function incomeListJSX() {
    return incomeList.map((income) => {
      return (
        <li key={income.id}>
          {income.amount} | {income.date} | {income.category}
        </li>
      );
    });
  }

  const handleNewIncome = (e) => {
    const newIncomeObj = { ...newIncome };
    newIncomeObj[e.target.id] = e.target.value;
    setNewIncome(newIncomeObj);
    console.log(newIncomeObj);
  };

  const handleIncomeSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/income", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description: newIncome.description,
        transactionType: "income",
        amount: newIncome.amount,
        date: newIncome.date,
        category: newIncome.category,
      }),
    })
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        console.log(data);
        setIncomeList([...incomeList, data]);
        setNewIncome({
          description: "",
          transactionType: "income",
          amount: "",
          date: "",
          category: "job",
        });
      });
  };

  return (
    <div id="budgetPageID">
      <h3> Income </h3>
      <form onSubmit={(e) => handleIncomeSubmit(e)}>
        <input // input for the description
          className="incomeExpenseInputs"
          onChange={(e) => handleNewIncome(e)}
          id="description"
          value={newIncome.description}
          placeholder="Your New Income Here..."
          type="text"
        />
        <input // input for the date
          className="incomeExpenseDateInputs"
          onChange={(e) => handleNewIncome(e)}
          id="date"
          value={newIncome.date}
          placeholder="date"
          type="date"
        />
        <input // input for the amount
          className="incomeExpenseInputs"
          onChange={(e) => handleNewIncome(e)}
          id="amount"
          value={newIncome.amount}
          placeholder="amount"
          type="number"
        />
        <select id="selectIncomeExpenseType">
          <option id="job" value="job">
            job
          </option>
          <option id="gifts & unlisted" value="gifts & unlisted">
            gifts & unlisted
          </option>
        </select>

        <button
          className="incomeExpenseInputButtons"
          // onClick={handleAddListItem}
        >
          +
        </button>
      </form>
      <ol id="incomeExpenseOL">{incomeListJSX()}</ol>
    </div>
  );
}

export default Incomes;
