import React from "react";

function TransactionsList({ paychecks }) {
  const newPaychecks = paychecks.map((paycheck) => {
    return <li>{paycheck[0]}</li>;
  });

  return (
    <div>
      <ol>{newPaychecks}</ol>
    </div>
  );
}

export default TransactionsList;
