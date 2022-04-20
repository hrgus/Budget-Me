import React from "react";
import TransactionsList from "../TransactionsList/TransactionsList";
import paychecks from "../db.json";

console.log(paychecks);

function Overview({ paychecks }) {
  return (
    <div>
      <h1> Overview </h1>
      {/* <TransactionsList paychecks={paychecks} /> */}
    </div>
  );
}

export default Overview;
