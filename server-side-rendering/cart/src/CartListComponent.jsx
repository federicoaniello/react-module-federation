import React from "react";
import { cart$, loadCartData } from "api/Api";

class CartList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      products: [],
      total: 0,
    }
  }

  componentDidMount() {
    loadCartData();
    cart$.subscribe(cart => {
      this.setState({
        products: cart.products,
        total: cart.total
      })
    })
  }

  render() {
    const cartItems = this.state.products.map(product => {
      return <div className="card mb-2">
        <div className="card-body d-flex">
          <img src={product.image} style={{height: '30px', width: '30px', objectFit:'contain'}} />
          <span className="mx-3 flex-fill">{product.name}</span>
          <div className="text-end">
            {product.quantity} x <strong>€{product.price}</strong>
          </div>
        </div>
      </div>
    });

    return (
      this.state.products.length == 0 ? 
      <p>Carrello vuoto</p> :
      [
        cartItems,
        <hr/>,
        <div className="text-end display-6 mb-5"><strong>Totale: €{this.state.total}</strong></div>
      ]
    );
  }
}

export default CartList;

