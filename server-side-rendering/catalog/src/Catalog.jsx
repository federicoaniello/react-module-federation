import React from "react";
import ProductList from "./product-list.component";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Root(props) {
  React.useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((products) => {
        console.log(products);
      });
  });
  return (
    <BrowserRouter basename="/catalog">
      <div className="container">
        <Routes>
          <Route path="/">
            <Route path="/:category?" element={<ProductList/>} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
