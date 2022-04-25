import React, { useState, useEffect } from "react";
// import TransactionsList from "../TransactionsList/TransactionsList";

function Overview() {
  const [totalIncome, setTotalIncome] = useState([]);

  // fetches
  useEffect(() => {
    fetch("http://localhost:3000/income")
      .then((resp) => resp.json())
      .then((respObj) => {
        let incomeAmount = respObj.reduce((aIncome, bIncome) => {
          return aIncome.amount + bIncome.amount;
        });
        setTotalIncome(incomeAmount);
      });
  }, []);

  return (
    <div>
      <h1> Total Income </h1>
      <h2> {totalIncome} </h2>
    </div>
  );
}

export default Overview;
