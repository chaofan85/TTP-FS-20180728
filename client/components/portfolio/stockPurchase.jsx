import React, { Component } from "react";
import { connect } from "react-redux";
import { updateBalance } from "../../actions/stockActions";
import axios from "axios";
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
      showError: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.getStockInfo = this.getStockInfo.bind(this);
    this.purchaseStock = this.purchaseStock.bind(this);
    this.changeQuantity = this.changeQuantity.bind(this);
    this.changeModal = this.changeModal.bind(this);
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
          showError: false
        });
      })
      .catch();
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
    this.props.updateBalance(id, newBalance).then(() => {
      console.log(this.state);
      document.body.style.overflow = "visible";
      this.setState({
        modalSwitch: false,
        quantity: "",
        totalPrice: 0
      });
    });
  }

  createNewStock() {
    let stockData = {};
    // symbol, :company_name, :total_quantity, :purchase_price, :total_investment
    stockData.symbol = this.state.stock.symbol;
    stockData.company_name = this.state.stock.companyName;
    stockData.total_quantity = Number(this.state.quantity);
    stockData.purchase_price = this.state.totalPrice;
  }

  changeQuantity(e) {
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

  render() {
    const handleClick = e => {
      this.setState({ symbol: e.target.value });
    };

    return (
      <div className="stock-purchase">
        <div className="balance">
          balance: ${this.props.currentUser.balance}{" "}
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
          {this.state.stock ? (
            <div className="search-result">
              <div>{this.state.stock["companyName"]} </div>
              <div>${this.state.stock["latestPrice"]}</div>
              <div>
                Quantity:
                <br />
                <input
                  type="number"
                  min="1"
                  step="1"
                  value={this.state.quantity}
                  onChange={this.changeQuantity}
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
                <button onClick={this.changeModal}>Purchase</button>
              </div>
            </div>
          ) : null}
          {this.state.modalSwitch ? (
            <div className="confirmation">
              <div className="confirm-box">
                <div>Do you want to continue this transaction?</div>
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
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateBalance: (id, balance) => dispatch(updateBalance(id, balance))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StockPurchase);
