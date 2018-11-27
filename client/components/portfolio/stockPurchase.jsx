import React, { Component } from "react";
import { connect } from "react-redux";
import {
  updateBalance,
  createStock,
  updateStock
} from "../../actions/stockActions";
import { createTransaction } from "../../actions/transactionActions";
import axios from "axios";
import merge from "lodash/merge";
import "./portfolio.css";

class StockPurchase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      symbol: "",
      stock: null,
      quantity: "",
      totalPrice: 0,
      modalSwitch: false,
      overPriced: false,
      showError: false,
      notFound: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.getStockInfo = this.getStockInfo.bind(this);
    this.purchaseStock = this.purchaseStock.bind(this);
    this.changeQuantity = this.changeQuantity.bind(this);
    this.changeModal = this.changeModal.bind(this);
    this.createNewStock = this.createNewStock.bind(this);
    this.updateOldStock = this.updateOldStock.bind(this);
    this.addRecord = this.addRecord.bind(this);
  }

  handleChange(e) {
    this.setState({ symbol: e.target.value });
  }

  getStockInfo(e) {
    e.preventDefault();
    this.setState({ showForm: false });
    axios({
      method: "get",
      url: `https://api.iextrading.com/1.0/stock/${this.state.symbol}/quote`
    })
      .then(({ data }) => {
        this.setState({
          stock: data,
          symbol: "",
          quantity: "",
          modalSwitch: false,
          overPriced: false,
          showError: false,
          notFound: false
        });
      })
      .catch(() => {
        this.setState({ notFound: true });
      });
  }

  changeModal(e) {
    e.preventDefault();
    if (!this.state.overPriced) {
      this.setState({ modalSwitch: !this.state.modalSwitch }, () => {
        document.body.style.overflow = this.state.changeModal
          ? "hidden"
          : "visible";
      });
    } else {
      this.setState({ showError: true });
    }
  }

  purchaseStock() {
    let id = this.props.currentUser.id;
    let newBalance = Number(
      (this.props.currentUser.balance - this.state.totalPrice).toFixed(2)
    );
    this.props
      .updateBalance(id, newBalance)
      .then(() => {
        if (!this.props.stocks[this.state.stock.symbol]) {
          this.createNewStock();
        } else {
          this.updateOldStock();
        }

        document.body.style.overflow = "visible";
      })
      .then(() => {
        this.addRecord();
        this.setState({
          modalSwitch: false,
          quantity: "",
          totalPrice: 0
        });
      });
  }

  createNewStock() {
    let stockData = {};
    stockData.symbol = this.state.stock.symbol;
    stockData.company_name = this.state.stock.companyName;
    stockData.total_quantity = Number(this.state.quantity);
    stockData.total_investment = this.state.totalPrice;

    this.props.createStock(stockData);
  }

  updateOldStock() {
    let oldData = this.props.stocks[this.state.stock.symbol];
    let stockData = merge({}, oldData);
    let stockId = oldData.id;
    stockData.total_quantity += Number(this.state.quantity);
    stockData.total_investment = (
      this.state.totalPrice + Number(stockData.total_investment)
    ).toFixed(2);
    delete stockData.id;
    this.props.updateStock(stockId, stockData);
  }

  addRecord() {
    let transactionData = {};
    transactionData.symbol = this.state.stock.symbol;
    transactionData.quantity = Number(this.state.quantity);
    transactionData.purchase_price = this.state.stock.latestPrice;
    transactionData.total_price = this.state.totalPrice;

    this.props.createTransaction(transactionData);
  }

  getStockId() {
    this.setState({ stockId: this.props.stocks[this.state.stock.symbol].id });
  }

  changeQuantity(e) {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      this.setState(
        {
          quantity: e.target.value,
          totalPrice: Number(
            (this.state.stock["latestPrice"] * e.target.value).toFixed(2)
          )
        },
        () => {
          if (this.state.totalPrice > this.props.currentUser.balance) {
            this.setState({ overPriced: true });
          } else {
            this.setState({ overPriced: false, showError: false });
          }
        }
      );
    }
  }

  render() {
    return (
      <div className="stock-purchase">
        <div className="balance">
          Balance: ${this.props.currentUser.balance}{" "}
        </div>
        <div className="symbol-search">
          <form onSubmit={this.getStockInfo}>
            <input
              type="text"
              placeholder="Enter the Ticker Symbol"
              value={this.state.symbol}
              onChange={this.handleChange}
            />
          </form>
          {this.state.notFound ? (
            <div>Sorry, cannot find the stock with this symbol.</div>
          ) : null}
          {this.state.stock ? (
            <div className="search-result">
              <div>{this.state.stock["companyName"]} </div>
              <div>Lastest Price: ${this.state.stock["latestPrice"]}</div>
              <div className="purchase-section">
                <div>
                  Quantity:
                  <br />
                  <input
                    className="quantity-input"
                    type="number"
                    min="1"
                    step="1"
                    value={this.state.quantity}
                    onChange={this.changeQuantity}
                    placeholder="Enter the quantity"
                  />
                  <div>
                    Total Price:
                    <span className={this.state.overPriced ? "overPriced" : ""}>
                      ${(
                        this.state.stock["latestPrice"] * this.state.quantity
                      ).toFixed(2)}
                    </span>
                  </div>
                  {this.state.showError ? (
                    <div>You can't buy this amount of stocks</div>
                  ) : null}
                  <button
                    className="purchase-button"
                    onClick={this.changeModal}
                  >
                    Purchase
                  </button>
                </div>
              </div>
            </div>
          ) : null}
          {this.state.modalSwitch ? (
            <div className="confirmation">
              <div className="confirm-box">
                <h3>Do you want to continue this transaction?</h3>
                <div className="confirm-buttons">
                  <button onClick={this.purchaseStock}>Yes</button>
                  <button onClick={this.changeModal}>No</button>
                </div>
              </div>
              <div className="modal" />
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    stocks: state.stocks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateBalance: (id, balance) => dispatch(updateBalance(id, balance)),
    createStock: data => dispatch(createStock(data)),
    updateStock: (id, data) => dispatch(updateStock(id, data)),
    createTransaction: data => dispatch(createTransaction(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StockPurchase);
