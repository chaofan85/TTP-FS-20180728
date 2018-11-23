import React, { Component } from "react";
import { connect } from "react-redux";
import "./portfolio.css";

class StockPurchase extends Component {
  render() {
    return (
      <div className="stock-purchase">
        <div className="balance">balance: </div>
        <div className="symbol-search">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Enter the Ticker Symbol"
              value={this.state.body}
              onChange={this.handleChange()}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default StockPurchase;
