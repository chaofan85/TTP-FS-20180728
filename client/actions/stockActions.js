import * as StockAPIUtil from "../util/stockApiUtil.js";

export const UPDATE_CURRENT_USER = "UPDATE_CURRENT_USER";
export const RECEIVE_STOCKS = "RECEIVE_STOCKS";
export const RECEIVE_STOCK = "RECEIVE_STOCK";
export const UPDATE_STOCKS = "UPDATE_STOCKS";

const updateCurrenUser = user => {
  return {
    type: UPDATE_CURRENT_USER,
    user
  };
};

const receiveStocks = data => {
  return {
    type: RECEIVE_STOCKS,
    stocks: data.stocks
  };
};

const receiveStock = stocks => {
  return {
    type: RECEIVE_STOCK,
    stocks
  };
};

const updateStocks = stock => {
  return {
    type: UPDATE_STOCKS,
    stock
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

export const createStock = data => dispatch => {
  return StockAPIUtil.createStock(data).then(payload =>
    dispatch(updateStocks(payload))
  );
};

export const updateStock = (id, data) => dispatch => {
  return StockAPIUtil.updateStock(id, data).then(payload =>
    dispatch(updateStocks(payload))
  );
};
