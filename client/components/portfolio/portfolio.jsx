import React from "react";
import StockList from "./stockList";
import StockPurchase from "./stockPurchase";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <main className="portfolio-area">
      <StockList />
      <div className="vertical-line" />
      <StockPurchase />
    </main>
  );
};

export default Portfolio;
