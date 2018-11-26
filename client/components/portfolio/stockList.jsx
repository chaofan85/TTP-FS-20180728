import React, { Component } from "react";
import { connect } from "react-redux";
import StockItem from "./stockItem";
import { getStocks } from "../../actions/stockActions";
import "./portfolio.css";

class StockList extends Component {
  render() {
    // console.log("lalala", this.props.stockInfo);
    let records = Object.values(this.props.stocks).map(stock => {
      let open, latest;
      if (this.props.stockInfo && this.props.stockInfo[stock.symbol]) {
        let data = this.props.stockInfo[stock.symbol];
        open = data.open.toFixed(2);
        latest = data.latestPrice.toFixed(2);
      }

      console.log(open);
      return (
        <StockItem
          symbol={stock.symbol}
          companyName={stock.company_name}
          quantity={stock.total_quantity}
          totalInvestment={stock.total_investment}
          openPrice={open}
          latestPrice={latest}
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
              <th>Open Price</th>
              <th>Latest Price</th>
            </tr>
          </thead>
          <tbody>{records}</tbody>
        </table>
      </div>
    );
  }
}

export default StockList;
