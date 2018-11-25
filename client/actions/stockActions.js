import * as StockAPIUtil from "../util/stockApiUtil.js";

export const RECEIVE_STOCK_INFO = "RECEIVE_STOCK_INFO";
export const UPDATE_CURRENT_USER = "UPDATE_CURRENT_USER";

const receiveStockInfo = stock => {
  return {
    type: RECEIVE_STOCK_INFO,
    stock
  };
};

const updateCurrenUser = user => {
  return {
    type: UPDATE_CURRENT_USER,
    user
  };
};

export const searchSymbol = symbol => dispatch => {
  return StockAPIUtil.searchSymbol(symbol).then(data =>
    dispatch(receiveStockInfo(data))
  );
};

export const updateBalance = symbol => dispatch => {
  return StockAPIUtil.updateBalance(symbol).then(data =>
    dispatch(updateCurrenUser(data))
  );
};
