import React from "react";
import TransactionsList from "../TransactionsList/TransactionsList";
import ".../db.json"

function Overview() {
  return (
    <div>
      <h1> Overview </h1>
      <TransactionsList paycheck={}/>
    </div>
  );
}

export default Overview;
