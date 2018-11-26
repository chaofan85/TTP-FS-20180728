import React, { Component } from "react";
import { connect } from "react-redux";
import StockList from "./stockList";
import StockPurchase from "./stockPurchase";
import UiSwitch from "../other/uiSwitch";
import { getStocks } from "../../actions/stockActions";
import axios from "axios";
import "./portfolio.css";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = { stockInfo: null };

    this.getStockInfo = this.getStockInfo.bind(this);
  }

  componentDidMount() {
    let id = this.props.currentUser.id;
    let self = this;
    this.props.getStocks(id).then(() => {
      this.getStockInfo();
    });
  }

  getStockInfo() {
    let keys = Object.keys(this.props.stocks);
    let symbols = keys.length ? Object.keys(this.props.stocks) : [];
    let stocks = {};
    let URL = "https://api.iextrading.com/1.0/stock/";
    for (let i = 0; i < symbols.length; i++) {
      axios
        .get(`${URL}${symbols[i]}/quote`)
        .then(payload => {
          stocks[symbols[i]] = payload.data;
        })
        .then(() => {
          this.setState({ stockInfo: stocks });
        });
    }
  }

  render() {
    return (
      <main className="portfolio-area">
        <UiSwitch />
        <StockList
          stocks={this.props.stocks}
          stockInfo={this.state.stockInfo}
          currentUser={this.props.currentUser}
        />
        <div className="vertical-line" />
        <StockPurchase currentUser={this.props.currentUser} />
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    stocks: state.stocks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getStocks: id => dispatch(getStocks(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Portfolio);
