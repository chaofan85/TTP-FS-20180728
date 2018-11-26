import React, { Component } from "react";
import { connect } from "react-redux";
import StockList from "./stockList";
import StockPurchase from "./stockPurchase";
import { getStocks } from "../../actions/stockActions";
import "./portfolio.css";

class Portfolio extends Component {
  componentDidMount() {
    let id = this.props.currentUser.id;
    this.props.getStocks(id);
  }

  render() {
    return (
      <main className="portfolio-area">
        <StockList
          stocks={this.props.stocks}
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
