import React, { Component } from "react";
import UiSwitch from "../other/uiSwitch";
import HistoryItem from "./historyItem";
import { connect } from "react-redux";
import { getTransactions } from "../../actions/transactionActions";
import "./transaction.css";

class TransactionHistory extends Component {
  componentDidMount() {
    this.props.getTransactions(this.props.currentUser.id);
  }

  render() {
    let records = Object.values(this.props.transactions).map(tran => {
      return (
        <HistoryItem
          key={tran.id}
          symbol={tran.symbol}
          purchaseDate={new Date(tran.created_at).toLocaleDateString()}
          purchaseTime={new Date(tran.created_at).toLocaleTimeString()}
          quantity={tran.quantity}
          purchasePrice={tran.purchase_price}
          totalPrice={tran.total_price}
        />
      );
    });
    return (
      <div className="history-main">
        <UiSwitch />
        <div className="record-list">
          <h3>Purchase History</h3>
          <table>
            <thead>
              <tr>
                <th>Purchase Date</th>
                <th>Purchase Time</th>
                <th>Symbol</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>{records}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    transactions: state.transactions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTransactions: id => dispatch(getTransactions(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionHistory);
