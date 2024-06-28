import React from "react";
import ProductTile from "./product-tile.component";
import ProductFilter from "./product-filter.component";
import { useParams } from "react-router-dom";

class ProductList extends React.Component {
  constructor(props) {
    super(props);
   
    this.state = {
      products: [],
      category: props.params.category
    }
  }

  componentDidMount() {
   this.updateList();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.params?.category !== this.props.params?.category) {
      this.setState({category: this.props.params?.category || undefined}, this.updateList);
    }
  }

  updateList() {
    const category = this.state.category;
    const productsApiUrl = category ? `https://fakestoreapi.com/products/category/${encodeURI(category).replace(/'/g, '%27').replace(/-/g, '%20')}` : 'https://fakestoreapi.com/products';
    fetch(productsApiUrl)
      .then(res=>res.json())
      .then((products) => {
        this.setState({products})
      });
  }

  render() {
    return(
      <div>
        <div className="row mb-3">
          <div className="col">
            <ProductFilter activeFilter={this.state.category}/>
          </div>
        </div>
        <div className="row row-cols-3">
          {
            this.state.products.map(product => {
              return <div className="col" key={product.id}>
                <ProductTile 
                  productId={product.id} 
                  image={product.image} 
                  name={product.title} 
                  description={product.description}
                  price={product.price} 
                  category={product.category} />
              </div>
            })
          }
        </div>
      </div>
    )
  }
}

export default (props) => (<ProductList {...props} params={useParams()} />);
