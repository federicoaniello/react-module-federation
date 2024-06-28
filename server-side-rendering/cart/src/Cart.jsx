import React from "react";
import CartListComponent from "./CartListComponent";
const Cart = (props) => {
  return (
    <section>
      <div className="px-4 pt-5 my-5 text-center border-bottom">
        <h1 className="display-4 fw-bold">Carrello</h1>
        <div className="col-lg-6 mx-auto">
          <CartListComponent />
        </div>
      </div>
    </section>
  );
};

export default Cart;
