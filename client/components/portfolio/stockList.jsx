import React, { Component } from "react";
import { connect } from "react-redux";
import { getStocks } from "../../actions/stockActions";
import "./portfolio.css";

class StockList extends Component {
  componentDidMount() {}

  render() {
    return <div className="stock-list">lalala</div>;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getStocks: id => dispatch(getStocks(id))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(StockList);
