import React from "react";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";
// import TransactionsList from "../TransactionsList/TransactionsList";

function Overview() {
  fetch("http://localhost:3000/income")
    .then((resp) => resp.json())
    .then((incomeData) =>
      console.log(incomeData).then((err) => console.error(err))
    );

  return (
    <div>
      <h1> Overview </h1>
      {/* <TransactionsList paychecks={paychecks} /> */}
    </div>
  );
}

export default Overview;
