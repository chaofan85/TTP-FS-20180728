import * as StockAPIUtil from "../util/stockApiUtil.js";

export const UPDATE_CURRENT_USER = "UPDATE_CURRENT_USER";
export const RECEIVE_STOCKS = "RECEIVE_STOCKS";

const updateCurrenUser = user => {
  return {
    type: UPDATE_CURRENT_USER,
    user
  };
};

const receiveStocks = stocks => {
  return {
    type: RECEIVE_STOCKS,
    stocks
  };
};

export const updateBalance = (id, balance) => dispatch => {
  return StockAPIUtil.updateBalance(id, balance).then(data =>
    dispatch(updateCurrenUser(data))
  );
};

export const getStocks = id => dispatch => {
  return StockAPIUtil.getStocks(id).then(data => dispatch(receiveStocks(data)));
};
