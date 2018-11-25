import React, { Component } from "react";
import { connect } from "react-redux";
import { getStocks } from "../../actions/stockActions";
import "./portfolio.css";

class StockList extends Component {
  componentDidMount() {
    let id = this.props.currentUser.id;
    this.props.getStocks(id);
  }

  render() {
    console.log(this.props.stocks);
    return <div className="stock-list">lalala</div>;
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    currentUser: state.session.currentUser,
    stocks: state.stocks
  };
};

function mapDispatchToProps(dispatch) {
  return {
    getStocks: id => dispatch(getStocks(id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StockList);
