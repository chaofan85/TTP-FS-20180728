// export const searchSymbol = symbol => {
//   let URL = "https://api.iextrading.com/1.0/stock/";
//   return $.ajax({
//     method: "GET",
//     url: `${URL}${symbol}/quote?displayPercent=true`,
//     dataType: "jsonp"
//   });
// };

export const updateBalance = (id, balance) => {
  console.log(id, balance);
  return $.ajax({
    method: "PATCH",
    url: `/api/users/${id}`,
    data: { user: { balance } }
  });
};
