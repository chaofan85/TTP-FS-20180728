export const searchSymbol = symbol => {
  return $.ajax({
    method: "GET",
    url: `https://api.iextrading.com/1.0/stock/${symbol}/quote?displayPercent=true`,
    dataType: "jsonp"
  });
};
