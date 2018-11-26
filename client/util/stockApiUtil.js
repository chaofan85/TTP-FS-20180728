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

export const createStock = data => {
  return $.ajax({
    method: "POST",
    url: "/api/stocks",
    data: { stock: data }
  });
};

export const updateStock = (id, data) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/stocks/${id}`,
    data: { stock: data }
  });
};
