import React from "react";
import { Link } from "react-router-dom";

class ProductFilter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((categories) => {
        this.setState({ categories });
      });
  }

  render() {
    return (
      <div className="row mb-3">
        <div className="col"><Link to='/' className={`btn ${this.props.activeFilter ? 'btn-secondary' : 'btn-primary'} w-100`}>Tutti</Link></div>
        {this.state.categories.map((category) => {
          const categoryLink = category.toLowerCase().replace(/\s/g, '-');
          return (
            <div className="col" key={category}><Link to={`/${categoryLink}`} className={`btn ${this.props.activeFilter == categoryLink ? 'btn-primary' : 'btn-light'} w-100`}>{category}</Link></div>
          );
        })}
      </div>
    );
  }
}

export default ProductFilter;
