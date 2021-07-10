import React, { useContext } from "react";
import { context } from "../globalState/AppState";
function IncomeExpense() {
  const { transactions } = useContext(context);

  const amounts = transactions.map((x) => x.amount);

  const pos = () => {
    const sum = amounts
      .filter((x) => x > 0)
      .reduce((prev, curr) => prev + curr);
    return formatter(sum);
  };
  const neg = () => {
    const sum = amounts
      .filter((x) => x < 0)
      .reduce((prev, curr) => prev + curr);
    return formatter(sum);
  };

  const formatter = (amount) => {
    return (amount = amount > 0 ? `$${amount}` : `-$${Math.abs(amount)}`);
  };

  return (
    <div className="IncomeExpense">
      <div className="IncomeExpenseContainer">
        <div className="Income tb">
          <div className="pb10">INCOME</div>
          <div className="success">{pos()}</div>
        </div>
        <div className="sideBorder"></div>
        <div className="Expense tb">
          <div className="pb10">EXPENSE</div>
          <div className="danger">{neg()}</div>
        </div>
      </div>
    </div>
  );
}

export default IncomeExpense;
