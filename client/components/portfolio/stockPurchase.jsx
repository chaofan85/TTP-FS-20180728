import React, { Component } from "react";
import { connect } from "react-redux";
import searchSymbol from "../../actions/stockActions";
import axios from "axios";
import "./portfolio.css";

class StockPurchase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      symbol: "",
      stock: null,
      quantity: "",
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

  handleChange() {
    return e => {
      this.setState({ symbol: e.target.value });
    };
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
          symbol: ""
        });
      })
      .catch();
  }

  changeModal() {
    if (!this.state.overPriced) {
      this.setState({ changeModal: true });
    } else {
      this.setState({ showError: true });
    }
    // this.setState({ modalSwitch: !this.state.modalSwitch });
  }

  purchaseStock() {
    // this.setState({ showForm: !this.state.showForm });
  }

  changeQuantity() {
    return e => {
      this.setState({ quantity: e.target.value }, () => {
        if (
          Number(
            (
              this.state.stock["iexRealtimePrice"] * this.state.quantity
            ).toFixed(2)
          ) > this.props.currentUser.balance
        ) {
          this.setState({ overPriced: true });
        } else {
          this.setState({ overPriced: false });
        }
      });
    };
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
              onChange={handleChange}
            />
          </form>
          {this.state.stock ? (
            <div className="search-result">
              <div>{this.state.stock["companyName"]} </div>
              <div>${this.state.stock["iexRealtimePrice"]}</div>
              <div>
                Quantity:
                <br />
                <input
                  type="number"
                  min="1"
                  step="1"
                  value={this.state.quantity}
                  onChange={this.changeQuantity()}
                />
                <div>
                  Total Price:
                  <span className={this.state.overPriced ? "overPriced" : ""}>
                    ${(
                      this.state.stock["iexRealtimePrice"] * this.state.quantity
                    ).toFixed(2)}
                  </span>
                </div>
                <button onClick={this.changeModal}>Purchase</button>
              </div>
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
    searchSymbol: symbol => dispatch(searchSymbol(symbol))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StockPurchase);
