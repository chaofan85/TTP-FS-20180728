import React, { Component } from "react";
import { connect } from "react-redux";
import "./portfolio.css";

class StockItem extends Component {
  render() {
    return (
      <tr className="stock-item">
        <td className={`list-symbol ${this.props.color}`}>
          {this.props.symbol}
        </td>
        <td className="list-company">{this.props.companyName}</td>
        <td className={`list-latest ${this.props.color}`}>
          ${this.props.latestPrice}
        </td>
        <td className="list-quantity">{this.props.quantity}</td>
        <td className="list-investent">${this.props.totalInvestment}</td>

        <td className="list-current">${this.props.currentValue}</td>
      </tr>
    );
  }
}

export default StockItem;
