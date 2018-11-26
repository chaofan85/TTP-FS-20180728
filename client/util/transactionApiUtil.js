export const getTransactions = id => {
  return $.ajax({
    mathod: "GET",
    url: `/api/users/${id}`
  });
};

export const createTransaction = data => {
  return $.ajax({
    method: "POST",
    url: "/api/transactions",
    data: { transaction: data }
  });
};
