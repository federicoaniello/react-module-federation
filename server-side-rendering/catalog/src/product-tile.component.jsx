import { addToCart } from "api/Api";
import React from "react";
class ProductTile extends React.Component  {
  state;

  constructor(props) {
    super(props);

    this.state = {
      id: props.productId,
      name: props.name,
      image: props.image,
      description: props.description,
      price: props.price,
      category: props.category,
    };
  }

  onBuyClick() {
    addToCart({
      id: this.state.id,
      name: this.state.name,
      price: this.state.price,
      image: this.state.image
    });
  }

  render() {
    return (
      <div className="card mb-3">
        <img src={this.state.image} className="card-img-top p-3" alt="preview" style={{height: "15vw", objectFit: "contain"}} />
        <div className="card-body">
          <h5 className="card-title">{this.state.name}</h5>
          <span className="badge text-bg-secondary">{this.state.category}</span>
          <p className="card-text">{this.state.description}</p>
          <div className="d-flex justify-content-between">
            <strong>€ {this.state.price}</strong>
            <button onClick={() => this.onBuyClick()} className="btn btn-primary">Buy</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductTile;
