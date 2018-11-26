import React, { Component } from "react";
import { connect } from "react-redux";
import StockItem from "./stockItem";
import { getStocks } from "../../actions/stockActions";
import "./portfolio.css";

class StockList extends Component {
  render() {
    console.log(this.props);
    let open, latest, currentValue, color;
    let records = Object.values(this.props.stocks).map(stock => {
      if (this.props.stockInfo && this.props.stockInfo[stock.symbol]) {
        let data = this.props.stockInfo[stock.symbol];
        open = data.open;
        latest = data.latestPrice;
        currentValue = (stock.total_quantity * latest).toFixed(2);
        if (latest > open) {
          color = "green";
        } else if (latest === open) {
          color = "gray";
        } else {
          color = "red";
        }
      }

      return (
        <StockItem
          symbol={stock.symbol}
          companyName={stock.company_name}
          quantity={stock.total_quantity}
          totalInvestment={stock.total_investment}
          latestPrice={latest}
          currentValue={currentValue}
          color={color}
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
              <th>Latest Price</th>
              <th>Current Value</th>
            </tr>
          </thead>
          <tbody>{records}</tbody>
        </table>
      </div>
    );
  }
}

export default StockList;
