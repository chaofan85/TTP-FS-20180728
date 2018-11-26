import * as TransactionAPIUtil from "../util/transactionApiUtil.js";

export const RECEIVE_RECORDS = "RECEIVE_RECORDS";
export const RECEIVE_RECORD = "RECEIVE_RECORD";

const receiveRecords = data => {
  return {
    type: RECEIVE_RECORDS,
    transactions: data.transactions
  };
};

const receiveRecord = data => {
  return {
    type: RECEIVE_RECORD,
    data
  };
};

export const getTransactions = id => dispatch => {
  return TransactionAPIUtil.getTransactions(id).then(data =>
    dispatch(receiveRecords(data))
  );
};

export const createTransaction = data => dispatch => {
  return TransactionAPIUtil.createTransaction(data).then(payload =>
    dispatch(receiveRecord(payload))
  );
};
