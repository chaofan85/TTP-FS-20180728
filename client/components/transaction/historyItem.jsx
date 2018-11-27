import React, { Component } from "react";
import { connect } from "react-redux";
import "./transaction.css";

class HistoryItem extends Component {
  render() {
    return (
      <tr className="history-item">
        <td className="history-date">{this.props.purchaseDate}</td>
        <td className="history-time">{this.props.purchaseTime}</td>
        <td className="history-symbol">{this.props.symbol}</td>
        <td className="history-quantity">{this.props.quantity}</td>
        <td className="history-unit">{this.props.purchasePrice}</td>
        <td className="history-total">{this.props.totalPrice}</td>
      </tr>
    );
  }
}

export default HistoryItem;
