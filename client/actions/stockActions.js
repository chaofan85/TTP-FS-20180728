import * as StockAPIUtil from "../util/stockApiUtil.js";

export const RECEIVE_STOCK_INFO = "RECEIVE_STOCK_INFO";

const receiveStockInfo = stock => {
  return {
    type: RECEIVE_STOCK_INFO,
    stock
  };
};

export const searchSymbol = symbol => dispatch => {
  return StockAPIUtil.searchSymbol(symbol).then(data =>
    dispatch(receiveStockInfo(data))
  );
};
