import React, { Component } from "react";
import { connect } from "react-redux";
import searchSymbol from "../../actions/stockActions";
import "./portfolio.css";

class StockPurchase extends Component {
  constructor(props) {
    super(props);

    this.state = { symbol: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    return e => {
      this.setState({ symbol: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.searchSymbol(this.state.symbol).then(() => {
      this.setState({
        symbol: ""
      });
    });
  }

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

const mapDispatchToProps = dispatch => {
  return {
    searchSymbol: symbol => dispatch(searchSymbol(symbol))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(StockPurchase);
