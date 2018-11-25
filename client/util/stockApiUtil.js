export const updateBalance = (id, balance) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/users/${id}`,
    data: { user: { balance } }
  });
};

export const getStocks = id => {
  return $.ajax({
    mathod: "GET",
    url: `/api/users/${id}`
  });
};
