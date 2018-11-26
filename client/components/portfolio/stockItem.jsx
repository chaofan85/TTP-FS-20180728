import React, { Component } from "react";
import { connect } from "react-redux";
import "./portfolio.css";

class StockItem extends Component {
  render() {
    // console.log(this.props);
    return (
      <tr className="stock-item">
        <td className="list-symbol">{this.props.symbol}</td>
        <td className="list-company">{this.props.companyName}</td>
        <td className="list-quantity">{this.props.quantity}</td>
        <td className="list-investent">{this.props.totalInvestment}</td>
        <td className="list-open">{this.props.openPrice}</td>
        <td className="list-latest">{this.props.latestPrice}</td>
      </tr>
    );
  }
}

export default StockItem;
