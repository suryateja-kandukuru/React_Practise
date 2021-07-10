import React, { useContext } from "react";
import { context } from "../globalState/AppState";
function History() {
  const { transactions } = useContext(context);

  function formatAmount(amount) {
    return Number(amount) > 0
      ? `+${Math.abs(amount)}`
      : `-${Math.abs(amount)}`;
  }

  return (
    <div className="History">
      <div className="mb10 history-container">History</div>
      <div className="history-card">
        {transactions.map((x) => (
        <div className="history-cards mb10" key={x.id}>
          <div className="left-card">
            <div className="itemName">{x.name}</div>
            <div className="itemMoney">{formatAmount(x.amount)}</div>
          </div>
          <div
            className={`right-card ${
              x.amount > 0 ? "bg-success" : "bg-danger"
            }`}
          ></div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default History;
