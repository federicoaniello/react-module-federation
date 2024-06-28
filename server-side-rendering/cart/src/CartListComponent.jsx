import React, { useState, useEffect } from "react";
import { cart$, loadCartData } from "api/Api";

const CartList = () => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    loadCartData();
    const subscription = cart$.subscribe(cart => {
      setProducts(cart.products);
      setTotal(cart.total);
    });

    return () => subscription.unsubscribe();
  }, []);

  const cartItems = products.map(product => (
    <div className="card mb-2" key={product.id}>
      <div className="card-body d-flex">
        <img
          src={product.image}
          alt={product.name}
          style={{ height: '30px', width: '30px', objectFit: 'contain' }}
        />
        <span className="mx-3 flex-fill">{product.name}</span>
        <div className="text-end">
          {product.quantity} x <strong>€{product.price}</strong>
        </div>
      </div>
    </div>
  ));

  return (
    products.length === 0 ? (
      <p>Carrello vuoto</p>
    ) : (
      <>
        {cartItems}
        <hr />
        <div className="text-end display-6 mb-5">
          <strong>Totale: €{total}</strong>
        </div>
      </>
    )
  );
};

export default CartList;
