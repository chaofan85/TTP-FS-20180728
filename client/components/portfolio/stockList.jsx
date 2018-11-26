import React, { Component } from "react";
import { connect } from "react-redux";
import StockItem from "./stockItem";
import { getStocks } from "../../actions/stockActions";
import "./portfolio.css";

class StockList extends Component {
  render() {
    let records = Object.values(this.props.stocks).map(stock => {
      return (
        <StockItem
          symbol={stock.symbol}
          companyName={stock.company_name}
          quantity={stock.total_quantity}
          totalInvestment={stock.total_investment}
          key={stock.id}
        />
      );
    });
    return (
      <div className="stock-list">
        <table>
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Company Name</th>
              <th>Total Quantity</th>
              <th>Total Investment</th>
            </tr>
          </thead>
          <tbody>{records}</tbody>
        </table>
      </div>
    );
  }
}

export default StockList;
